import React, {Component} from 'react'
import SmileyShield from '../SmileyShield'
import TeamNameCard from '../TeamNameCard'
import './styles.sass'

class SmileyShieldAndTeamName extends Component {
  render() {
    return (
      <div className="SmileyShieldAndTeamName">
        <SmileyShield />
        <TeamNameCard />
      </div>
    )
  }
}

export default SmileyShieldAndTeamName
