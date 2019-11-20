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
      <div className="AllTeamsSummarySlide card yellow lighten-4">
        <div className="TableWrapper">
          <table>
            <tbody>
              <tr>
                {
                  evenIndices.map((eachComponentData)=>(
                    <SmileyShieldTeamNameAndScoreCard
                      componentData={eachComponentData}
                    />
                  ))
                }
              </tr>
            </tbody>
          </table>
        </div>
        <div className="TableWrapper">
          <table>
            <tbody>
              <tr>
                {
                  oddIndices.map((eachComponentData)=>(
                    <SmileyShieldTeamNameAndScoreCard
                      componentData={eachComponentData}
                    />
                  ))
                }
              </tr>
            </tbody>
          </table>
        </div>
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
