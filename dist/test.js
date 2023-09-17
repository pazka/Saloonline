"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
var OBJLoader_js_1 = require("three/addons/loaders/OBJLoader.js");
var loader = new OBJLoader_js_1.OBJLoader();
function test() {
    // load a resource
    loader.load(
    // resource URL
    'models/monster.obj', 
    // called when resource is loaded
    function (object) {
        scene.add(object);
    }, 
    // called when loading is in progresses
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, 
    // called when loading has errors
    function (error) {
        console.log('An error happened');
    });
}
exports.test = test;
