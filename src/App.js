import React, {Component} from 'react'
import $ from 'jquery'
import './App.sass'
import AppTitle from './components/AppTitle'
import CurrentComponent from './components/AllTeamSummarySlide'
import {LeaderBoardData} from './data'

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
        <div className="above-1070px-content">
          <AppTitle componentData={{
            logoImg: '/img/logos/battle-ground-logo-transparent.png',
          }}/>
          <div className="container">
            <CurrentComponent componentData={LeaderBoardData} />
          </div>
        </div>
        <div className="container below-1070px-content">
          <img src="/img/gold-coin.png"
            width="100"
            alt="mario with gold coins" />
          <div className="card">
            <h4 className="blue-text text-lighten-3">
              Please switch to a wider-screen with at least&nbsp;
              <code>
                1070px
              </code>
              &nbsp;width @ &nbsp;
              <code>
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
