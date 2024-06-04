import { LitElement, css, html } from "lit";
import { base } from "../assets/styles/base";

class Button extends LitElement {
    static get properties() {
        return {
            disabled: {
                type: Boolean,
            },
            onClick: {
                type: Function
            }
        }
    }

    constructor() {
        super();
        this.disabled = false;
        this.onClick = () => {}
    }

    render() {
        return html`
            <button @click=${this.onClick} ?disabled=${this.disabled}><slot>Hello world!</slot></button>
        `
    }

    static get styles() {
        return [base, css`
            button {
                background-color: var(--primary-color);
                border: unset;
                padding: .7em 1.2em;
                font-size: 1.8em;
                color: white;
                border-radius: 8px;
                transition: all ease 0.25s;
                cursor: pointer;
                font-family: 'Open Sans';
                overflow: hidden;
            }

            button:active {
                background-color: color-mix(in srgb, var(--primary-color), black 20%);
            }

            button:disabled {
                cursor: not-allowed;
                background-color: color-mix(in srgb, var(--primary-color), white 40%)
            }
        `];
    }
}

customElements.define('dodo-button', Button);