import React from 'react'
import Layout from '../components/layout'
import AgGridItems from '../components/ag_grid/ag_grid_items'

const Items = () => {
  return (
    <Layout>
      <div className="row">
        <AgGridItems />
      </div>
    </Layout>
  )
}

export default Items
