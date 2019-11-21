import React from 'react'

const TeamSummaryTable = ({componentData}) => {
  return (
    <div className="TeamSummaryTable">
      <table>
        <tr className="card white">
          <td>{JSON.stringify(componentData)}</td>
        </tr>
      </table>
    </div>
  )
}


export default TeamSummaryTable
