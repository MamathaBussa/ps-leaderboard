import React, {Component} from 'react'
import SmileyShieldTeamNameAndScoreCard from
  '../SmileyShieldTeamNameAndScoreCard'
import SmileyShieldTeamNameAndScoreCardA from
  '../SmileyShieldTeamNameAndScoreCard-A'
import SmileyShieldTeamNameAndScoreCardB from
  '../SmileyShieldTeamNameAndScoreCard-B'
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
        <div className="TableWrapper">
          <table>
            <tbody>
              {
                evenIndices.map((eachComponentData, i)=>(
                  <tr
                    key={`${i}-smiley-shield-team-name-and-score-card-even`}
                  >
                    <td>
                      {eachComponentData.type === 'A' ? (
                        <SmileyShieldTeamNameAndScoreCardA
                          componentData={eachComponentData}
                        />
                      ) : eachComponentData.type === 'B' ? (
                        <SmileyShieldTeamNameAndScoreCardB
                          componentData={eachComponentData}
                        />
                        ): <SmileyShieldTeamNameAndScoreCard
                          componentData={eachComponentData}
                        />
                      }
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
                  <tr
                    key={`${i}-smiley-shield-team-name-and-score-card-odd`}
                  >
                    <td>
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
      </div>
    )
  }
}

export default AllTeamsSummarySlide
