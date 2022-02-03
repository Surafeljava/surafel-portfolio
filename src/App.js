import { Grid, CssBaseline, Button, IconButton, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { makeStyles } from "@mui/styles";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

import './app.css';

const useStyles = makeStyles((theme) => ({
  topbutton: {
    color: "#CCCCCC",
    fontSize: "18px",
    fontWeight: 100,
    letterSpacing: 5,

    "&:hover": {
      color: "#FFD016"
    }
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Grid container direction="column" width="100%" height="100vh" style={{backgroundColor: "#040710", padding: "20px"}} justifyContent="center">
      <CssBaseline/>
      <Grid container direction="row" justifyContent="center">
        <Button style={{color:"#FFFFFF"}} variant="text">
          <div className="font-face-gm">
            <Typography variant="h5" fontFamily= "Manifesto" className={classes.topbutton}>  MY WORKS </Typography>
          </div>
        </Button>

        &nbsp;&nbsp;&nbsp;

        <IconButton>
          <CircleOutlinedIcon style={{fontSize: "20px", color: "#FFD016DD"}}/>
        </IconButton>

        &nbsp;&nbsp;&nbsp;

        <Button style={{color:"#FFFFFF"}} variant="text" className="font-face-gm">
          <div className="font-face-gm">
            <Typography variant="h5" className={classes.topbutton} fontFamily="Manifesto">  CONTACT </Typography>
          </div>
        </Button>
      </Grid>
      <Grid container direction="row" flexGrow={1} alignItems="center" justifyContent="space-between">
        <Grid item width="80px">
          <Typography variant="h5" color="#CCCCCC" component="div" fontSize={25} fontWeight={100} 
          letterSpacing={10} fontFamily="Roboto" style={{transform: "rotate(-90deg)"}}>  2022 </Typography>
        </Grid>


        <Grid container direction="column" alignItems="center" xs={8}>
          
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <CircleOutlinedIcon color="secondary"/>
            
            <Typography color="#FFFFFF" fontSize= {100} fontFamily= "Manifesto" marginLeft={4} marginRight={4}> SURAFEL KINDU </Typography>
            
            <CircleOutlinedIcon color="secondary"/>
          </Grid>

          <ArrowDownwardIcon style={{fontSize: "30px", color: "#FFFFFFAA"}}/>
          <br />

          <Typography variant="h5" color="#FFD016CC" fontSize={28} fontWeight={100} letterSpacing={20} fontFamily="Roboto">  GRAPHICS DESIGNER </Typography>
          

        </Grid>


        <Grid container direction="column" width="80px">
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


    </Grid>
  );
}

export default App;
