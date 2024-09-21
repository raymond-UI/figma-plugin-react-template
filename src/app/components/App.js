"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var logo_svg_1 = __importDefault(require("../assets/logo.svg"));
require("../styles/ui.css");
function App() {
    var textbox = react_1.default.useRef(undefined);
    var countRef = react_1.default.useCallback(function (element) {
        if (element)
            element.value = '5';
        textbox.current = element;
    }, []);
    var onCreate = function () {
        var count = parseInt(textbox.current.value, 10);
        parent.postMessage({ pluginMessage: { type: 'create-rectangles', count: count } }, '*');
    };
    var onCancel = function () {
        parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
    };
    react_1.default.useEffect(function () {
        // This is how we read messages sent from the plugin controller
        window.onmessage = function (event) {
            var _a = event.data.pluginMessage, type = _a.type, message = _a.message;
            if (type === 'create-rectangles') {
                console.log("Figma Says: ".concat(message));
            }
        };
    }, []);
    return (<div>
      <img src={logo_svg_1.default}/>
      <h2>Rectangle Creator</h2>
      <p>
        Count: <input ref={countRef}/>
      </p>
      <button id="create" onClick={onCreate}>
        Create
      </button>
      <button onClick={onCancel}>Cancel</button>
    </div>);
}
exports.default = App;
