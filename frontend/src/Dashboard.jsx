import { Tabs, Tab, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import {useState} from 'react'
import {ChartComponent, TicketsPorRegion} from './GraficasDashboard.jsx';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export const Dashboard = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="Tablero">
            <Tab label="Tickets Resueltos" {...a11yProps(0)} />
            <Tab label="Tickets por región" {...a11yProps(1)} />
            </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
            <ChartComponent />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
            <TicketsPorRegion/>
        </CustomTabPanel>
      </Box>
    );
}

