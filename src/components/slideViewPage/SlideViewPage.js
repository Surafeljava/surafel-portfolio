import React from 'react';
import { Grid, Typography } from "@mui/material";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive';

import { makeStyles } from "@mui/styles";

import img1 from '../../assets/images/1.png';
import img2 from '../../assets/images/2.png';
import img3 from '../../assets/images/3.png';
import img4 from '../../assets/images/4.png';
import img5 from '../../assets/images/5.png';
import img6 from '../../assets/images/6.png';

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
    color: "#222222"
  }
}));


function SlideViewPage() {
    const classes = useStyles();
    
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    let carouselWidth = isMobile ? 350 : 600;
    let itemWidth = isMobile ? 170 : 200;

    let textSize = isMobile ? 30 : 40;

  return <Grid container direction="column" alignItems="center" paddingBottom={2}>
      <Typography className={classes.maintext} fontFamily= "Manifesto" marginLeft= {4} marginRight= {4} fontSize= {textSize} align='center'> ILLUSTRATIONS </Typography>
      <br />
      <Grid item xs={isMobile ? 12 : 8} >
          <Carousel width={carouselWidth} style={{borderRadius: 20}} autoPlay infiniteLoop showThumbs={false}>
                <div width={itemWidth}>
                    <img src={img1} alt="Slide img 1" width="100%" style={{borderRadius: 20}}/>
                </div>
                <div width={itemWidth}>
                    <img src={img2} alt="Slide img 2" width="100%" style={{borderRadius: 20}}/>
                </div>
                <div width={itemWidth}>
                    <img src={img3} alt="Slide img 3" width="100%" style={{borderRadius: 20}}/>
                </div>
                <div width={itemWidth}>
                    <img src={img4} alt="Slide img 4" width="100%" style={{borderRadius: 20}}/>
                </div>
                <div width={itemWidth}>
                    <img src={img5} alt="Slide img 5" width="100%" style={{borderRadius: 20}}/>
                </div>
                <div width={itemWidth}>
                    <img src={img6} alt="Slide img 6" width="100%" style={{borderRadius: 20}}/>
                </div>
            </Carousel>
      </Grid>
  </Grid>;
}

export default SlideViewPage;
