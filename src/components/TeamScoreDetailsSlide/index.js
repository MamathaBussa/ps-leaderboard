import React, {Component} from 'react'
// import ImageShield from '../ImageShield'
// import TeamNameInTable from '../TeamNameInTable'
import './styles.sass'

class TeamScoreDetailsSlide extends Component {
  render() {
    return (
      <div className="TeamScoreDetailsSlide">
        <table>
          <thead>
            <tr>
              <td>
                <div className="SmileyShieldAndTeamName">
                  <div className="ImageShield card">ImageShield</div>
                  <div className="TeamNameInTable card red-text text-darken-2">
                    Falcons
                  </div>
                </div>
              </td>
              <td>
                <div className="SmileyShieldAndTeamName">
                  <div className="ImageShield card">ImageShield</div>
                  <div className="TeamNameInTable card red-text text-darken-2">
                    The Hawkings
                  </div>
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
