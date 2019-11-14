import React, {Component} from 'react'
// import $ from 'jquery'
import MaterializeCSS from 'materialize-css/dist/js/materialize'
import {TeamScoreDetails} from '../../data'
import AllTeamSummarySlide from '../AllTeamSummarySlide'
import TeamScoreDetailsSlide from '../TeamScoreDetailsSlide'

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
    const {componentData} = this.props
    // First 5 indexes
    const TeamScoreDetailsList1 = TeamScoreDetails
        .filter((data, idx) => idx <= 4)
    //  Last 5 indexes
    const TeamScoreDetailsList2 = TeamScoreDetails
        .filter((data, idx) => idx > 4)
    return (
      <div
        className="carousel carousel-slider card center"
        ref={this.carouselRef}
      >
        <div className="carousel-item blue lighten-3" href="#one!">
          <AllTeamSummarySlide componentData={componentData} />
        </div>
        <div className="carousel-item blue lighten-3" href="#two!">
          <TeamScoreDetailsSlide componentData={TeamScoreDetailsList1} />
        </div>
        <div className="carousel-item blue lighten-3" href="#three!">
          <TeamScoreDetailsSlide componentData={TeamScoreDetailsList2}/>
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
