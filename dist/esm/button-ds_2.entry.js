import { r as registerInstance, h } from './core-42aadb82.js';

const Ds = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.value = "Boton";
        this.active = false;
    }
    handleClick() {
        this.active = !this.active;
    }
    render() {
        return h("button", { class: this.active ? "active" : "" }, this.value);
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
        registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", null, "Hello, World! I'm ", this.getText());
    }
    static get style() { return "div{color:red}"; }
};

export { Ds as button_ds, MyComponent as my_component };
