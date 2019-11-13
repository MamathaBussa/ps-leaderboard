import React, {Component} from 'react'
import $ from 'jquery'
import MaterializeCSS from 'materialize-css/dist/js/materialize'
import AllTeamSummarySlide from '../AllTeamSummarySlide'
import './styles.sass'

class Carousel extends Component {
  componentDidMount() {
    MaterializeCSS.Carousel.init($('.carousel'), {
      fullWidth: true,
      indicators: true,
    })
  }

  render() {
    return (
      <div className="carousel carousel-slider card center">
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
