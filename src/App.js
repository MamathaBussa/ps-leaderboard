import React, {Component} from 'react'
import $ from 'jquery'
import './App.sass'
import ImageShield from './components/ImageShield'

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
          <div className="row">
            <h4>Leader Board</h4>
            <table>
              <tbody>
                <tr>
                  <td>
                    <ImageShield />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App
