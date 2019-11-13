import React, {Component} from 'react'
import './styles.sass'

class SmileyShield extends Component {
  render() {
    return (
      <div className="SmileyShield card">
        <img className="smiley" src="/img/smiley.png" alt="smiley" />
        <img className="shield" src="/img/shield.png" alt="smiley" />
      </div>
    )
  }
}

export default SmileyShield
