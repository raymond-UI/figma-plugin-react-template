"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = require("react-dom/client");
var App_1 = __importDefault(require("./components/App"));
document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('react-page');
    var root = (0, client_1.createRoot)(container);
    root.render(<App_1.default />);
});
