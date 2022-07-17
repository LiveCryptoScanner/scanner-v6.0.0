import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import RadarOutlinedIcon from '@mui/icons-material/RadarOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBtc } from '@fortawesome/free-brands-svg-icons';
import { Dashboard, Settings, Person } from '@mui/icons-material';


export default function NestedList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemIcon>
          <PeopleAltOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
        <FontAwesomeIcon icon={faBtc} />
        </ListItemIcon>
        <ListItemText primary="Top Bull Coins" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <TrendingUpOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Trend" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SignalCellularAltOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Signals" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <RadarOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Scanner" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Standard" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Customize" />
          </ListItemButton>   
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>             
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
          <StarBorderOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Watchlist" />
      </ListItemButton>
    </List>
  );
}
