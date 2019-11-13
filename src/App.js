import React, {Component} from 'react'
import $ from 'jquery'
import M from 'materialize-css'
import './App.sass'
import TeamRow from './components/TeamRow'

class App extends Component {
  componentDidMount() {
    setTimeout(()=> {
      $('.loading-indicator-outer-wrapper')
          .slideUp()
    }, 2000)
    M.Carousel.init($('.carousel'))
    // $('.carousel').carousel()
  }
  render() {
    // const hawkings = {
    //   teamName: 'Hawkings',
    //   score: {
    //     1: 20,
    //     2: 20,
    //     3: 40,
    //     4: 12,
    //     5: 11,
    //     6: 16,
    //     7: 10,
    //   },
    // }
    return (
      <div className="App">
        <div className="container">
          <div className="carousel">
            <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1" alt="nature" /></a>
            <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2" alt="nature" /></a>
            <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3" alt="nature" /></a>
            <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4" alt="nature"/></a>
            <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5" alt="nature" /></a>
          </div>
        </div>
        <div className="container">
          <br />
          <TeamRow />
          <TeamRow />
          <TeamRow />
          <TeamRow />
          <TeamRow />
        </div>
      </div>
    )
  }
}

export default App
