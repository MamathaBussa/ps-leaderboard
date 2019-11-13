import React, {Component} from 'react'
import './styles.sass'

class SmileyShieldAndTeamName extends Component {
  render() {
    return (
      <div className="SmileyShieldAndTeamName">
        <div className="ImageShield card">
          ImageShield
        </div>
        <div className="TeamNameInTable card red-text text-darken-2">
          Falcons
        </div>
      </div>
    )
  }
}

export default SmileyShieldAndTeamName
