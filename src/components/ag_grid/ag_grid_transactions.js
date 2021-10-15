import React, { useState } from 'react'
import axios from 'axios'
import { AgGridReact } from 'ag-grid-react'

const AgGridTransactions = () => {
  const [gridApi, setGridApi] = useState(null)
  const [gridColumnApi, setGridColumnApi] = useState(null)

  const defaultColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    width: 100,
    minWidth: 50,
    resizable: true,
  }

  const columnDefs = [
    {
      headerName: 'id',
      field: 'id',
      width: 150,
    },
    {
      headerName: 'store_name',
      field: 'store_name',
      width: 180,
    },
    {
      headerName: 'drawer',
      field: 'drawer',
      cellStyle: { textAlign: 'right' },
    },
    {
      headerName: 'cashier_name',
      field: 'cashier_name',
      width: 130,
    },
    {
      headerName: 'type',
      field: 'type',
    },
    {
      headerName: 'customer_name',
      field: 'customer_name',
      width: 150,
    },
    {
      headerName: 'customer_type',
      field: 'customer_type',
    },
    {
      headerName: 'customer_point',
      field: 'customer_point',
      cellStyle: { textAlign: 'right' },
    },
    {
      headerName: 'discount_amount',
      field: 'discount_amount',
      cellStyle: { textAlign: 'right' },
    },
    {
      headerName: 'tax_amount',
      field: 'tax_amount',
      cellStyle: { textAlign: 'right' },
    },
    {
      headerName: 'crv_amount',
      field: 'crv_amount',
      cellStyle: { textAlign: 'right' },
    },
    {
      headerName: 'sub_total',
      field: 'sub_total',
      cellStyle: { textAlign: 'right' },
    },
    {
      headerName: 'net_sales_amount',
      field: 'net_sales_amount',
      cellStyle: { textAlign: 'right' },
    },
    {
      headerName: 'total_amount',
      field: 'total_amount',
      cellStyle: { textAlign: 'right' },
    },
    {
      headerName: 'Date',
      field: 'date',
      width: 150,
    },
  ]

  const onGridReady = (params) => {
    setGridApi(params.api)
    setGridColumnApi(params.columnApi)

    // grid api data call
    const url = `${process.env.REACT_APP_SABIS_API_SERVER}/transactions`
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

  const sizeToFit = () => {
    gridApi.sizeColumnsToFit()
  }

  const autoSizeAll = (skipHeader) => {
    var allColumnIds = []
    gridColumnApi.getAllColumns().forEach((column) => {
      allColumnIds.push(column.colId)
    })
    gridColumnApi.autoSizeColumns(allColumnIds, skipHeader)
  }

  const onExportClick = () => {
    let csvExportOption = {
      skipHeader: false,
      skipFooters: false,
      columnGroups: true,
      skipGroups: false,
      skipPinnedTop: false,
      skipPinnedBottom: false,
      allColumns: true,
      onlySelected: false,
      filename: 'transactions.csv',
    }

    gridApi.exportDataAsCsv(csvExportOption)
  }

  return (
    <>
      <h2>Transactions</h2>
      <div className="button-bar">
        <button onClick={() => sizeToFit()}>Size to Fit</button>
        <button onClick={() => autoSizeAll(false)}>Auto-Size All</button>
        <button onClick={() => autoSizeAll(true)}>Auto-Size All (Skip Header)</button>

        <button onClick={() => onExportClick()}>export</button>
      </div>

      <div className="ag-theme-balham" style={{ width: '100%', height: 600 }}>
        <AgGridReact onGridReady={onGridReady} columnDefs={columnDefs} defaultColDef={defaultColDef} pagination={true} paginationPageSize={50} />
      </div>
    </>
  )
}

export default AgGridTransactions
