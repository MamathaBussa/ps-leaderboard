import React, {Component} from 'react'
import TeamNameWithScoreCard from '../TeamNameWithScoreCard'
import './styles.sass'

class SmileyShieldTeamNameAndScoreCard extends Component {
  render() {
    const {componentData} = this.props
    return (
      <div className="SmileyShieldTeamNameAndScoreCard-A">
        {/* JSON.stringify(componentData)*/}
        <img className="shieldImage"
          src={componentData.teamShieldUrl} alt={componentData.teamName} />
        <TeamNameWithScoreCard componentData={componentData} />
      </div>
    )
  }
}

export default SmileyShieldTeamNameAndScoreCard
