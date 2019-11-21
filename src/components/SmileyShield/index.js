import React, {Component} from 'react'
import './styles.sass'

class SmileyShield extends Component {
  render() {
    const {teamShieldUrl, emojiUrl, teamName}=this.props.componentData
    return (
      <div className="SmileyShield card white">
        <img
          className="personImage"
          src={teamShieldUrl}
          alt={teamName}
          title={teamName}
        />
        <img
          className="emojiImage"
          src={emojiUrl}
          alt={teamName}
          title={teamName}
        />
      </div>
    )
  }
}

export default SmileyShield
