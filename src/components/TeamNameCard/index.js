import React, {Component} from 'react'
import './styles.sass'

class TeamNameCard extends Component {
  render() {
    return (
      <div
        className="TeamNameCard card yellow lighten-2 red-text text-darken-2"
      >
        <div className="img-wrapper">
          <img src="/img/teams/auto-rebels.png" alt="" />
        </div>
        <div className="score-card-wrapper">
          300
        </div>
      </div>
    )
  }
}

export default TeamNameCard
