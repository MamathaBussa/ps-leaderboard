import React, {Component} from 'react'
import './styles.sass'

class ScoreCard extends Component {
  render() {
    const {totalScore} = this.props.componentData || 15
    return (
      <h4 className="ScoreCard card green darken-1 white-text">
        {totalScore}
      </h4>
    )
  }
}

export default ScoreCard
