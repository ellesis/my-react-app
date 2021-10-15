import React from 'react'
import { Grid } from '@material-ui/core'

const LayoutStore = ({ children }) => {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={12}></Grid>

        <Grid container justifyContent="center" spacing={2}></Grid>
      </Grid>
    </Grid>
  )
}

export default LayoutStore
