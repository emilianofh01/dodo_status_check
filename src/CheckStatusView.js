import { LitElement, css, html } from "lit";
import fixPhoneImg from "./assets/fixPhone.jpg";
import { dodorep_logo, dodorep_logo_dark } from "./assets/dodorep_logo";
import { base } from "./assets/styles/base";

import "./components/Input";
import "./components/Loader"

import "./views/SetupCheck";
import "./views/InfoStatusView";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CheckStatusView extends LitElement {
  static get properties() {
    return {
      isLoading: {
        type: Boolean,
      },
      data: {
        type: Object,
      },
      isDataloaded: {
        type: Object
      }
    };
  }

  constructor() {
    super();
    this.isLoading = true;
    this.data = {};
    this.isDataloaded = false;

    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  getOrderData = (event) => {
    // console.log(event.detail.data);
    this.data = event.detail.data;
    this.isDataloaded = true;
  }

  connectedCallback(){
    super.connectedCallback();
    (async (resolve, reject) => {
      let response = await fetch(`https://dodorep.dododev.net/api/order/03JN24UNX4`);
      let data = await response.json();
      
      this.data = data.data;
      this.isDataloaded = true;
    })();
  }

  render() {
    return html`
      <div class="container ${this.isLoading ? "loading" : ""} ${this.isDataloaded ? 'data-loaded' : ''} ">
        <div class="container__loading-view">
          ${dodorep_logo_dark}
          <dodo-loader></dodo-loader>
        </div>

        <div class="wrapper">
          <div class="wrapper__body">
            <div class="wrapper__body-header">
              <!-- Logo -->
              ${dodorep_logo}
            </div>

            <div class="wrapper__body-content">
              <!-- Contenido -->
              <dodo-setup-view @senddata=${this.getOrderData}></dodo-setup-view>
              <dodo-info-status-view .data=${this.data}></dodo-info-status-view>
            </div>
          </div>

          <div class="wrapper__aditional hidden">
            <img src="${fixPhoneImg}" />
          </div>
        </div>
      </div>
    `;
  }

  static get styles() {
    return [
      base,
      css`
        dodo-loader {
          height: 60px;
        }
        .container {
          display: flex;
          width: 100%;
          min-height: 100vh;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: var(--primary-color);
          position: relative;
        }

        .loading .container__loading-view {
          opacity: 1;
          z-index: 0;
        }

        .container__loading-view {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          gap: 50px;
          opacity: 0;

          transition: all ease 0.25s;
        }

        .container__loading-view svg {
          width: 250px;
        }

        .container__loading-view img {
          width: 80px;
        }

        .loading .wrapper {
          visibility: hidden;
          opacity: 0;
          transition: opacity ease 0.25s, visibility 0.25s 0.25s ease;
        }

        .wrapper {
          width: 95%;
          max-width: 1300px;
          min-height: 90vh;
          height: 0;
          overflow: hidden;
          padding: 30px;
          background-color: var(--primary-bg-color);
          border-radius: 20px;          
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          z-index: 1;

          visibility: visible;
          opacity: 1;
          transition: visibility 0.25s ease, opacity 0.25s 0.25s ease;

        }

        .wrapper__body {
          flex: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding: 20px;
          overflow: auto;
        }

        .wrapper__body-header svg {
          width: 140px;
        }

        .wrapper__body-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .wrapper__aditional {
          width: 100%;
          max-width: 40%;
          height: 100%;
          border-radius: 10px;
          overflow: hidden;

          transition: all ease 1s;
        }

        dodo-setup-view {
          opacity: 1;
          max-height: 9999px;
          /* overflow: hidden; */
          visibility: visible;
          transition: all ease 0.25s;
        }
        
        .data-loaded dodo-setup-view {
          opacity: 0;
          max-height: 0px;
          visibility: hidden;
        }
        .data-loaded .wrapper__aditional {
          width: 0%
        }

        .data-loaded dodo-info-status-view {
          height: 100%;
          opacity: 1;
          visibility: visible;
          overflow: unset
        }

        dodo-info-status-view {
          height: 0;
          overflow: hidden;
        }
      `,
      css`
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `,
    ];
  }
}

window.customElements.define("dodo-check-status-view", CheckStatusView);
