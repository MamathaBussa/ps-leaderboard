import React, {Component} from 'react'
import SmileyShield from '../SmileyShield'
import TeamNameImage from '../TeamNameImage'
import ScoreCard from '../ScoreCard'
import './styles.sass'

class SmileyShieldTeamNameAndScoreCard extends Component {
  render() {
    const {componentData} = this.props
    return (
      <div className="SmileyShieldTeamNameAndScoreCard">
        <SmileyShield componentData={componentData} />
        <TeamNameImage componentData={componentData} />
        <ScoreCard componentData={componentData} />
      </div>
    )
  }
}

export default SmileyShieldTeamNameAndScoreCard
