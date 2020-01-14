import { r as registerInstance, h } from './core-42aadb82.js';
var Ds = /** @class */ (function () {
    function Ds(hostRef) {
        registerInstance(this, hostRef);
        this.value = "Boton";
        this.active = false;
    }
    Ds.prototype.handleClick = function () {
        this.active = !this.active;
    };
    Ds.prototype.render = function () {
        return h("button", { class: this.active ? "active" : "" }, this.value);
    };
    Object.defineProperty(Ds, "style", {
        get: function () { return "button{border:1px solid peru;background:none;color:peru}button.active{background:peru;color:#fff}"; },
        enumerable: true,
        configurable: true
    });
    return Ds;
}());
function format(first, middle, last) {
    return ((first || '') +
        (middle ? " " + middle : '') +
        (last ? " " + last : ''));
}
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    MyComponent.prototype.getText = function () {
        return format(this.first, this.middle, this.last);
    };
    MyComponent.prototype.render = function () {
        return h("div", null, "Hello, World! I'm ", this.getText());
    };
    Object.defineProperty(MyComponent, "style", {
        get: function () { return "div{color:red}"; },
        enumerable: true,
        configurable: true
    });
    return MyComponent;
}());
export { Ds as button_ds, MyComponent as my_component };
