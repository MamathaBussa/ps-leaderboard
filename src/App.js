import React, {Component} from 'react'
import $ from 'jquery'
import './App.sass'
import Carousel from './components/Carousel'
import TeamRow from './components/TeamRow'

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
          <Carousel />
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
