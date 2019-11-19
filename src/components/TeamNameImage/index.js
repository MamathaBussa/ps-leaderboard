import React, {Component} from 'react'

class TeamNameImage extends Component {
  render() {
    const {teamImageUrl, teamName}=this.props.componentData
    return (
      <div className="TeamNameImage">
        <img src={teamImageUrl} title={teamName} alt={teamName} />
      </div>
    )
  }
}

export default TeamNameImage
