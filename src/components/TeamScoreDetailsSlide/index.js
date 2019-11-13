import React, {Component} from 'react'
import SmileyShieldAndTeamName from '../SmileyShieldAndTeamName'
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
                <SmileyShieldAndTeamName teamName="Falcons"
                  componentData={{teamName: 'Falcons'}} />
              </td>
              <td>
                <SmileyShieldAndTeamName teamName="Hawkings"
                  componentData={{teamName: 'Hawkings'}}/>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}

export default TeamScoreDetailsSlide
