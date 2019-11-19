import React, {Component} from 'react'
import SmileyShieldAndTeamName from '../SmileyShieldAndTeamName'
import ScoreCard from '../ScoreCard'
import './styles.sass'

class SmileyShieldTeamNameAndScoreCard extends Component {
  render() {
    const {componentData} = this.props
    return (
      <div className="SmileyShieldTeamNameAndScoreCard">
        <SmileyShieldAndTeamName componentData={componentData} />
        <ScoreCard componentData={componentData} />
      </div>
    )
  }
}

export default SmileyShieldTeamNameAndScoreCard
