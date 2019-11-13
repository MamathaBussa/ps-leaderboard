import React, {Component} from 'react'
// import $ from 'jquery'
import MaterializeCSS from 'materialize-css/dist/js/materialize'
import AllTeamSummarySlide from '../AllTeamSummarySlide'
import './styles.sass'

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.carouselRef = React.createRef()
  }
  componentDidMount() {
    const carousel = this.carouselRef.current
    const carouselConfig = {
      fullWidth: true,
      indicators: true,
      duration: 500,
    }
    MaterializeCSS.Carousel.init(carousel, carouselConfig)
    autoPlayCarousel.call(this, carousel, 5000)
  }

  render() {
    return (
      <div
        className="carousel carousel-slider card center"
        ref={this.carouselRef}
      >
        <div className="carousel-item blue lighten-3" href="#one!">
          <AllTeamSummarySlide />
        </div>
        <div className="carousel-item blue lighten-3" href="#two!">
          <AllTeamSummarySlide />
        </div>
        <div className="carousel-item blue lighten-3" href="#three!">
          <AllTeamSummarySlide />
        </div>
      </div>
    )
  }
}

export default Carousel

// abstractions
function autoPlayCarousel(carousel, autoPlayDuration = 2000) {
  setInterval(function() {
    const carouselInstance = MaterializeCSS.Carousel.getInstance(carousel)
    carouselInstance.next()
  }, autoPlayDuration)
}
