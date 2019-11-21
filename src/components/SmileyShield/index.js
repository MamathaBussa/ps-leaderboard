import React, {Component} from 'react'
import './styles.sass'

class SmileyShield extends Component {
  render() {
    const {teamShieldUrl, teamName}=this.props.componentData
    return (
      <div className="SmileyShield">
        <img
          className="personImage"
          src={teamShieldUrl}
          alt={teamName}
          title={teamName}
        />
        <img
          className="emojiImage"
          src="/img/emojis/happy-2.png"
          alt="Happy 2"
          title="Happy 2"
        />
      </div>
    )
  }
}

export default SmileyShield
