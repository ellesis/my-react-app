import React, { useState } from 'react'
import axios from 'axios'
import { AgGridReact } from 'ag-grid-react'

const AgGridItems = () => {
  const [gridApi, setGridApi] = useState(null)
  const [columnApi, setColumnApi] = useState(null)

  const defaultColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    resizable: true,
    flex: 1,
    width: 90,
    minWidth: 50
  }

  const columnDefs = [
    {
      headerName: 'Pos_No',
      field: 'pos_no'
    },
    {
      headerName: 'Name',
      field: 'name',
      flex: 2
    },
    {
      headerName: 'Unit Price',
      field: 'unit_price',
      cellStyle: { textAlign: 'right' }
    },
    {
      headerName: 'Tax',
      field: 'tax',
      cellStyle: { textAlign: 'right' }
    },
    {
      headerName: 'CRV',
      field: 'crv',
      cellStyle: { textAlign: 'right' }
    },
    {
      headerName: 'Package Size',
      field: 'package_size',
      cellStyle: { textAlign: 'right' }
    },
    {
      headerName: 'Category ID',
      field: 'category_id',
      cellStyle: { textAlign: 'right' }
    },
    {
      headerName: 'Created Date',
      field: 'created_at',
      width: 150
    },
    {
      headerName: 'Updated Date',
      field: 'updated_at',
      width: 150
    }
  ]

  const onGridReady = (params) => {
    setGridApi(params.api)
    console.log('>>>: onGridReady -> gridApi', gridApi)

    setColumnApi(params.columnApi)
    console.log('>>>: onGridReady -> columnApi', columnApi)

    // grid api data call
    const url = `${process.env.REACT_APP_SABIS_API_SERVER}/items`
    axios
      .get(url)
      .then((res) => {
        console.log('>>> : onGridReady -> res', res)
        params.api.applyTransaction({ add: res.data.data })
      })
      .catch((err) => {
        console.log('>>> : onGridReady -> error', err)
      })
  }

  return (
    <>
      <h2>Item List</h2>
      <div className="ag-theme-balham" style={{ width: '100%', height: 600 }}>
        <AgGridReact
          onGridReady={onGridReady}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={50}
        />
      </div>
    </>
  )
}

export default AgGridItems
