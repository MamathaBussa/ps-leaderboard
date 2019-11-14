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
        <div className="container">
          <CurrentComponent componentData={TeamScoreDetails} />
        </div>
      </div>
    )
  }
}

export default App
