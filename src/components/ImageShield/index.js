import React, {Component} from 'react'
import './styles.sass'

class ImageShield extends Component {
  render() {
    return (
      <div className="ImageShield">
        <div className="white card smiley">
          <img src="/img/smiley.png" alt="smiley" />
        </div>
        <div className="white card team-name">
          <p>Hawkings...</p>
        </div>
      </div>
    )
  }
}

export default ImageShield
