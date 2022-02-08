import React from 'react';
import {Grid, Typography, IconButton} from "@mui/material";
import { makeStyles } from "@mui/styles";

import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

import colors from '../../../constants/colors';

const useStyles = makeStyles((theme) => ({
  titleText: {
    color: colors.white,
    fontSize: "22px",
    letterSpacing: 3,
    fontWeight: 600
  },
  description: {
    color: colors.white + 'CC',
    fontSize: "16px",
    letterSpacing: 2,
    fontWeight: 300
  },
  box: {
      width: "100%"
  }
}));

function DesignsCard({design}) {
    const classes = useStyles();
  return <Grid container direction="column">
      <Grid item>
          <div className={classes.box} style={{ height: "400px", position: "relative", display: "flex", backgroundSize: "cover", borderRadius: "20px"}}>
            <div style={{background: `url(${design.url})`, 
            width: "100%", height:"100%", backgroundSize: "cover", position: "absolute", borderRadius: "20px"}}>
            </div>

            <div style={{background: "linear-gradient(#00000000, #00000022, #000000CC)", 
            width: "100%", height:"100%", backgroundSize: "contain", position: "absolute", borderRadius: "20px"}}>
            </div>
            
            <div style={{position: "absolute", top:10, zIndex: 8, right: 10,}}>
                <IconButton onClick={()=>{
                    console.log("Do something here");
                }}>
                    <ZoomOutMapIcon color='primary'/>
                </IconButton>
            </div>

            <div style={{position: "absolute", bottom:20, zIndex: 10, left: 20, right: 20}}>
                <Grid container direction="column" alignItems="flex-start" alignContent="flex-start" xs={12}>
                    <Typography className={classes.titleText} fontFamily="Roboto" align='left'>  {design.title.toUpperCase()} </Typography>
                    <Typography className={classes.description} fontFamily="Roboto" align='left'> {design.description} </Typography>
                </Grid>
            </div>

        </div>
      </Grid>
  </Grid>;
}

export default DesignsCard;
