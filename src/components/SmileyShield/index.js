import React, {Component} from 'react'
import './styles.sass'

class SmileyShield extends Component {
  render() {
    const {teamShieldUrl, teamName}=this.props.componentData
    return (
      <div className="SmileyShield card">
        <img src={teamShieldUrl} alt={teamName} title={teamName} />
      </div>
    )
  }
}

export default SmileyShield
