import React, {Component} from 'react'
import TeamDetailedScoreRow from '../TeamDetailedScoreRow'
import './styles.sass'

class TeamScoreDetailsSlide extends Component {
  render() {
    const {componentData} = this.props
    return (
      <div className="TeamScoreDetailsSlide card blue lighten-2">
        <table>
          <tbody>
            {
              componentData.map((eachComponentData, i) =>(
                <TeamDetailedScoreRow
                  componentData={eachComponentData}
                  key={i}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default TeamScoreDetailsSlide
