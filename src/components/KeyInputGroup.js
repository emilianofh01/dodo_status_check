import { LitElement, css, html } from "lit";
import { base } from "../assets/styles/base";
import { map } from "lit/directives/map.js";

class KeyInputGroup extends LitElement {
  static get properties() {
    return {
      showValue: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      inputs: {
        type: Array,
      },
      onGetValue: {
        type: Function,
      }
    };
  }

  constructor() {
    super();
    this.quantity = 10;
    this.inputs = Array.from({ length: this.quantity }, (_, index) => "");
    this.onGetValue = () => {};
  }

  onInputKey = (value, index) => {
    const inputIndex = +index;
    const inputs = Array.from(this.shadowRoot.querySelectorAll("dodo-input"));
    const nextInput = inputs[inputIndex+1]?.shadowRoot.querySelector('input');
    const previousInput = inputs[inputIndex-1]?.shadowRoot.querySelector('input');

    this.inputs[inputIndex] = value.toUpperCase();
    this.onGetValue(this.inputs.join(''));
    if(value) {
        if(nextInput) nextInput.focus();
        return;
    } 
    if(previousInput) previousInput.focus();
    console.log(false)
  }

  render() {
    return html`
      <div class="key-input-group">
        ${map(
          this.inputs,
          (input, index) => html` <dodo-input maxLength="1" key="${index}" .onInput="${this.onInputKey}"></dodo-input> `
        )}
      </div>
    `;
  }

  static get styles() {
    return [
      base,
      css`
        .key-input-group {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 20px;
        }

        dodo-input {
          aspect-ratio: 1/1;
          font-size: 5em;
        }
      `,
    ];
  }
}

customElements.define("dodo-input-key-group", KeyInputGroup);
