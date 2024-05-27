import { LitElement, css, html } from 'lit'

export class VolkswagenTiguan extends LitElement {
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
    this.title = 'VolksWagen Tiguan'

    this.title1 = 'Número y configuración de cilindros:     '
    this.paragraph1 = '4 cilindros en línea   '

    this.title2 = 'Desplazamiento del motor:     '
    this.paragraph2 = 'Varía según la generación, típicamente entre 1.4L y 2.0L    '

    this.title3 = 'Potencia del motor:     '
    this.paragraph3 = 'Entre 143 y 316 caballos de fuerza (106.6 - 235.6 kW)    '

    this.title4 = 'Torque del motor:     '
    this.paragraph4 = 'Entre 184 y 400 libras-pie (249.7 - 542 Nm)   '

    this.title5 = 'Capacidad de ocupantes:  '
    this.paragraph5 = '5-7, dependiendo de la configuración de asientos.  '

    this.title6 = 'Tipo de tracción: '
    this.paragraph6 = 'Delantera o tracción total (AWD).  '

    this.title7 = 'Tipo de transmisión:   '
    this.paragraph7 = 'Manual, automática secuencial o doble embrague.    '

    this.title8 = 'Capacidad de carga: '
    this.paragraph8 = 'Alrededor de 23-65 pies cúbicos (con los asientos traseros abatidos).    '

    this.title9 = 'Capacidad de remolque:  '
    this.paragraph9 = 'Hasta 1,500 - 2,200 libras (680.4 - 997.9 kg).  '

    this.title10 = 'Funcionalidades especiales:  '
    this.paragraph10 = 'Tecnología de asistencia al conductor, sistema de infoentretenimiento, configuraciones de asientos flexibles, etc.    '

    this.imageURL = 'https://assets.volkswagen.com/is/image/volkswagenag/vw-tiguan-trendline-plus-22-11?Zml0PWNyb3AsMSZmbXQ9cG5nLWFscGhhJndpZD0xNjAwJmhlaT05MDAmYmZjPW9mZiY5YWYy  '
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
        background:  #2a601f
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

window.customElements.define('volkswagen-tiguan', VolkswagenTiguan)
