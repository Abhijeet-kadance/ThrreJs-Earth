// THREE JS CODE

import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import atmosphereVertexShader from './shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl'
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
  //new THREE.ShaderMaterial
  //new THREE.MeshBasicMaterial
  new THREE.ShaderMaterial({
    //  color: 0xFF0000,
    // map: new THREE.TextureLoader().load('./image/globe.jpg')
    vertexShader,
    fragmentShader,
    uniforms: {
      globeTexture: {
        value: new THREE.TextureLoader().load('./image/globe.jpg')
      }
    }
  })
  )

  scene.add(sphere)

// Atmosphere Sphere

const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), 
  //new THREE.ShaderMaterial
  //new THREE.MeshBasicMaterial
  new THREE.ShaderMaterial({
    //  color: 0xFF0000,
    // map: new THREE.TextureLoader().load('./image/globe.jpg')
    vertexShader:atmosphereVertexShader,
    fragmentShader:atmosphereFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
  })
  )
atmosphere.scale.set(1.1,1.1,1.1)

scene.add(atmosphere)
camera.position.z = 15

function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  sphere.rotation.y += 0.001
  sphere.rotation.x += 0.001
}

animate()

// console.log(renderer)
// console.log(camera)
// console.log(scene)
