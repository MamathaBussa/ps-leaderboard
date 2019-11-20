import React, {Component} from 'react'
import SmileyShield from '../SmileyShield'
import TeamNameWithScoreCard from '../TeamNameWithScoreCard'
import './styles.sass'

class SmileyShieldTeamNameAndScoreCard extends Component {
  render() {
    const {componentData} = this.props
    return (
      <div className="SmileyShieldTeamNameAndScoreCard">
        <SmileyShield componentData={componentData} />
        <TeamNameWithScoreCard componentData={componentData} />
      </div>
    )
  }
}

export default SmileyShieldTeamNameAndScoreCard
