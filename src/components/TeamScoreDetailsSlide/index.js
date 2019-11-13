import React, {Component} from 'react'
import SmileyShieldAndTeamName from
  '../SmileyShieldAndTeamName'
// import ImageShield from '../ImageShield'
// import TeamNameInTable from '../TeamNameInTable'
import './styles.sass'

class TeamScoreDetailsSlide extends Component {
  render() {
    return (
      <div className="TeamScoreDetailsSlide card blue lighten-2">
        <table>
          <thead>
            <tr>
              <td>
                <SmileyShieldAndTeamName teamName="Falcons"
                  componentData={{
                    teamName: 'Falcons',
                    score: 124,
                  }} />
              </td>
              <td>
                <div className="ScoreCell blue-text text-darken-3 card">
                  <h3>20</h3>
                </div>
              </td>
              <td>
                <div className="TotalScoreCell card">
                  <h3 className="blue-text text-darken-3">20</h3>
                </div>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}

export default TeamScoreDetailsSlide
