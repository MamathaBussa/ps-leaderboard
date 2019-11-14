import React, {Component} from 'react'
import $ from 'jquery'
import './App.sass'
// import CurrentComponent from './components/Carousel'
// import {TeamScoreDetails} from './data'

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
          <div className="LeaderBoardTitle">
            <div className="card brown darken-1">
              <span className="yellow-text text-darken-1">Leader Board</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
