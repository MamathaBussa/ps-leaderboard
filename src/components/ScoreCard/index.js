import React, {Component} from 'react'
import './styles.sass'

class ScoreCard extends Component {
  render() {
    const {totalScore} = this.props.componentData
    return (
      <div className="ScoreCard">
        <div>{totalScore}</div>
      </div>
    )
  }
}

export default ScoreCard
