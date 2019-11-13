import React, {Component} from 'react'
import $ from 'jquery'
import './App.sass'
// import Carousel from './components/Carousel'
import CurrentComponent from './components/SmileyShieldAndTeamName'

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
          <CurrentComponent componentData={{
            teamName: 'Awesomeness',
          }}/>
          <h4 className="ScoreCard card green darken-1 white-text">
            40
          </h4>
        </div>
      </div>
    )
  }
}

export default App
