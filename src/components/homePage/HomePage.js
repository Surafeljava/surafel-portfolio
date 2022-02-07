import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Grid, CssBaseline, Button, IconButton, Typography} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { makeStyles } from "@mui/styles";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GestureIcon from '@mui/icons-material/Gesture';
import GitHubIcon from '@mui/icons-material/GitHub';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

import portrait from '../../assets/portrait.jpg';
import portfolioBg from '../../assets/portfolio_bg.png';
import colors from '../../constants/colors';

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
  },
  icon: {
    fontSize: "33px", 
    color: "#FFFFFF",
    "&:hover": {
      color: colors.secondary,
      fontSize: "50px",
    },
    transition: "0.3s"
  }
}));

function HomePage() {
      const classes = useStyles();

  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return <Grid container direction="column" width="100%" height="100vh" 
  style={{backgroundColor: "#040710", padding: "20px", backgroundImage: `url(${portfolioBg})`, backgroundSize: "cover"}} justifyContent="center">
      <CssBaseline/>
      <Grid container direction="row" justifyContent="center">
        <Button style={{color:"#FFFFFF"}} variant="text" href="#myworks">
          <Typography variant="h5" fontFamily= "Manifesto" className={classes.topbutton} fontSize={isMobile ? 18 : 22}>  MY WORKS </Typography>
        </Button>


        <Grid item marginLeft={5} marginRight={5}>
          <IconButton>
            <CircleOutlinedIcon style={{fontSize: "20px", color: "#FFD016DD"}}/>
          </IconButton>
        </Grid>


        <Button style={{color:"#FFFFFF"}} variant="text" className="font-face-gm" href="#contact">
          <Typography variant="h5" className={classes.topbutton} fontFamily="Manifesto" fontSize={isMobile ? 18 : 22}>  CONTACT </Typography>
        </Button>
      </Grid>
      <Grid container direction="row" flexGrow={1} alignItems="center" justifyContent="space-between">
        {isDesktop && (
          <Grid item width="80px">
            <Typography variant="h5" color="secondary" component="div" fontSize={25} fontWeight={100} 
            letterSpacing={10} fontFamily="Roboto" style={{transform: "rotate(-90deg)"}}>  2022 </Typography>
          </Grid>
        )}

        <Grid container direction="column" alignItems="center" xs={isMobile ? 12 : 8}>

          <Grid item>
              <img src={portrait} alt="Self Portrait" style={{
                        width: "180px", height:"180px", borderRadius:"90px", borderWidth:"6px", borderStyle: "solid", borderColor: colors.white}}/>
            </Grid>
            <br />
          
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

          <Grid container direction="row" justifyContent="center">
            <Typography color="#FFD016AA" fontSize={ isMobile ? 16 : 22} fontWeight={100} letterSpacing={8} fontFamily="Roboto" align="center">  GRAPHICS DESIGNER </Typography>
            <Grid item marginLeft={5} marginRight={5}>
            <Typography color="#CCCCCC" fontSize={ isMobile ? 16 : 22} fontWeight={100} letterSpacing={5} fontFamily= "Roboto" align="center">  & </Typography>
            </Grid>
            <Typography color="#FFD016AA" fontSize={ isMobile ? 16 : 22} fontWeight={100} letterSpacing={5} fontFamily="Roboto" align="center">  SOFTWARE DEVELOPER </Typography>
          </Grid>
          

        </Grid>


        <Grid container direction={ isDesktop ? "column" : "row"} width={ isDesktop ? "80px" : "100%"} justifyContent="center">
          <IconButton onClick={() => {
            window.open("https://www.instagram.com/surafel_kindu/");
          }}>
            <FacebookIcon className={classes.icon}/>
          </IconButton>

          <br />

          <IconButton onClick={() => {
            window.open("https://www.instagram.com/surafel_kindu/");
          }}>
            <InstagramIcon className={classes.icon}/>
          </IconButton>

          <br />
          
          <IconButton onClick={() => {
            window.open("https://twitter.com/surafel_kindu");
          }}>
            <TwitterIcon className={classes.icon}/>
          </IconButton>

          <br />
          
          <IconButton onClick={() => {
            window.open("https://www.linkedin.com/in/surafel-kindu-11889415b/");
          }}>
            <LinkedInIcon className={classes.icon}/>
          </IconButton>

          <br />
          
          <IconButton onClick={() => {
            window.open("https://www.behance.net/surafelkindu");
          }}>
            <GestureIcon className={classes.icon}/>
          </IconButton>

          <br />
          
          <IconButton onClick={() => {
            window.open("https://github.com/Surafeljava");
          }}>
            <GitHubIcon className={classes.icon} />
          </IconButton>
          
        </Grid>
      </Grid>


    </Grid>;
}

export default HomePage;
