import * as THREE from "three";
const __renderer = new THREE.WebGLRenderer();
__renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(__renderer.domElement);

export function getRenderer() {
  return __renderer;
}
