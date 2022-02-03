import { Grid, CssBaseline, Button, IconButton, Typography } from '@mui/material';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';

import './app.css';

function App() {
  return (
    <Grid container direction="column" width="100%" height="100vh" style={{backgroundColor: "#040710"}} justifyContent="center">
      <CssBaseline/>
      <Grid container direction="row" justifyContent="center">
        <Button style={{color:"#FFFFFF"}} variant="text">
          <div className="font-face-gm">
            <h3>
              MY WORKS
            </h3>
          </div>
        </Button>

        &nbsp;&nbsp;&nbsp;

        <IconButton>
          <KeyboardCommandKeyIcon color="secondary"/>
        </IconButton>

        &nbsp;&nbsp;&nbsp;

        <Button style={{color:"#FFFFFF"}} variant="text" className="font-face-gm">
          <div className="font-face-gm">
            <h3>
              CONTACT
            </h3>
          </div>
        </Button>
      </Grid>
      <Grid container direction="row" flexGrow={1} alignItems="center" justifyContent="center">
        <Grid item xs={2}>
          <h3 style={{color:"#FFFFFF"}}> Year </h3>
        </Grid>
        <Grid item xs={8}>
          <div className="font-face-gm">
            <Typography  className="font-face-gm" style={{color:"#FFFFFF", fontSize: "100px"}}> SURAFEL KINDU </Typography>
          </div>
        </Grid>
        <Grid item xs={2}>
          <h3 style={{color:"#FFFFFF"}}> Socials </h3>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
