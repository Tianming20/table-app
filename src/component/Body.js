import "../../src/App.css"
import React from 'react'
import DataTable from "./DataTable"

export default function Body({data}) {
  return (
    <div className="body">
      <div>
        <div className="table-title">Data</div>
        <div className="table-display"><DataTable data={data}/></div>
      </div>
    </div>
  )
}
