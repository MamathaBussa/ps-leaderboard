import React, {Component} from 'react'
import './styles.sass'

class SmileyShield extends Component {
  render() {
    const {teamShieldUrl, teamName}=this.props.componentData
    return (
      <div className="SmileyShield card">
        <img src="img/people-emoji/Happy2.png"
          className="people-emoji"
          alt={teamName}
          title={teamName}
        />
        <img src={teamShieldUrl} alt={teamName} title={teamName} />
      </div>
    )
  }
}

export default SmileyShield
