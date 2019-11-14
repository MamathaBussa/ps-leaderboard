import React, {Component} from 'react'
import SmileyShieldTeamNameAndScoreCard from
  '../SmileyShieldTeamNameAndScoreCard'
import './styles.sass'

class AllTeamsSummarySlide extends Component {
  render() {
    const {componentData} = this.props
    const evenIndices = componentData
        .filter((data, i) => i % 2 === 0)
    const oddIndices = componentData
        .filter((data, i) => i % 2 !== 0)

    return (
      <div className="AllTeamsSummarySlide card blue lighten-2">

        <table>
          <tbody>
            {evenIndices.map(((eachComponentData) => (
              <tr>
                <td>
                  <SmileyShieldTeamNameAndScoreCard teamName="Falcons"
                    componentData={eachComponentData} />
                </td>
              </tr>
            )))}
          </tbody>
        </table>

        <table>
          <tbody>
            {oddIndices.map(((eachComponentData) => (
              <tr>
                <td>
                  <SmileyShieldTeamNameAndScoreCard teamName="Falcons"
                    componentData={eachComponentData} />
                </td>
              </tr>
            )))}
          </tbody>
        </table>

      </div>
    )
  }
}

export default AllTeamsSummarySlide
