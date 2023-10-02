varying vec3 vUv;
uniform float time;

void main() {
    vUv = position;

    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0f);
    modelViewPosition.x = sin(position.z + 1000.f * time) + position.x;
    gl_Position = projectionMatrix * modelViewPosition;
}