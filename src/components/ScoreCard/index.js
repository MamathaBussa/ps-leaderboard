import React, {Component} from 'react'
import './styles.sass'

class ScoreCard extends Component {
  render() {
    const {score} = this.props.componentData
    return (
      <h4 className="ScoreCard card green darken-1 white-text">
        {score}
      </h4>
    )
  }
}

export default ScoreCard
