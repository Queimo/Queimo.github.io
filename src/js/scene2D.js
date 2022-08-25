import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const fragS = `

#include <common>
uniform vec3 iResolution;
uniform float iTime;
uniform vec4 iMouse;
uniform vec2 vp;

// domain warping based on the master's notes at https://iquilezles.org/articles/warp

// NOISE ////


float hash( float n )
{
    return fract(sin(n)*43758.5453);
}

float noise( in vec2 x )
{
    vec2 p = floor(x);
    vec2 f = fract(x);
    f = f*f*(3.0-2.0*f);
    float n = p.x + p.y*57.0;
    return mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
               mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
}

vec2 hash2( float n )
{
    return fract(sin(vec2(n,n+1.0))*vec2(13.5453123,31.1459123));
}





const mat2 mtx = mat2( 0.80,  0.60, -0.60,  0.80 );

float fbm( vec2 p )
{
    float f = 0.0;

    f += 0.500000*noise( p ); p = mtx*p*2.02;
    f += 0.250000*noise( p ); p = mtx*p*2.03;
    f += 0.125000*noise( p ); p = mtx*p*2.01;
    f += 0.062500*noise( p ); p = mtx*p*2.04;
    f += 0.031250*noise( p ); p = mtx*p*2.01;
    f += 0.015625*noise( p );

    return f/0.96875;
}

// -----------------------------------------------------------------------

float pattern(in vec2 p, in float t, in vec2 uv, out vec2 q, out vec2 r, out vec2 g)
{
	q = vec2(fbm(p), fbm(p + vec2(10, 1.3)));
    
    float s = dot(uv.x + 0.5, uv.y + 0.5);
    r = vec2(fbm(p + 4.0 * q + vec2(t) + vec2(1.7, 9.2)), fbm(p + 4.0 * q + vec2(t) + vec2(8.3, 2.8)));
    g = vec2(fbm(p + 2.0 * r + vec2(t * 20.0) + vec2(2, 6)), fbm(p + 2.0 * r + vec2(t * 10.0) + vec2(5, 3)));
    return fbm(p + 5.5 * g + vec2(-t * 7.0));
}

float sdCircle( vec2 p, float r )
{

    float displ = sin(100.0*p.x) * sin(100.0*p.y + iTime*0.5);
    // float ret = step(length(p) - r, 0.1); 
    // return ret + displ * 0.025;

    float mask = max(1.-((length(p) - r))*10.,0.); 
    return max(1.-(length(p) - r)*10.,0.) ;
    // return step(length(p) - r, 0.01);
}

float c = 1.;


vec2 c_pos = vec2(0.5);
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;
    
    // noise
    vec2 q, r, g;
    
    vec4 m = vec4(iMouse.xy / iResolution.x, 1, 1);
    
    c += (m.y - 0.5);
    
    
    float noise = pattern((fragCoord+c*vec2(0.0, 1.0)*500.)*0.0004, iTime * 0.001, uv,q, r, g);
    
    // base color based on main noise
    vec3 col = mix(vec3(0.131,0.400,0.279), vec3(0.220,0.050,0.700), smoothstep(0.0, 1.0, noise));
    
    // other lower-octave colors and mixes
    col = mix(col, vec3(0.050,0.011,0.55), dot(q, q) * 1.0);
    col = mix(col, vec3(0.325,0.011,0.020), 0.2*g.y*g.y);
    col = mix(col, vec3(0.039,0.185,0.121), smoothstep(0.0, .6, 0.6*r.g*r.g));
    col = mix(col, vec3(0.540,0.153,0.301), 0.1*g.x);
    
    // some dark outlines/contrast and different steps
    col = mix(col, vec3(0), smoothstep(0.3, 0.5, noise) * smoothstep(0.5, 0.3, noise));
    col = mix(col, vec3(0), smoothstep(0.7, 0.8, noise) * smoothstep(0.8, 0.7, noise));
    
    // // contrast
    col *= noise*1.8;
    
    // // vignette
    col *= 0.70 + 0.65 * sqrt(70.0*uv.x*uv.y*(1.0-uv.x)*(1.0-uv.y));
       
    
    vec2 dir = m.xy;
    
    
    // col = vec3(0.);

    // noise
    vec2 Q, R, G;
    
    float noise_v = pattern((fragCoord)*0.004, iTime * 0.007, uv, Q, R, G);
    
    // base color based on main noise
    vec3 col_v = mix(vec3(0.531,0.200,0.279), vec3(0.220,0.050,0.700), smoothstep(0.0, 1.0, noise_v));

    col_v = mix(col_v, vec3(0.050,0.011,0.55), dot(Q, Q) * 1.0);
    col_v = mix(col_v, vec3(0.325,0.011,0.020), 0.2*G.y*G.y);
    col_v = mix(col_v, vec3(0.039,0.185,0.121), smoothstep(0.0, .6, 0.6*R.g*R.g));
    col_v = mix(col_v, vec3(0.540,0.153,0.301), 0.1*G.x);
    
    // some dark outlines/contrast and different steps
    col_v = mix(col_v, vec3(0), smoothstep(0.3, 0.5, noise) * smoothstep(0.5, 0.3, noise));
    col_v = mix(col_v, vec3(0), smoothstep(0.7, 0.8, noise) * smoothstep(0.8, 0.7, noise));


    float d = sdCircle(uv - vp, 1.*(noise*1.)/(noise_v*10.));
    col_v =  d*0.916*col_v*(fbm(vec2(iTime, 0.))-2.);
    col += col_v;
    
    // Output to screen
    fragColor = vec4(col,1.0);
}

  void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
  }

`;

