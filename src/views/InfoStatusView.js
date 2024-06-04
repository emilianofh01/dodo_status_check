import { LitElement, css, html } from "lit";
import { base } from "../assets/styles/base";

import fixIcon from "../assets/fixIcon.png";

class InfoStatusView extends LitElement {
  static get properties() {
    return {
      orderNumber: { type: String },
      issueDescription: { type: String },
      estimatedDeliveryDate: { type: String },
      steps: { type: Array },
      additionalInfo: { type: Array },
      collectors: { type: Array },
    };
  }

  constructor() {
    super();
    this.orderNumber = "21MY241A5W";
    this.issueDescription =
      "La pantalla del celular se queda en el logo de inicio y no termina de arrancar. El cliente reporta que el problema comenzó después de una actualización del sistema.";
    this.estimatedDeliveryDate = "30 de mayo del 2024";
    this.steps = [
      { date: "12/05/24", description: "Recepción del equipo" },
      {
        date: "13/05/24",
        description: "Evaluación inicial del problema reportado",
      },
      {
        date: "14/05/24",
        description: "Desmontaje del dispositivo para una inspección",
      },
      {
        date: "16/05/24",
        description: "Reparación o reemplazo de componentes",
      },
      { date: "", description: "Pruebas para asegurar que el equipo funcione" },
      { date: "", description: "Notificación al cliente" },
    ];
    this.additionalInfo = [
      {
        title: "Falla del equipo",
        description: "El equipo se prende y se apaga, solo llega al logo",
      },
      {
        title: "Prediagnostico",
        description:
          "Partición en el memoria de arranque posiblemente se corrompió",
      },
    ];
    this.collectors = [
      {
        name: "Emiliano Fernández",
        email: "emi******@hotmail.com",
        phone: "612****12",
      },
      {
        name: "Emiliano Fernández",
        email: "emi******@hotmail.com",
        phone: "612****12",
      },
    ];
  }

  render() {
    return html`
      <header>
        <h1>
          Orden de servicio
          <span class="order-number">#${this.orderNumber}</span>
        </h1>
        <p class="issueDescription">${this.issueDescription}</p>
        <p class="estimated-delivery">
          Fecha estimada de entrega: ${this.estimatedDeliveryDate}
        </p>
      </header>
      <section class="timeline">
        ${this.steps.map(
          (step, index) => html`
            <div class="timeline-step">
              <div>${step.date} &nbsp;</div>
              <div class="timeline-line"></div>
              <div>${step.description}</div>
            </div>
          `
        )}
      </section>

      <div>
        <h2 class="title-section">Información adicional</h2>
        <div class="additional-info__container">
          <section class="additional-info">
            ${this.additionalInfo.map(
              (info) => html`
                <div class="info-card">
                  <img style="width: 30px; height: 30px;" src="${fixIcon}" />
                  <div>
                    <h3>${info.title}</h3>
                    <p>${info.description}</p>
                  </div>
                </div>
              `
            )}
          </section>
          <section class="collectors">
            <h2>¿Quiénes puede recoger?</h2>
            ${this.collectors.map(
              (collector) => html`
                <div class="collector-card">
                  <img style="width: 30px; height: 30px" src="${fixIcon}" />
                  <div>
                    <h3>${collector.name}</h3>
                    <p>${collector.email}</p>
                    <p>${collector.phone}</p>
                  </div>
                </div>
              `
            )}
          </section>
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
          gap: 40px;
        }
        .service-order {
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: center;
        }
        header {
          text-align: center;
          border-bottom: 1px solid #eee;
          padding-bottom: 20px;
          font-size: 1.2em;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }
        .issueDescription {
          max-width: 800px;
          font-size: 1.4em;
          font-weight: 600;
          color: var(--text-secondary-color);
        }

        .estimated-delivery {
          font-size: 1.4em;
          color: #050505;
        }

        .order-number {
          color: var(--primary-color);
        }
        .estimated-delivery {
          font-weight: 600;
        }
        .timeline {
          display: flex;
          /* justify-content: space-between; */
          padding: 20px 0;
          border-bottom: 1px solid #eee;
          align-items: center;
          font-size: 1.4em;
        }

        .timeline-line {
          height: 2px;
          background: #bebebe;
          width: 100%;
          align-items: center;
          max-width: unset !important;
        }

        .timeline-step {
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: end;
          gap: 20px;

          position: relative
        }

        .timeline-step::after {
            position: absolute;
        }

        .timeline-step div {
          color: #4b4b4b;
        }
        .timeline-step div:first-child {
          font-weight: bold;
        }

        .timeline-step div:nth-child(2) {
          /* font-weight: bold; */
          max-width: 200px;
        }

        .additional-info,
        .collectors {
          padding: 20px 0;
        }
        .info-card,
        .collector-card {
          /* background-color: #f9f9f9; */
          padding: 10px;
          /* border-radius: 5px; */
          margin-bottom: 10px;
        }

        .additional-info__container {
          display: flex;
          font-size: 1.2em;
          justify-content: space-between;
        }

        .additional-info__container > * {
          background-color: #f5f5f5;
          width: 48%;
          box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.16);
          border: 1px solid #ddd;
          border-radius: 15px;
          padding: 20px;
          border: 20px;
          height: min-content;
        }

        .title-section {
          font-size: 2.1em;
          color: #4b4b4b;
          margin-bottom: 20px;
        }

        .info-card,
        .collector-card {
          display: flex;
          gap: 10px;
        }

        .info-card h3,
        .collector-card h3 {
          font-size: 1.4em;
        }

        .info-card p,
        .collector-card p {
          font-size: 1.2em;
          font-weight: 600;
          color: #959595;
        }
      `,
    ];
  }
}

customElements.define("dodo-info-status-view", InfoStatusView);
