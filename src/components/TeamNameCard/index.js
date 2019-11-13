import React, {Component} from 'react'
import './styles.sass'

class TeamNameCard extends Component {
  render() {
    const {componentData} = this.props
    return (
      <div
        className="TeamNameCard card yellow lighten-2 red-text text-darken-2"
      >
        {componentData.teamName}
      </div>
    )
  }
}

export default TeamNameCard
