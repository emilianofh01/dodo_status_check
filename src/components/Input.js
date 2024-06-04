import { LitElement, css, html } from "lit";
import { base } from "../assets/styles/base";
import { ifDefined } from "lit/directives/if-defined.js";

class Input extends LitElement {
  static get properties() {
    return {
      value: {
        type: String,
      },
      hiddenValue: {
        type: String,
      },
      showValue: {
        type: Boolean
      },
      maxLength: {
        type: Number
      },
      onInput: {
        type: Object
      },
      key: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.value = "";
    this.hiddenValue = "";
    this.showValue = true;
    this.onInput = () => {}
  }

  onChangeHiddenValue = () => {
    if (this.value && this.value != undefined) {
      this.hiddenValue = this.value.replaceAll(/./g, "*");
      return;
    }
    this.hiddenValue = "";
  };

  onChangeValue = (value) => {
    this.value = value.target.value.toUpperCase();
    this.hiddenValue = this.value.replaceAll(/./g, "*");
    this.onInput(this.value, this.key);
  }

  render() {
    return html`<input placeholder="" title="inputKey" maxLength="${ifDefined(this.maxLength)}" .value="${this.showValue ? this.value : this.hiddenValue}" @input="${this.onChangeValue}" /> `;
  }

  static get styles() {
    return [base, css`
      input {
        --border-input-disabled: color-mix(in srgb, var(--primary-color), white 60%);

        width: 100%;
        height: 100%;
        font-size: 1em;
        outline: 0em solid var(--border-input-disabled);
        border: .08em solid  var(--border-input-disabled);
        padding: .25em;
        border-radius: 10px;
        background-color: var(--primary-light-color);

        transition: background ease 0.25s, outline ease 0.15s, border ease 0.25s;
        text-align: center;
      }

      input:hover, input:focus, input:not(:placeholder-shown) {
        border: .08em solid var(--primary-color);
        background-color: white;
      }

      input:focus {
        outline: .08em solid var(--border-input-disabled);
      }
    `];
  }
}

customElements.define("dodo-input", Input);
