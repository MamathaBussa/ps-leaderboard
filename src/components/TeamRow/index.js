import React, {Component} from 'react'
import ImageShield from '../ImageShield'
import TeamNameInTable from '../TeamNameInTable'

class TeamRow extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 l6 l6">
          <div class="test">
            <ImageShield />
            <TeamNameInTable />
          </div>
        </div>
        <div className="col s12 l6 l6">
          <div class="test">
            <ImageShield />
            <TeamNameInTable />
          </div>
        </div>
      </div>
    )
  }
}

export default TeamRow
