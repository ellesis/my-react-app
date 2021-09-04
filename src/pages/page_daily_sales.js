import React from 'react'
import Layout from '../components/layout'
import Content from '../components/content'

function PageDailySales() {
  return (
    <Layout>
      <div className="row">
        <h3>Sales Report For 2021-07-22</h3>
      </div>
      <div className="row">
        <Content title="Daily Sales Ranking"></Content>
        <Content title="Daily Category Sales Ranking"></Content>
      </div>
    </Layout>
  )
}

export default PageDailySales
