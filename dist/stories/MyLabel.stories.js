"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColor = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var MyLabel_1 = require("../components/MyLabel");
var meta = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' },
    }
};
exports.default = meta;
exports.Basic = {
    args: {
        label: 'Basic Label',
    }
};
exports.AllCaps = {
    args: {
        label: 'AllCaps Label',
        allCaps: true,
    }
};
exports.Secondary = {
    args: {
        label: 'Secondary Label',
        color: 'text-secondary',
    }
};
exports.CustomColor = {
    args: {
        label: 'CustomColor Label',
        fontColor: '#5517AC',
    }
};
