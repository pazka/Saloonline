import { MatShader } from "../types";

import * as THREE from "three";
const fileLoader = new THREE.FileLoader();

class ShaderLoader {
  vShader: any;
  vShaderDone: boolean;
  fShader: any;
  fShaderDone: boolean;
  shaderName: string;
  material: THREE.ShaderMaterial;

  constructor(shaderName: string, material?: THREE.ShaderMaterial) {
    this.shaderName = shaderName;
    this.material = material ?? new THREE.ShaderMaterial();

    this.vShaderDone = false;
    this.fShaderDone = false;
  }

  async getShader(): Promise<THREE.ShaderMaterial> {
    return new Promise((resolve, reject) => {
      if (this.material) {
        return resolve(this.material);
      }

      function returnShader() {
        if (this.vShaderDone && this.fShaderDone) {
          this.material = new THREE.ShaderMaterial({
            uniforms: {
              colorA: { value: new THREE.Color(0xff0000) },
              colorB: { value: new THREE.Color(0x0000FF) },
              time: { value: 1.0 },
              resolution: { value: new THREE.Vector2() },
            },
            vertexShader: this.vShader,
            fragmentShader: this.fShader,
          });
          return resolve(this.material);
        }
      }

      fileLoader.load(
        `public/shaders/${this.shaderName}.vert`,
        function (data) {
          this.vShader = data;
          this.vShaderDone = true;
          returnShader();
        },
      );
      fileLoader.load(
        `public/shaders/${this.shaderName}.frag`,
        function (data) {
          this.fShader = data;
          this.fShaderDone = true;
          returnShader();
        },
      );
      let timer = setTimeout(() => {
        clearTimeout(timer);
        return reject("timeout");
      }, 5000);
    });
  }
}
