import React, {Component} from 'react'
import $ from 'jquery'
import './App.sass'
import TeamRow from './components/TeamRow'

class App extends Component {
  componentDidMount() {
    setTimeout(()=> {
      $('.loading-indicator-outer-wrapper')
          .slideUp()
    }, 2000)
  }
  render() {
    // const hawkings = {
    //   teamName: 'Hawkings',
    //   score: {
    //     1: 20,
    //     2: 20,
    //     3: 40,
    //     4: 12,
    //     5: 11,
    //     6: 16,
    //     7: 10,
    //   },
    // }
    return (
      <div className="App">
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
