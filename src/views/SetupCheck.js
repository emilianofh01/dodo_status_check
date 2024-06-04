import { LitElement, css, html } from "lit";
import { base } from "../assets/styles/base";
import "../components/Input";
import "../components/KeyInputGroup";
import "../components/Button";

import swal from "sweetalert";

class SetupCheck extends LitElement {
  static get properties() {
    return {
      codeValue: {
        type: String,
      },
      submitIsDisabled: {
        type: Boolean,
      },
      isLoading: {
        type: Boolean,
      },
      handleSendData: {
        type: Function,
      },
    };
  }

  onGetCodeValue = (value) => {
    this.codeValue = value;
    this.submitIsDisabled = this.codeValue.length < 10;
  };

  checkOrder = async () => {
    try {
      this.isLoading = true;
      this.submitIsDisabled = true;
      let data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ status: "success", message: "Datos recibidos" });
        //   reject("Mal chavo");
          this.isLoading = false;
          this.submitIsDisabled = false;
        }, 2000);
      });

      this.handleSendData(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      swal({
        title: "¡Oh no! Hubo un problema al procesar tu consulta.",
        text: "Verifica la orden de servición e intentelo de nuevo.",
        icon: "error",
        button: "Entendido",
        dangerMode: true,
        closeOnClickOutside: false,
        closeOnEsc: false,
      });
    }
  };

  constructor() {
    super();
    this.codeValue = "";
    this.submitIsDisabled = true;
    this.handleSendData = () => {};
  }

  render() {
    return html`
      <div class="check-status-form">
        <h1>¿Listo para saber el estado de tu reparación?</h1>

        <p>
          Ingresa tu número de orden o seguimiento para obtener las últimas
          actualizaciones
        </p>

        <div class="check-status-form__code-inputs">
          <dodo-input-key-group
            .onGetValue="${this.onGetCodeValue}"
          ></dodo-input-key-group>
          <dodo-button
            @click="${this.checkOrder}"
            ?disabled=${this.submitIsDisabled}
          >
            Consultar estado del equipo
            <div
              class="dodo-button-loading ${this.isLoading ? "isVisible" : ""}"
            >
              <dodo-loader></dodo-loader>
            </div>
          </dodo-button>
        </div>
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
          flex: 1;
        }
        .check-status-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex: 1;
        }

        .check-status-form h1 {
          font-size: 2.5em;
          max-width: 380px;
        }

        .check-status-form p {
          font-size: 2em;
          color: var(--text-secondary-color);
          max-width: 540px;
        }

        .check-status-form__code-inputs {
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
          align-items: flex-end;
        }

        .dodo-button-loading {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--primary-color);
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;

          opacity: 0;
          transition: opacity ease 0.25s;
        }

        .dodo-button-loading.isVisible {
          opacity: 1;
        }

        dodo-loader {
          height: 30px;
        }

        dodo-input-key-group {
          align-self: flex-start;
        }

        dodo-button {
          position: relative;
        }
      `,
    ];
  }
}

customElements.define("dodo-setup-view", SetupCheck);
