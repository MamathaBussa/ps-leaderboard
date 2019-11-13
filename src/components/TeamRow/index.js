import React, {Component} from 'react'
import ImageShield from '../ImageShield'
import TeamNameInTable from '../TeamNameInTable'
import './styles.sass'

class TeamRow extends Component {
  render() {
    return (
      <div className="TeamRow row">
        <div className="col s12 l6 l6">
          <ImageShield />
          <TeamNameInTable />
        </div>
        <div className="col s12 l6 l6">
          <ImageShield />
          <TeamNameInTable />
        </div>
      </div>
    )
  }
}

export default TeamRow
