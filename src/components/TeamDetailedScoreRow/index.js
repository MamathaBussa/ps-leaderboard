import React, {Component} from 'react'
import SmileyShieldAndTeamName from '../SmileyShieldAndTeamName'
import './styles.sass'

class TeamDetailsScoreRow extends Component {
  render() {
    const {componentData} = this.props
    const {scores, totalScore} = componentData
    return (
      <tr>
        <td>
          <SmileyShieldAndTeamName teamName="Falcons"
            componentData={componentData} />
        </td>
        {
          scores.map((eachScore, i) => (
            eachScore && eachScore.score ?
            (
              <td key={`${i}-each-score`}>
                <div className="ScoreCell green white-text card">
                  <h3>{eachScore.score}</h3>
                </div>
              </td>
            ):(
              <td key={i}>
                <div
                  className="ScoreCell green lighten-3 white-text card">
                  <h3>?</h3>
                </div>
              </td>
            )
          ))
        }
        <td>
          <div className="TotalScoreCell green-text text-darken-1 card">
            <h3>
              {totalScore}
            </h3>
          </div>
        </td>
      </tr>
    )
  }
}

export default TeamDetailsScoreRow
