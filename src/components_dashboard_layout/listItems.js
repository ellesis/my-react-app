import React from 'react'
import { Link } from 'react-router-dom'

import { ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core'

// material-ui/icons
// https://v4.mui.com/components/material-icons/#material-icons
// import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import AssignmentIcon from '@material-ui/icons/Assignment'
import CategoryIcon from '@material-ui/icons/Category'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import StyleIcon from '@material-ui/icons/Style'

/**
 * left Main Menu
 */
export const mainListItems = (
  <div>
    {/* <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem> */}

    <ListItem button component={Link} to="/bootstrap">
      <ListItemIcon>
        <ViewQuiltIcon />
      </ListItemIcon>
      <ListItemText primary="Bootstrap5" />
    </ListItem>

    <ListItem button component={Link} to="/section_card">
      <ListItemIcon>
        <StyleIcon />
      </ListItemIcon>
      <ListItemText primary="Section Card" />
    </ListItem>

    <ListItem button component={Link} to="/echarts">
      <ListItemIcon>
        <TrendingUpIcon />
      </ListItemIcon>
      <ListItemText primary="eCharts" />
    </ListItem>

    <ListItem button component={Link} to="/items">
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Items" />
    </ListItem>

    <ListItem button component={Link} to="/transactions">
      <ListItemIcon>
        <ShoppingBasketIcon />
      </ListItemIcon>
      <ListItemText primary="Transactions" />
    </ListItem>

    <ListItem button component={Link} to="/dailysales">
      <ListItemIcon>
        <MonetizationOnIcon />
      </ListItemIcon>
      <ListItemText primary="Daily sales" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </div>
)

/**
 * left secondary Menu
 */
export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
)
