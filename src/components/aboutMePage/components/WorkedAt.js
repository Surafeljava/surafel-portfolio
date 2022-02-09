import React from 'react';
import {Grid, Typography, IconButton} from '@mui/material';
import { makeStyles } from "@mui/styles";

import LinkIcon from '@mui/icons-material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import colors from '../../../constants/colors';

import equb from '../../../assets/previous_works/equb.png';
import chapa from '../../../assets/previous_works/chapa.png';

const useStyles = makeStyles((theme) => ({
  titleText: {
    color: colors.white + 'DD',
    fontSize: "22px",
    letterSpacing: 2,
    fontWeight: 300
  },
  contentsTitle: {
    color: colors.white,
    fontSize: "20px",
    letterSpacing: 2,
    fontWeight: 400
  },
  content: {
    color: colors.white + "CC",
    fontSize: "17px",
    letterSpacing: 2,
    fontWeight: 200
  },
  contentDate: {
    color: colors.white + "77",
    fontSize: "15px",
    letterSpacing: 2,
    fontWeight: 200
  },
  icon: {
    fontSize: "28px", 
    color: colors.white,
    "&:hover": {
      color: colors.secondary
    },
    transition: "0.1s"
  }
}));

function WorkedAt() {
    const classes = useStyles();
  return (
      <Grid container direction="column" paddingTop={3} paddingBottom={3} style={{ backgroundColor: colors.primary }}>
        <Typography className={classes.titleText} fontFamily="Roboto" align='center'>  {"Previously Worked At".toUpperCase()} </Typography>
        <br />
        <br />
        <Grid container direction="row" justifyContent="center" >
            <Grid container direction="column" xs={3} alignItems="center">
                <Grid item marginBottom={1}>
                    <Grid item width="70px" height="70px" >
                        <img src={equb} alt="Equb logo" width="100%" />
                    </Grid>
                </Grid>
                <Typography className={classes.contentsTitle} fontFamily="Roboto" align='center'>  {"eQUB Financial Technologies"} </Typography>
                <Typography className={classes.content} fontFamily="Roboto" align='center'>  {"Senior Frontend Developer"} </Typography>
                <Typography className={classes.contentDate} fontFamily="Roboto" align='center'>  {"Mar, 2021 - Present"} </Typography>
                <Grid container direction="row" justifyContent="center">
                    <IconButton onClick={() => {
                        window.open("https://www.equb.app/");
                    }}>
                        <LinkIcon className={classes.icon}/>
                    </IconButton>
                    &nbsp;&nbsp;
                    <IconButton onClick={() => {
                        window.open("https://www.instagram.com/equbapp/");
                    }}>
                        <InstagramIcon className={classes.icon}/>
                    </IconButton>
                    &nbsp;&nbsp;
                    <IconButton onClick={() => {
                        window.open("https://www.linkedin.com/company/equb-app/");
                    }}>
                        <LinkedInIcon className={classes.icon}/>
                    </IconButton>
                </Grid>
            </Grid>

            <Grid container direction="column" xs={3} alignItems="center">
                <Grid item marginBottom={1}>
                    <Grid item width="90px" height="70px" >
                        <img src={chapa} alt="Chapa logo" width="100%" />
                    </Grid>
                </Grid>
                <Typography className={classes.contentsTitle} fontFamily="Roboto" align='center'>  {"Chapa Financial Technologies"} </Typography>
                <Typography className={classes.content} fontFamily="Roboto" align='center'>  {"Graphics and UI/UX Designer"} </Typography>
                <Typography className={classes.contentDate} fontFamily="Roboto" align='center'>  {"Nov, 2021 - Present"} </Typography>
                <Grid container direction="row" justifyContent="center">
                    <IconButton onClick={() => {
                        window.open("https://chapa.co/");
                    }}>
                        <LinkIcon className={classes.icon}/>
                    </IconButton>
                    &nbsp;&nbsp;
                    <IconButton onClick={() => {
                        window.open("https://www.instagram.com/chapa.et/");
                    }}>
                        <InstagramIcon className={classes.icon}/>
                    </IconButton>
                    &nbsp;&nbsp;
                    <IconButton onClick={() => {
                        window.open("https://www.linkedin.com/company/chapa-financial-technologies/mycompany/");
                    }}>
                        <LinkedInIcon className={classes.icon}/>
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
        <br />
      </Grid>
  );
}

export default WorkedAt;