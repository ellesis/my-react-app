import React from 'react'
import Layout from '../components/layout'
import AgGridTransactions from '../components/ag_grid/ag_grid_transactions'

const Transactions = () => {
  return (
    <Layout>
      <div className="row">
        <AgGridTransactions />
      </div>
    </Layout>
  )
}

export default Transactions
