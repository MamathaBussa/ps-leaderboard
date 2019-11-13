import React, {Component} from 'react'
import SmileyShieldAndTeamName from '../SmileyShieldAndTeamName'
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
                  componentData={{teamName: 'Falcons'}} />
              </td>
              <td>
                <SmileyShieldAndTeamName teamName="Hawkings"
                  componentData={{teamName: 'Hawkings'}}/>
              </td>
            </tr>
            <tr>
              <td>
                <SmileyShieldAndTeamName teamName="Falcons"
                  componentData={{teamName: 'Chargers'}} />
              </td>
              <td>
                <SmileyShieldAndTeamName teamName="Hawkings"
                  componentData={{teamName: 'Raiders'}}/>
              </td>
            </tr>
            <tr>
              <td>
                <SmileyShieldAndTeamName teamName="Falcons"
                  componentData={{teamName: 'Giants'}} />
              </td>
              <td>
                <SmileyShieldAndTeamName teamName="Hawkings"
                  componentData={{teamName: 'Celtics'}}/>
              </td>
            </tr>
            <tr>
              <td>
                <SmileyShieldAndTeamName teamName="Falcons"
                  componentData={{teamName: 'Broncos'}} />
              </td>
              <td>
                <SmileyShieldAndTeamName teamName="Hawkings"
                  componentData={{teamName: 'Eagles'}}/>
              </td>
            </tr>
            <tr>
              <td>
                <SmileyShieldAndTeamName teamName="Falcons"
                  componentData={{teamName: 'Mavericks'}} />
              </td>
              <td>
                <SmileyShieldAndTeamName teamName="Hawkings"
                  componentData={{teamName: 'SeaHawks'}}/>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}

export default TeamScoreDetailsSlide
