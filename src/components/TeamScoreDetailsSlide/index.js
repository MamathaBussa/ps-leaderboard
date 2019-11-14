import React, {Component} from 'react'
import TeamDetailedScoreRow from '../TeamDetailedScoreRow'
import {TeamScoreDetails} from '../../data'
import './styles.sass'

class TeamScoreDetailsSlide extends Component {
  render() {
    const componentDataList = TeamScoreDetails
    return (
      <div className="TeamScoreDetailsSlide card blue lighten-2">
        <table>
          <tbody>
            {
              componentDataList.map((componentData, i) =>(
                <TeamDetailedScoreRow componentData={componentData} key={i} />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default TeamScoreDetailsSlide
