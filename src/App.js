import React, {Component} from 'react'
import {sum, values} from 'lodash'
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
    const hawkings = {
      teamName: 'Hawkings',
      score: {
        1: 20,
        2: 20,
        3: 40,
        4: 12,
        5: 11,
        6: 16,
        7: 10,
      },
    }
    return (
      <div className="App">
        <div className="container">
          <div className="card">
            <div className="card-content">
              <h4>Leader Board</h4>
              <table>
                <thead>
                  <tr>
                    <th>Team Name</th>
                    <th>Game 1</th>
                    <th>Game 2</th>
                    <th>Game 3</th>
                    <th>Game 4</th>
                    <th>Game 5</th>
                    <th>Game 6</th>
                    <th>Game 7</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{hawkings.teamName}</td>
                    {
                      Object.keys(hawkings.score)
                          .map((key)=> (
                            <td key={`hawking-score-${key}`}>
                              {hawkings.score[key]}
                            </td>
                          ))
                    }
                    <td>
                      { sum(values(hawkings.score))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
