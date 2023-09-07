"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./MyLabel.css");
var MyLabel = function (_a) {
    var _b = _a.allCaps, allCaps = _b === void 0 ? false : _b, color = _a.color, fontColor = _a.fontColor, label = _a.label, _c = _a.size, size = _c === void 0 ? 'normal' : _c;
    return ((0, jsx_runtime_1.jsx)("span", { style: { color: fontColor }, className: "label ".concat(size, " ").concat(color), children: allCaps ? label.toUpperCase() : label }));
};
exports.MyLabel = MyLabel;
