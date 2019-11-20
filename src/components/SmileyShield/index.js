import React, {Component} from 'react'
import './styles.sass'

class SmileyShield extends Component {
  render() {
    const {teamShieldUrl, teamName, teamleadEmojiURL}=this.props.componentData
    return (
      <div className="SmileyShield card">
        <img
          className="people-emoji"
          src={teamleadEmojiURL}
          alt={teamName}
          title={teamName}
        />
        <img
          src={teamShieldUrl}
          alt={teamName}
          title={teamName}
        />
      </div>
    )
  }
}

export default SmileyShield
