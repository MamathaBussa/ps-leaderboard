import React, {Component} from 'react'
import SmileyShield from '../SmileyShield'
import './styles.sass'

class SmileyShieldAndTeamName extends Component {
  render() {
    return (
      <div className="SmileyShieldAndTeamName">
        <SmileyShield />
        <div className="TeamNameInTable card red-text text-darken-2">
          Falcons
        </div>
      </div>
    )
  }
}

export default SmileyShieldAndTeamName
