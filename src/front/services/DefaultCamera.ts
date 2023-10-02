import * as THREE from "three";

const __camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

__camera.position.z = 5;
export function getCamera() {
  return __camera;
}
