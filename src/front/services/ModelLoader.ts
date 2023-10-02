import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import * as THREE from "three";
import { getScene } from "./DefaultScene";

class ModelLoader {
  material: THREE.Material;
  loader: THREE.Loader;
  scene: THREE.Scene;
  fileName: string;

  constructor(fileName: string, material?: THREE.Material,scene?: THREE.Scene,) {
    this.scene = scene ?? getScene();
    this.loader = new STLLoader();
    this.material = material ??
      new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.fileName = fileName;

    this.loader.load(
      fileName,
      function (geometry: any) {
        const mesh = new THREE.Mesh(geometry, this.material);
        scene.add(mesh);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
