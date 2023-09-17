"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//basic express static server in typescript
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, './static')));
app.get('/', function (req, res) {
    res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
