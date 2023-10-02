uniform vec3 colorA;
uniform vec3 colorB;
varying vec3 vUv;

void main() {
    gl_FragColor = vec4(mix(colorA, colorB, vUv.x/vUv.y), 1.0f);
}