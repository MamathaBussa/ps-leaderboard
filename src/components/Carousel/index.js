import React, {Component} from 'react'
import $ from 'jquery'
import MaterializeCSS from 'materialize-css/dist/js/materialize'

class Carousel extends Component {
  componentDidMount() {
    MaterializeCSS.Carousel.init($('.carousel'))
  }

  render() {
    return (
      <div className="carousel">
        <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1" alt="nature" /></a>
        <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2" alt="nature" /></a>
        <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3" alt="nature" /></a>
        <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4" alt="nature"/></a>
        <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5" alt="nature" /></a>
      </div>
    )
  }
}

export default Carousel
