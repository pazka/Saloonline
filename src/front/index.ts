//init threejs scene

import * as THREE from "three";
import { getScene } from "./services/DefaultScene";
import { getCamera } from "./services/DefaultCamera";
import { getRenderer } from "./services/DefaultRenderer";
import { getControls } from "./services/DefaultControls";

const clock = new THREE.Clock();

const animate = function () {
  const scene = getScene();
  const camera = getCamera();
  const renderer = getRenderer();
  const controls = getControls();

  requestAnimationFrame(animate);
  controls.update();

  renderer.render(scene, camera);
};

animate();
