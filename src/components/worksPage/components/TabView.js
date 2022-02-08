import React, {useState} from 'react';
import {Grid, Typography, Divider, Button} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

import { makeStyles } from "@mui/styles";

import colors from '../../../constants/colors';

const useStyles = makeStyles((theme) => ({
  tabButtons: {
    color: colors.primary + "CC",
    fontSize: "16px",
    letterSpacing: 10,
    fontWeight: 100,
    "&:hover": {
      color: colors.primary,
    },
    transition: "0.3s"
  },
  selectedTabButtons: {
    color: colors.primary + "CC",
    fontSize: "20px",
    letterSpacing: 10,
    fontWeight: 500,
    "&:hover": {
      color: colors.primary,
    },
    transition: "0.3s"
  },
}));

function TabView({onTabClicked}) {
    const [selectedTab, setSelectedTab] = useState(0);
    const classes = useStyles();
  return <Grid container direction="row" width="100%" justifyContent="space-between" alignItems="flex-end" paddingLeft={5} paddingRight={5}>
      <br />
      <Button variant='text' onClick={()=>{
          setSelectedTab(0);
          onTabClicked(0);
      }}>
          <Grid container direction="column" width="300px" >
            <Typography className={selectedTab===0 ? classes.selectedTabButtons : classes.tabButtons} fontFamily="Roboto" align='center'>  GRAPHICS DESIGNS </Typography>
            <br />
            <Divider textAlign="center"><CircleIcon color={selectedTab===0 ? "secondary" : "primary"}  fontSize='15px'/></Divider>
        </Grid>
      </Button>
      <br />
      <Button variant='text' onClick={()=>{
          setSelectedTab(1);
          onTabClicked(1);
      }}>
        <Grid container direction="column"  width="300px">
            <Typography className={selectedTab===1 ? classes.selectedTabButtons : classes.tabButtons} fontFamily="Roboto" align='center'>  SOFTWARE DEVELOPMENT </Typography>
            <br />
            <Divider textAlign="center"><CircleIcon color={selectedTab===1 ? "secondary" : "primary"} fontSize='8px'/></Divider>
        </Grid>
      </Button>
      <br />
      <Button variant='text' onClick={()=>{
          setSelectedTab(2);
          onTabClicked(2);
      }}>
        <Grid container direction="column"  width="300px">
            <Typography className={selectedTab===2 ? classes.selectedTabButtons : classes.tabButtons} fontFamily="Roboto" align='center'>  RESEARCHES </Typography>
            <br />
            <Divider textAlign="center"><CircleIcon color={selectedTab===2 ? "secondary" : "#AAAAAA"} fontSize='8px'/></Divider>
        </Grid>
      </Button>
      <br />
  </Grid>;
}

export default TabView;
