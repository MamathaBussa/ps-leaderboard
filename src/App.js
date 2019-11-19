import React, {Component} from 'react'
import $ from 'jquery'
import './App.sass'
import CurrentComponent from './components/Carousel'
import {TeamScoreDetails} from './data'

class App extends Component {
  componentDidMount() {
    setTimeout(()=> {
      $('.loading-indicator-outer-wrapper')
          .fadeOut()
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
          <div className="card">
            <h4 className="blue-text text-lighten-3">
              Please switch to a wider-screen with at least&nbsp;
              <code className="blue darken-2 card">
                1070px
              </code>
              &nbsp;width @ &nbsp;
              <code className="blue darken-2 card">
                100%
              </code>
              &nbsp; :)
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

export default App
