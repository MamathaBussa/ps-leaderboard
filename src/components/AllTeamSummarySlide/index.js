import React, {Component} from 'react'
import SmileyShieldTeamNameAndScoreCard from
  '../SmileyShieldTeamNameAndScoreCard'
import SmileyShield from '../SmileyShield'
import TeamNameCard from '../TeamNameCard'
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
            <tr>
              <SmileyShieldTeamNameAndScoreCard
                componentData={componentData[0]}
              />
            </tr>
            <tr>Row 2</tr>
            <tr>Row 3</tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>Row 1</tr>
            <tr>Row 2</tr>
            <tr>Row 3</tr>
          </tbody>
        </table>

      </div>
    )
  }
}

export default AllTeamsSummarySlide


/*
<div className="col s6">
  <table>
    <tbody>
      {evenIndices.map(((eachComponentData, i) => (
        <tr key={`evens-${i}`}>
          <td>
            <SmileyShieldTeamNameAndScoreCard
              teamName="Falcons"
              componentData={eachComponentData}
            />
          </td>
        </tr>
      )))}
    </tbody>
  </table>
</div>

<div className="col s6">

  <table>
    <tbody>
      {oddIndices.map(((eachComponentData, i) => (
        <tr key={`odds-${i}`}>
          <td>
            <SmileyShieldTeamNameAndScoreCard
              teamName="Falcons"
              componentData={eachComponentData}
            />
          </td>
        </tr>
      )))}
    </tbody>
  </table>
</div>
*/
