import React, {Component} from 'react'

class TeamNameImage extends Component {
  render() {
    const {teamImageUrl, teamName}=this.props
    return (
      <div
        className="TeamNameImage"
      >
        <div className="TeamNameImage">
          <img src={teamImageUrl} title={teamName} alt={teamName} />
        </div>
      </div>
    )
  }
}

export default TeamNameImage
