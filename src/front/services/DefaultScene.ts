import * as THREE from 'three';

const __scene = new THREE.Scene();

__scene.add(new THREE.AxesHelper(5));

export function getScene() {
    return __scene;
}