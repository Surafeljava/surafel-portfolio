import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Grid, CssBaseline, Button, IconButton, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { makeStyles } from "@mui/styles";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const useStyles = makeStyles((theme) => ({
  topbutton: {
    color: "#CCCCCC",
    fontWeight: 100,
    letterSpacing: 5,
    "&:hover": {
      color: "#FFD016"
    }
  },
  maintext: {
    color: "#FFFFFF",
    "&:hover": {
      fontSize: 100
    }
  }
}));

function HomePage() {
      const classes = useStyles();

  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return <Grid container direction="column" width="100%" height="100vh" style={{backgroundColor: "#040710", padding: "20px"}} justifyContent="center">
      <CssBaseline/>
      <Grid container direction="row" justifyContent="center">
        <Button style={{color:"#FFFFFF"}} variant="text" href="#myworks">
          <Typography variant="h5" fontFamily= "Manifesto" className={classes.topbutton} fontSize={isMobile ? 18 : 22}>  MY WORKS </Typography>
        </Button>

        &nbsp;&nbsp;&nbsp;

        <IconButton>
          <CircleOutlinedIcon style={{fontSize: "20px", color: "#FFD016DD"}}/>
        </IconButton>

        &nbsp;&nbsp;&nbsp;

        <Button style={{color:"#FFFFFF"}} variant="text" className="font-face-gm" href="#myworks">
          <Typography variant="h5" className={classes.topbutton} fontFamily="Manifesto" fontSize={isMobile ? 18 : 22}>  CONTACT </Typography>
        </Button>
      </Grid>
      <Grid container direction="row" flexGrow={1} alignItems="center" justifyContent="space-between">
        {isDesktop && (
          <Grid item width="80px">
            <Typography variant="h5" color="#CCCCCC" component="div" fontSize={25} fontWeight={100} 
            letterSpacing={10} fontFamily="Roboto" style={{transform: "rotate(-90deg)"}}>  2022 </Typography>
          </Grid>
        )}

        <Grid container direction="column" alignItems="center" xs={isMobile ? 12 : 8}>
          
          <Grid container direction={ isMobile ? "column" : "row"} justifyContent="center" alignItems="center" alignContents="center">
            <CircleOutlinedIcon color="secondary"/>
            <br />
            
            {isDesktop && (
              <Typography className={classes.maintext} fontFamily= "Manifesto" marginLeft= {4} marginRight= {4} fontSize= {100} > SURAFEL KINDU </Typography>
            )}

            {isMobile && (
              <Typography className={classes.maintext} fontFamily= "Manifesto" marginLeft= {4} marginRight= {4} fontSize= {40} align='center'> SURAFEL KINDU </Typography>
            )}

            <br />
            
            <CircleOutlinedIcon color="secondary"/>
            <br />
          </Grid>

          <ArrowDownwardIcon style={{fontSize: "30px", color: "#FFFFFF55"}}/>
          <br />

          <Typography color="#FFD016CC" fontSize={ isMobile ? 20 : 28} fontWeight={100} letterSpacing={20} fontFamily="Roboto" align="center">  GRAPHICS DESIGNER </Typography>
          

        </Grid>


        <Grid container direction={ isDesktop ? "column" : "row"} width={ isDesktop ? "80px" : "100%"} justifyContent="center">
          <IconButton onClick={() => {
            window.open("https://www.instagram.com/surafel_kindu/");
          }}>
            <FacebookIcon style={{fontSize: "33px", color: "#FFFFFF"}}/>
          </IconButton>

          <br />

          <IconButton onClick={() => {
            window.open("https://www.instagram.com/surafel_kindu/");
          }}>
            <InstagramIcon style={{fontSize: "33px", color: "#FFFFFF"}}/>
          </IconButton>

          <br />
          
          <IconButton onClick={() => {
            window.open("https://twitter.com/surafel_kindu");
          }}>
            <TwitterIcon style={{fontSize: "33px", color: "#FFFFFF"}}/>
          </IconButton>
          
        </Grid>
      </Grid>


    </Grid>;
}

export default HomePage;
