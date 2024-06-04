import { LitElement, css, html } from "lit";
import { base } from "../assets/styles/base";

class Loader extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="loader">
        <svg class="circular-loader" viewBox="25 25 50 50">
          <circle
            class="loader-path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="white"
            stroke-width="4"
          />
        </svg>
      </div>
    `;
  }

  static get styles() {
    return [
      base,
      css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
        .loader {
          position: relative;
          height: 100%;
          overflow: hidden;
        }

        .circular-loader {
          -webkit-animation: rotate 2s linear infinite;
          animation: rotate 2s linear infinite;
          height: 100%;
          -webkit-transform-origin: center center;
          -ms-transform-origin: center center;
          transform-origin: center center;
          width: 100%;
        }

        .loader-path {
          stroke-dasharray: 150, 200;
          stroke-dashoffset: -10;
          -webkit-animation: dash 1.5s ease-in-out infinite,
            color 6s ease-in-out infinite;
          animation: dash 1.5s ease-in-out infinite,
            color 6s ease-in-out infinite;
          stroke-linecap: round;
        }

        @-webkit-keyframes rotate {
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }

        @keyframes rotate {
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        @-webkit-keyframes dash {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
          }
          100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
          }
        }
        @keyframes dash {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
          }
          100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
          }
        }
      `,
    ];
  }
}

customElements.define("dodo-loader", Loader);
