import { LitElement, css, html } from 'lit'

export class VolkswagenPassat extends LitElement {
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
    this.title = 'VolksWagen Passat'

    this.title1 = 'Número y configuración de cilindros:     '
    this.paragraph1 = '4 cilindros en línea o V6  '

    this.title2 = 'Desplazamiento del motor:     '
    this.paragraph2 = 'Varía según la generación, típicamente entre 1.8L y 3.6L    '

    this.title3 = 'Potencia del motor:     '
    this.paragraph3 = 'Entre 174 y 280 caballos de fuerza (129.9 - 208.8 kW    '

    this.title4 = 'Torque del motor:     '
    this.paragraph4 = 'Entre 184 y 258 libras-pie (249.7 - 349.8 Nm)   '

    this.title5 = 'Capacidad de ocupantes:  '
    this.paragraph5 = '5 personas.  '

    this.title6 = 'Tipo de tracción: '
    this.paragraph6 = 'Delantera o tracción total (AWD).  '

    this.title7 = 'Tipo de transmisión:   '
    this.paragraph7 = 'Manual, automática secuencial o doble embrague.    '

    this.title8 = 'Capacidad de carga: '
    this.paragraph8 = 'Alrededor de 15-16 pies cúbicos.    '

    this.title9 = 'Capacidad de remolque:  '
    this.paragraph9 = 'No diseñado para remolcar.  '

    this.title10 = 'Funcionalidades especiales:  '
    this.paragraph10 = 'Tecnología de infoentretenimiento, asistencias de conducción, sistemas de seguridad avanzados, etc.    '

    this.imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgkONtmwI-9IUpHC9t8wGHXUUriWO_fDk4DE6JW4DOUw&s  '
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
        background:  #722626
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

window.customElements.define('volkswagen-passat', VolkswagenPassat)
