import React, {Component} from 'react'
import TeamName from '../TeamNameImage'
import './styles.sass'

class TeamNameCard extends Component {
  render() {
    const {componentData} = this.props
    return (
      <div
        className="TeamNameCard card yellow lighten-2 red-text text-darken-2"
      >
        <TeamName componentData={componentData} />
      </div>
    )
  }
}

export default TeamNameCard