let renderer;

const camera = new THREE.OrthographicCamera(
  -1, // left
  1, // right
  1, // top
  -1, // bottom
  -1, // near,
  1, // far
);
const scene = new THREE.Scene();
const plane = new THREE.PlaneBufferGeometry(2, 2);

const fragmentShader = fragS;
const uniforms = {
  iTime: { value: 0 },
  iResolution: { value: new THREE.Vector3() },
  iMouse: { value: new THREE.Vector4(0., 0., 0., 0.) },
  vp: { value: new THREE.Vector2(0., 0.) }
};
let material = new THREE.ShaderMaterial({
  fragmentShader,
  uniforms,
});

// let material = new THREE.MeshBasicMaterial({ color: 0x0044ff });

scene.add(new THREE.Mesh(plane, material));

// const ball = new THREE.SphereGeometry(5);
// let ball_material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// scene.add(new THREE.Mesh(ball, ball_material));


function shaderMove() {
  const t = document.body.getBoundingClientRect().top;
  uniforms.iMouse.value.y = t;

  // camera.position.y = t/50;
  // uniforms.vp.value =

}

document.body.onscroll = shaderMove;
shaderMove();

// document.onclick = function(){
//   camera.position.y += 0.3

// }

let set_point = new THREE.Vector2(0., 0.);

onmousemove = function(e){
  
  // console.log("mouse location:", e.clientX, e.clientY)

  set_point.x = e.clientX/window.innerWidth
  set_point.y = 1-e.clientY/window.innerHeight

}

let vp_3 = new THREE.Vector2(0. , 0.);

const animate = (ts) => {

  ts *= 0.001;
  uniforms.iTime.value = ts;
  uniforms.iResolution.value = new THREE.Vector3(window.innerWidth, window.innerHeight, 1);

  vp_3.x -= (vp_3.x - set_point.x)*0.05;
  vp_3.y -= (vp_3.y - set_point.y)*0.05;

  // const dist = vp_3.distanceTo(set_point);

  // vp_3 = new THREE.Vector2(Math.cos(ts) * 0.1 +0.35, Math.sin(ts) * 0.05 +0.5);
  uniforms.vp.value = vp_3;
  // uniforms.vp.value = ;


  renderer.render(scene, camera);

  requestAnimationFrame(animate);
};

const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  // camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

export const createScene = (el) => {
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
  // const controls = new OrbitControls(camera, renderer.domElement);
  resize();
  animate();
}

window.addEventListener('resize', resize);