import React, {Component} from 'react'
import $ from 'jquery'
import './App.sass'
import TeamScoreDetailsSlide from './components/TeamScoreDetailsSlide'

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
          <TeamScoreDetailsSlide />
        </div>
      </div>
    )
  }
}

export default App
