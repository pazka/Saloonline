
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

// load a resource
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const loader = new STLLoader()

export function test(scene: THREE.Scene) {
    loader.load(
        'models/example.stl',
        function (geometry) {
            const mesh = new THREE.Mesh(geometry, material)
            scene.add(mesh)
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    )
}