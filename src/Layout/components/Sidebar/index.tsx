import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Menu } from './menu';
import { useNavigate } from "react-router-dom";
import { ListItemButton, Grid } from '@mui/material';
 
const drawerWidth = 240;

const SideBar = () => {
  const navigate = useNavigate()
    return(
      <Grid item xs={2}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
            backgroundColor: '#FFFFFF',
            color: "#334D6E"

          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            {Menu.map((item, index) => (
              <ListItem 
              key={index} 
              disablePadding
              onClick={() => navigate(item?.link)}
              >
                <ListItemButton >
                  <ListItemText primary={item?.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Grid>
    )
}

export default SideBar