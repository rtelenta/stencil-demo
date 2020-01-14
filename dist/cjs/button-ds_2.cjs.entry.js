'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-e07d6aa2.js');

const Ds = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.value = "Boton";
        this.active = false;
    }
    handleClick() {
        this.active = !this.active;
    }
    render() {
        return core.h("button", { class: this.active ? "active" : "" }, this.value);
    }
    static get style() { return "button{border:1px solid peru;background:none;color:peru}button.active{background:peru;color:#fff}"; }
};

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const MyComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return core.h("div", null, "Hello, World! I'm ", this.getText());
    }
    static get style() { return "div{color:red}"; }
};

exports.button_ds = Ds;
exports.my_component = MyComponent;
