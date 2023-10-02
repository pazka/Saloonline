import * as THREE from 'three';
import { MatShader } from './types';
const fileLoader = new THREE.FileLoader();

let __shaderMaterial: THREE.ShaderMaterial = null

export async function getTestShader(): Promise<THREE.ShaderMaterial> {
    let vShader: any = null
    let vShaderDone = false
    let fShader: any = null
    let fShaderDone = false

    return new Promise((resolve, reject) => {
        if (__shaderMaterial) {
            return resolve(__shaderMaterial)
        }

        function returnShader() {
            if (vShaderDone && fShaderDone) {
                __shaderMaterial = new THREE.ShaderMaterial({
                    uniforms: {
                        colorA: { value: new THREE.Color(0xff0000) },
                        colorB: { value: new THREE.Color(0x0000FF) },
                        time: { value: 1.0 },
                        resolution: { value: new THREE.Vector2() }
                    },
                    vertexShader: vShader,
                    fragmentShader: fShader
                })
                return resolve(__shaderMaterial)
            }
        }

        fileLoader.load('public/shaders/test.vert', function (data) {
            vShader = data; vShaderDone = true; returnShader()
        });
        fileLoader.load('public/shaders/test.frag', function (data) {
            fShader = data; fShaderDone = true; returnShader()
        })
        let timer = setTimeout(() => {
            clearTimeout(timer)
            return reject('timeout')
        }, 5000)
    })
}