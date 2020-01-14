import { Component, h, Prop, State, Listen } from "@stencil/core";

@Component({
  tag: "button-ds",
  styleUrl: "ds.scss",
  shadow: true
})
export class Ds {
  @Prop() value: string = "Boton";
  @State() active: boolean = false;

  @Listen("click")
  handleClick() {
    this.active = !this.active;
  }

  render() {
    return <button class={this.active ? "active" : ""}>{this.value}</button>;
  }
}
