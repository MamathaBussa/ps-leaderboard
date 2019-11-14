import React, {Component} from 'react'
import SmileyShieldAndTeamName from
  '../SmileyShieldAndTeamName'
// import ImageShield from '../ImageShield'
// import TeamNameInTable from '../TeamNameInTable'
import './styles.sass'

class TeamScoreDetailsSlide extends Component {
  render() {
    const componentData = {
      teamName: 'Falcons',
      smileyType: 1,
      totalScore: 129,
      scores: [
        12,
        15,
        11,
        null,
        null,
        null,
        null,
      ],
    }

    const {scores, totalScore} = componentData
    return (
      <div className="TeamScoreDetailsSlide card blue lighten-2">
        <table>
          <tbody>
            <tr>
              <td>
                <SmileyShieldAndTeamName teamName="Falcons"
                  componentData={componentData} />
              </td>
              {
                scores.map((score) => (
                  score ?
                  (
                    <td>
                      <div className="ScoreCell green white-text card">
                        <h3>{score}</h3>
                      </div>
                    </td>
                  ):(
                    <td>
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
          </tbody>
        </table>
      </div>
    )
  }
}

export default TeamScoreDetailsSlide
