import React, {Component} from 'react'
import './styles.sass'

class TeamNameInTable extends Component {
  render() {
    return (
      <div className="TeamNameInTable">
        <div className="card">
          <h4 className="deep-orange-text">Hawkings...</h4>
          <div className="score light-green white-text card">
            +30
          </div>
        </div>
      </div>
    )
  }
}

export default TeamNameInTable
