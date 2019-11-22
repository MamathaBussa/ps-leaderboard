import React, {Component} from 'react'
import TeamSummaryTable from './../TeamSummaryTable'
// import SmileyShieldTeamNameAndScoreCard from
//   '../SmileyShieldTeamNameAndScoreCard'
import './styles.sass'

class AllTeamsSummarySlide extends Component {
  render() {
    const {componentData} = this.props
    const evenIndices = componentData
        .filter((data, i) => i % 2 === 0)
    const oddIndices = componentData
        .filter((data, i) => i % 2 !== 0)

    return (
      <div className="AllTeamsSummarySlide">
        <div className="row">
          <div className="col s6">
            <TeamSummaryTable componentData={evenIndices} />
          </div>
          <div className="col s6">
            <TeamSummaryTable componentData={oddIndices}/>
            <div className="right-bottom-logo">
              <img src="/img/logos/leaderboard-sm.png"
                alt="Leaderboard"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AllTeamsSummarySlide

/*
DESIGN 2
<div className="TableWrapper">
  <table>
    <tbody>
      {
        evenIndices.map((eachComponentData, i)=>(
          <tr key={`${i}-all-teams-summary-slide-even`}>
            <td >
              <SmileyShieldTeamNameAndScoreCard
                componentData={eachComponentData}
              />
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
</div>
<div className="TableWrapper">
  <table>
    <tbody>
      {
        oddIndices.map((eachComponentData, i)=>(
          <tr key={`${i}-all-team-summary-slide-odd`}>
            <td >
              <SmileyShieldTeamNameAndScoreCard
                componentData={eachComponentData}
              />
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
</div>
*/
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
