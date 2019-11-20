import React, {Component} from 'react'
import TeamNameWithScoreCard from '../TeamNameWithScoreCard'
import './styles.sass'

class SmileyShieldTeamNameAndScoreCardB extends Component {
  render() {
    const {componentData} = this.props
    return (
      <div className="SmileyShieldTeamNameAndScoreCard-B">
        <div className="shieldImage">
          <img
            src={componentData.teamleadEmojiURL} alt={componentData.teamName} />
        </div>
        <TeamNameWithScoreCard componentData={componentData} />
      </div>
    )
  }
}

export default SmileyShieldTeamNameAndScoreCardB
