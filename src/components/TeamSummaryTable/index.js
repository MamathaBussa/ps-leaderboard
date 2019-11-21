import React from 'react'
import SmileyShieldTeamNameAndScoreCard
  from '../SmileyShieldTeamNameAndScoreCard'
import './styles.sass'

const TeamSummaryTable = ({componentData}) => {
  return (
    <div className="TeamSummaryTable">
      <table>
        <tbody>
          {componentData.map((eachComponentData, i)=> (
            <tr key={i}>
              <td>
                <SmileyShieldTeamNameAndScoreCard
                  componentData={eachComponentData}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default TeamSummaryTable
