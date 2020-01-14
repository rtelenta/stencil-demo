import { h } from "@stencil/core";
export class Ds {
    constructor() {
        this.value = "Boton";
        this.active = false;
    }
    handleClick() {
        this.active = !this.active;
    }
    render() {
        return h("button", { class: this.active ? "active" : "" }, this.value);
    }
    static get is() { return "button-ds"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["ds.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ds.css"]
    }; }
    static get properties() { return {
        "value": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "\"Boton\""
        }
    }; }
    static get states() { return {
        "active": {}
    }; }
    static get listeners() { return [{
            "name": "click",
            "method": "handleClick",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
