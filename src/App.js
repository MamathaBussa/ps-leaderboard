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
      <div class="container App">
        <h1>
          PS Leaderboard...
        </h1>
        <h1>
          PS Leaderboard...
        </h1>
        <h1>
          PS Leaderboard...
        </h1>
        <h1>
          PS Leaderboard...
        </h1>
        <h1>
          PS Leaderboard...
        </h1>
        <h1>
          PS Leaderboard...
        </h1>
        <h1>
          PS Leaderboard...
        </h1>
        <h1>
          PS Leaderboard...
        </h1>
        <h1>
          PS Leaderboard...
        </h1>
        <h1>
          PS Leaderboard...
        </h1>
        <h1>
          PS Leaderboard...
        </h1>
        <h1>
          PS Leaderboard...
        </h1>
        <h1>
          PS Leaderboard...
        </h1>
        
      </div>
    );
  }
}

export default App;
