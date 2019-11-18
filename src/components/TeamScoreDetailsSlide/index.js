import React, {Component} from 'react'
import TeamDetailedScoreRow from '../TeamDetailedScoreRow'
import './styles.sass'

class TeamScoreDetailsSlide extends Component {
  render() {
    const {componentData} = this.props
    return (
      <div className="TeamScoreDetailsSlide card blue lighten-2">
        <table>
          <thead>
            <tr>
              <th className="brown-text text-darken-3 center">
                <h5 className="card">
                  Team Name
                </h5>
              </th>
              <th className="brown-text text-darken-3 center">
                <h5 className="card">
                  Game 1 The Quiz!
                </h5>
              </th>
              <th className="brown-text text-darken-3 center">
                <h5 className="card">Game 2</h5>
              </th>
              <th className="brown-text text-darken-3 center">
                <h5 className="card">Game 3</h5>
              </th>
              <th className="brown-text text-darken-3 center">
                <h5 className="card">Game 4</h5>
              </th>
              <th className="brown-text text-darken-3 center">
                <h5 className="card">Game 5</h5>
              </th>
              <th className="brown-text text-darken-3 center">
                <h5 className="card">Game 6</h5>
              </th>
              <th className="brown-text text-darken-3 center">
                <h5 className="card">Game 7</h5>
              </th>
              <th className="brown-text text-darken-3 center">
                <h5 className="card">Total</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              componentData.map((eachComponentData, i) =>(
                <TeamDetailedScoreRow
                  componentData={eachComponentData}
                  key={i}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default TeamScoreDetailsSlide
