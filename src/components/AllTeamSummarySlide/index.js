import React, {Component} from 'react'
import SmileyShieldTeamNameAndScoreCard from
  '../SmileyShieldTeamNameAndScoreCard'
import './styles.sass'

class AllTeamsSummarySlide extends Component {
  render() {
    return (
      <div className="AllTeamsSummarySlide card blue lighten-2">
        <table>
          <tbody>
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
          </tbody>
        </table>
      </div>
    )
  }
}

export default AllTeamsSummarySlide
