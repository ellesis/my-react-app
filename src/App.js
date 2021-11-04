import React from 'react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import './App.css'
import './ag-grid.css'

import Dashboard from './components_dashboard/dashboard' // dashboard 페이지

import DashboardAdmin from './pages/page_admin' // Lisa's dashboard 페이지
import PageFront from './pages/page_front'
import PageBootstrap from './pages/page_bootstrap'
import PageDailySales from './pages/page_daily_sales'
import Items from './pages/page_items'
import Transactions from './pages/page_transactions'
import PageEcharts from './pages/page_echarts'
import PageCard from './pages/page_card'
import PageLeftSidebar from './pages/page-left-sidebar' // bootstrap sidebar template

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard_admin" exact component={DashboardAdmin} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/echarts" exact component={PageEcharts} />
        <Route path="/dailysales" exact component={PageDailySales} />
        <Route path="/items" exact component={Items} />
        <Route path="/transactions" exact component={Transactions} />
        <Route path="/front" exact component={PageFront} />
        <Route path="/bootstrap" exact component={PageBootstrap} />
        <Route path="/section_card" exact component={PageCard} />
        <Route path="/left-sidebar" exact component={PageLeftSidebar} />

        <Route path="/" exact component={DashboardAdmin} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
