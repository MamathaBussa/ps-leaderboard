import React, {Component} from 'react'
import $ from 'jquery'
import './App.sass'
import CurrentComponent from './components/SmileyShieldTeamNameAndScoreCard'
import {TeamScoreDetails} from './data'

class App extends Component {
  componentDidMount() {
    setTimeout(()=> {
      $('.loading-indicator-outer-wrapper')
          .slideUp()
    }, 2000)
  }
  render() {
    const componentData = TeamScoreDetails[0]
    return (
      <div className="App">
        <div className="container">
          <CurrentComponent componentData={componentData} />
        </div>
      </div>
    )
  }
}

export default App
