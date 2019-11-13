import React, {Component} from 'react'
import $ from 'jquery'
import './App.sass'
// import Carousel from './components/Carousel'
import CurrentComponent from './components/SmileyShieldTeamNameAndScoreCard'

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
            score: 40,
          }}/>
        </div>
      </div>
    )
  }
}

export default App
