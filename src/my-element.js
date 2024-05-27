import { LitElement, css, html } from 'lit'
import './volkswagen-golf'
import './volkswagen-jetta'
import './volkswagen-passat'
import './volkswagen-tiguan'
import './volkswagen-touareg'

export class MyElement extends LitElement {
  static get properties() {
    return {


      position: { type: Number },
    }
  }

  constructor() {
    super()


    this.position = 0
  }

  setPrevious(e) {
    if (this.position === 0) {
      this.position = 4
    }
    else {
      this.position--
    }
  }

  setNext(e) {
    if (this.position == 4) {
      this.position = 0
    }
    else {
      this.position++
    }
  }

  render() {
    return html`
      <div>
      <button @click="${this.setPrevious}">Anterior</button>
      <button @click="${this.setNext}">Siguiente</button>
      <h1>${this.position}</h1>
      ${this.position === 0 ? html`<volkswagen-golf></volkswagen-golf>` : ''}
      ${this.position === 1 ? html`<volkswagen-jetta></volkswagen-jetta>` : ''}
      ${this.position === 2 ? html`<volkswagen-passat></volkswagen-passat>` : ''}
      ${this.position === 3 ? html`<volkswagen-tiguan></volkswagen-tiguan>` : ''}
      ${this.position === 4 ? html`<volkswagen-touareg></volkswagen-touareg>` : ''}
     

      </div>

    `
  }

  _onClick() {
    this.count++
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      ::slotted(h1) {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `
  }
}

window.customElements.define('my-element', MyElement)
