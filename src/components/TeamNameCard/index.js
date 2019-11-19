import React, {Component} from 'react'
import './styles.sass'

class TeamNameCard extends Component {
  render() {
    const {teamImageUrl, teamName, totalScore} = this.props.componentData
    return (
      <div
        className="TeamNameCard card yellow lighten-2 red-text text-darken-2"
      >
        <div className="img-wrapper">
          <img src={teamImageUrl} title={teamName} alt={teamName} />
        </div>
        <div className="score-card-wrapper">
          <div>{totalScore}</div>
        </div>
      </div>
    )
  }
}

export default TeamNameCard
