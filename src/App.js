import React, {Component} from 'react'
import $ from 'jquery'
import './App.sass'
import CurrentComponent from './components/Carousel'
import {TeamScoreDetails} from './data'

class App extends Component {
  componentDidMount() {
    setTimeout(()=> {
      $('.loading-indicator-outer-wrapper')
          .slideUp()
    }, 2000)
  }
  render() {
    return (
      <div className="App">
        <div className="container above-1070px-content">{
          <CurrentComponent componentData={TeamScoreDetails} />
        }</div>
        <div className="container below-1070px-content">
          <img src="/img/gold-coin.png"
            width="100"
            alt="mario with gold coins" />
          <h4>
            Please try us on a larger screen size :)
          </h4>
        </div>
      </div>
    )
  }
}

export default App
