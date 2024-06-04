import { LitElement, css, html } from "lit";
import { base } from "../assets/styles/base";

import fixIcon from "../assets/fixIcon.png";
import { map } from "lit/directives/map.js";

const _RESULTS = {
    "REQUIRES_ACTION": "Requiere acción del cliente",
    "FLAWED": "Hubo un problema al realizar el servicio",
    "SUCCESS": "Servicio exitoso"
}

const formatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "short",
  timeStyle: "short",
});

function getDateFormatted(date) {
  date = new Date(date);
  return formatter.format(date);
}

class InfoStatusView extends LitElement {
  static get properties() {
    return {
      data: { type: Object },
      estimatedDeliveryDate: { type: String },
    };
  }

  isLastStep(steps) {
    console.log(steps);
    return steps.map((step, index, array) => {
      return step;
      step.isLastStep = !steps.tasks[index + 1]?.completed_at;
      return step;
    });
  }

  constructor() {
    super();
    this.estimatedDeliveryDate = "30 de mayo del 2024";
  }

  render() {
    if (!this.data || !this.data.client) return "";
    let { order_no, issue, observations, prediagnosis, articles, client } =
      this.data;

    return html`
      <header>
        <h1>
          Orden de servicio
          <span class="order-number">#${order_no}</span>
        </h1>
        <p class="issueDescription">${observations}</p>
        <p class="estimated-delivery">
          Fecha estimada de entrega: ${this.estimatedDeliveryDate}
        </p>
      </header>
      ${map(
        articles,
        (article, i) => article.tasks.length ? html`
          <section>
            <h2 class="article_name">${article.article.name} ${_RESULTS[article.result] ? html`<span>${_RESULTS[article.result]}</span>` : ''} </h2>
            <div class="timeline">
              ${map(
                this.isLastStep(article.tasks),
                (step, index) => html`
                  <div class="timeline-step">
                    <div>
                      ${step.completed_at
                        ? getDateFormatted(step.completed_at)
                        : ""}
                      &nbsp;
                    </div>
                    <div
                      class="timeline-line ${index ===
                        article.tasks.length - 1 ||
                      !article.tasks[index + 1].completed_at
                        ? "last-item"
                        : ""}"
                    ></div>
                    <div>${step.name}</div>
                  </div>
                `
              )}
              <div class="last_observations">
                <h4>Ultimas observaciones:</h4>
                <p>${article.observations.length ? article.observations : "Sin observaciones"}</p>
              </div>
            </div>
          </section>
        ` : ''
      )}

      <div>
        <h2 class="title-section">Información adicional</h2>
        <div class="additional-info__container">
          <section class="additional-info">
            <div class="info-card">
              <img style="width: 30px; height: 30px;" src="${fixIcon}" />
              <div>
                <h3>Falla del equipo</h3>
                <p>${issue}</p>
              </div>
            </div>
            <div class="info-card">
              <img style="width: 30px; height: 30px;" src="${fixIcon}" />
              <div>
                <h3>Prediagnostico</h3>
                <p>${prediagnosis}</p>
              </div>
            </div>
          </section>
          <section class="collectors">
            <h2>¿Quiénes puede recoger?</h2>
            <div class="collector-card">
              <img style="width: 30px; height: 30px" src="${fixIcon}" />
              <div>
                <h3>${client.first_name} ${client.last_name}</h3>
                <p>${client.email}</p>
                <p>${client.phone_number}</p>
              </div>
            </div>
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

        .article_name {
            display: flex;
            justify-content: space-between;
        }

        .article_name  span {
            padding: 5px 10px;
            background-color: var(--primary-color);
            color: white;
            border-radius: 500px;
            font-weight: 500;
        }

        .timeline {
          display: flex;
          /* justify-content: space-between; */
          padding: 20px 0;
          border-bottom: 1px solid #eee;
          /* align-items: center; */
          font-size: 1.4em;
          flex-wrap: wrap;
        }

        .timeline > .last_observations {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }

        .last_observations p {
          background-color: #f5f5f5;
          width: 100%;
          box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.16);
          border: 1px solid #ddd;
          border-radius: 10px;
          color: var(--text-secondary-color);
          font-weight: 600;
          margin-top: 15px;
          padding: 10px;
          height: min-content;

          min-height: 50px
        }

        .timeline-line {
          position: relative;
          height: 2px;
          background: #bebebe;
          width: 100%;
          align-items: center;
          max-width: unset !important;
        }

        .timeline-line.last-item::after {
          width: 50%;
        }

        .timeline-line::after {
          position: absolute;
          left: 0;
          top: 0;
          content: "";
          height: 100%;
          width: 100%;
          background-color: var(--primary-color);
        }

        .timeline-step {
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 20px;
          flex: 1;
          height: 100%;
          position: relative;
        }

        .timeline-step::after {
          content: "";
          position: absolute;
          width: 12px;
          height: 12px;
          background-color: var(--primary-color);
          border-radius: 50%;
          border: 4px solid white;
          top: 30px;
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
