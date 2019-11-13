import React, {Component} from 'react'
import TeamRow from '../TeamRow'

class AllTeamSummarySlide extends Component {
  render() {
    return (
      <div className="AllTeamSummarySlide">
        <TeamRow />
        <TeamRow />
        <TeamRow />
        <TeamRow />
        <TeamRow />
      </div>
    )
  }
}

export default AllTeamSummarySlide
