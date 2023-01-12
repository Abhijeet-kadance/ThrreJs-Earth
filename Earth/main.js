// THREE JS CODE

import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,innerWidth / innerHeight,0.1,1000)
const renderer = new THREE.WebGLRenderer(
  {
    antialias:true
  }
)
renderer.setSize(innerWidth,innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)


// Creating a shpere

const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), 
  new THREE.ShaderMaterial({
    // color: 0xFF0000 
    // map: new THREE.TextureLoader().load('./image/globe.jpg')
    vertexShader,
    fragmentShader
  }))

//console.log(sphere)


// 
scene.add(sphere)
camera.position.z = 15
function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate()

// console.log(renderer)
// console.log(camera)
// console.log(scene)
