import React, {Component} from 'react'
import TeamNameImage from '../TeamNameImage'
import ScoreCard from '../ScoreCard'
import './styles.sass'

class TeamNameWithScoreCard extends Component {
  render() {
    const {componentData} = this.props
    return (
      <div className="TeamNameWithScoreCard card">
        <TeamNameImage componentData={componentData} />
        <ScoreCard componentData={componentData} />
      </div>
    )
  }
}

export default TeamNameWithScoreCard
