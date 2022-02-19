import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fw-button',
  styleUrl: 'fw-button.css',
  shadow: true,
})
export class FwButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
