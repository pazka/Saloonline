import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { getCamera } from "./DefaultCamera";
import { getRenderer } from "./DefaultRenderer";

const __controls = new OrbitControls(getCamera(), getRenderer().domElement);
__controls.update();

export function getControls() {
  return __controls;
}