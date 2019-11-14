import React, {Component} from 'react'
import TeamDetailedScoreRow from '../TeamDetailedScoreRow'
// import ImageShield from '../ImageShield'
// import TeamNameInTable from '../TeamNameInTable'
import './styles.sass'

class TeamScoreDetailsSlide extends Component {
  render() {
    const componentDataList = [{
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
    }, {
      teamName: 'Giants',
      smileyType: 2,
      totalScore: 118,
      scores: [
        11,
        12,
        19,
        null,
        null,
        null,
        null,
      ],
    }]
    return (
      <div className="TeamScoreDetailsSlide card blue lighten-2">
        <table>
          <tbody>
            {
              componentDataList.map((componentData) =>(
                <TeamDetailedScoreRow componentData={componentData} />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default TeamScoreDetailsSlide
