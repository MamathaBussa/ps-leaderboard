import React, {Component} from 'react'
import SmileyShieldTeamNameAndScoreCard from
  '../SmileyShieldTeamNameAndScoreCard'
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
                <SmileyShieldTeamNameAndScoreCard teamName="Falcons"
                  componentData={{
                    teamName: 'Falcons',
                    score: 124,
                  }} />
              </td>
              <td>
                <SmileyShieldTeamNameAndScoreCard teamName="Hawkings"
                  componentData={{
                    teamName: 'Hawkings',
                    score: 124,
                  }}/>
              </td>
            </tr>
            <tr>
              <td>
                <SmileyShieldTeamNameAndScoreCard teamName="Falcons"
                  componentData={{
                    teamName: 'Chargers',
                    score: 124,
                  }} />
              </td>
              <td>
                <SmileyShieldTeamNameAndScoreCard teamName="Hawkings"
                  componentData={{teamName: 'Raiders'}}/>
              </td>
            </tr>
            <tr>
              <td>
                <SmileyShieldTeamNameAndScoreCard teamName="Falcons"
                  componentData={{teamName: 'Giants'}} />
              </td>
              <td>
                <SmileyShieldTeamNameAndScoreCard teamName="Hawkings"
                  componentData={{teamName: 'Celtics'}}/>
              </td>
            </tr>
            <tr>
              <td>
                <SmileyShieldTeamNameAndScoreCard teamName="Falcons"
                  componentData={{teamName: 'Broncos'}} />
              </td>
              <td>
                <SmileyShieldTeamNameAndScoreCard teamName="Hawkings"
                  componentData={{teamName: 'Eagles'}}/>
              </td>
            </tr>
            <tr>
              <td>
                <SmileyShieldTeamNameAndScoreCard teamName="Falcons"
                  componentData={{teamName: 'Mavericks'}} />
              </td>
              <td>
                <SmileyShieldTeamNameAndScoreCard teamName="Hawkings"
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
