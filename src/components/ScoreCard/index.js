import React, {Component} from 'react'
import './styles.sass'

class ScoreCard extends Component {
  render() {
    let {score} = this.props.componentData || 15
    score = score || 15
    return (
      <h4 className="ScoreCard card green darken-1 white-text">
        {score}
      </h4>
    )
  }
}

export default ScoreCard
