import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import { Outlet } from 'react-router-dom'
import './App.css'
import SideBar from './Layout/components/Sidebar'

function App() {

  return (
    <Grid container>
      <SideBar/>
      <Grid sx={{marginTop: 10}} alignContent="center" container item xs={10}>
        <Grid
          sx={{
            borderRadius: 2, 
            boxShadow: 1, 
            marginRight: "240px", 
            backgroundColor: "white",
            padding: 4
          }}
          item
          xs={12}
          height="100wh"
        >
          <Outlet/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
