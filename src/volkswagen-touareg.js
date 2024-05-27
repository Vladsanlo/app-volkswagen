import { LitElement, css, html } from 'lit'

export class VolkswagenTouareg extends LitElement {
  static get properties() {
    return {

      title: { type: String },

      title1: { type: String },
      paragraph1: { type: String },

      title2: { type: String },
      paragraph2: { type: String },

      title3: { type: String },
      paragraph3: { type: String },

      title4: { type: String },
      paragraph4: { type: String },


      title5: { type: String },
      paragraph5: { type: String },


      title6: { type: String },
      paragraph6: { type: String },


      title7: { type: String },
      paragraph7: { type: String },


      title8: { type: String },
      paragraph8: { type: String },

      title9: { type: String },
      paragraph9: { type: String },

      title10: { type: String },
      paragraph10: { type: String },

      imageURL: { type: String },


    }
  }

  constructor() {
    super()
    this.title = 'VolksWagen touareg'

    this.title1 = 'Número y configuración de cilindros:     '
    this.paragraph1 = '4, 6 u 8 cilindros en V   '

    this.title2 = 'Desplazamiento del motor:     '
    this.paragraph2 = 'Varía según la generación y el modelo, típicamente entre 3.0L y 4.0L.    '

    this.title3 = 'Potencia del motor:     '
    this.paragraph3 = 'Entre 204 y 415 caballos de fuerza (152.4 - 309.5 kW).    '

    this.title4 = 'Torque del motor:     '
    this.paragraph4 = 'Entre 332 y 664 libras-pie (450.3 - 900 Nm).   '

    this.title5 = 'Capacidad de ocupantes:  '
    this.paragraph5 = '5 asientos.  '

    this.title6 = 'Tipo de tracción: '
    this.paragraph6 = 'Delantera o tracción total (AWD).  '

    this.title7 = 'Tipo de transmisión:   '
    this.paragraph7 = 'Automática secuencial o doble embrague.    '

    this.title8 = 'Capacidad de carga: '
    this.paragraph8 = 'Alrededor de 32-71 pies cúbicos (con los asientos traseros abatidos).    '

    this.title9 = 'Capacidad de remolque:  '
    this.paragraph9 = 'Hasta 7,716 - 7,716 libras (3,500 - 3,500 kg).  '

    this.title10 = 'Funcionalidades especiales:  '
    this.paragraph10 = 'Lujo refinado, tecnología avanzada, capacidades todoterreno, etc.    '

    this.imageURL = 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2023/05/volkswagen-touareg-2023-3040886.jpg?tf=3840x  '
  }

  render() {
    return html`
     <div id="main">
      
     <h1>${this.title}</h1>

     <h1>${this.title1}</h1>
      <p>${this.paragraph1}</p>

      <h1>${this.title2}</h1>
      <p>${this.paragraph2}</p>

      <h1>${this.title3}</h1>
      <p>${this.paragraph3}</p>

      <h1>${this.title4}</h1>
      <p>${this.paragraph4}</p>

      <h1>${this.title5}</h1>
      <p>${this.paragraph5}</p>

      <h1>${this.title6}</h1>
      <p>${this.paragraph6}</p>

      <h1>${this.title7}</h1>
      <p>${this.paragraph7}</p>

      <h1>${this.title8}</h1>
      <p>${this.paragraph8}</p>

      <h1>${this.title9}</h1>
      <p>${this.paragraph9}</p>

      <h1>${this.title10}</h1>
      <p>${this.paragraph10}</p>

      <div class="transport-img-container">
        <img class="car-img" src="${this.imageURL}">
      </div>

     </div>

    `
  }

  

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      #main{
        color:#000000
      }

      #main{
        background:  #28583e
      }

      p{
        text-align:left
      }


      .car-img{
        width: 20vw;
    }
    
    .transport-img-container{
      text-align:center;
    }


    `
  }
}

window.customElements.define('volkswagen-touareg', VolkswagenTouareg)
