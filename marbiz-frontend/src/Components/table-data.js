import React from "react"
import { MDBDataTable } from "mdbreact"
import "./table-style.css"

export default function TableData(props) {
  const data = props.tabledata
  return <MDBDataTable striped bordered hover small data={data} />
}
