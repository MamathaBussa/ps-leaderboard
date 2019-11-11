import React, {Component} from 'react';
import $ from 'jquery'
import './App.sass'

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
        <h1>
          PS Leaderboard...
        </h1>
      </div>
    );
  }
}

export default App;
