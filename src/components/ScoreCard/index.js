import React, {Component} from 'react'
import './styles.sass'

class ScoreCard extends Component {
  render() {
    const {totalScore, teamBgColor} = this.props.componentData
    return (
      <div
        className="ScoreCard card"
        style={{backgroundColor: teamBgColor}}
      >
        {totalScore}
      </div>
    )
  }
}

export default ScoreCard
