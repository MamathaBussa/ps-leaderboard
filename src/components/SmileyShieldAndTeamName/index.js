import React, {Component} from 'react'
import SmileyShield from '../SmileyShield'
import TeamNameCard from '../TeamNameCard'
import './styles.sass'

class SmileyShieldAndTeamName extends Component {
  render() {
    const {componentData} = this.props
    return (
      <div className="SmileyShieldAndTeamName">
        <SmileyShield />
        <TeamNameCard
          componentData={componentData}
        />
      </div>
    )
  }
}

export default SmileyShieldAndTeamName
