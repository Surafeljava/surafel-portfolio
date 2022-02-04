import React from 'react';
import {Grid} from "@mui/material";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/images/1.png';
import img2 from '../../../assets/images/2.png';
import img3 from '../../../assets/images/3.png';
import img4 from '../../../assets/images/4.png';
import img5 from '../../../assets/images/5.png';
import img6 from '../../../assets/images/6.png';

function SlideView() {
  return <Grid container direction="column">
      <Grid item xs={8}>
          <Carousel>
                <div width="200px">
                    <img src={img1} alt="Slide img 1" width="100%" style={{borderRadius: 20}}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div width="200px">
                    <img src={img2} alt="Slide img 2" width="100%" style={{borderRadius: 20}}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div width="200px">
                    <img src={img3} alt="Slide img 3" width="100%" style={{borderRadius: 20}}/>
                    <p className="legend">Legend 3</p>
                </div>
                <div width="200px">
                    <img src={img4} alt="Slide img 4" width="100%" style={{borderRadius: 20}}/>
                    <p className="legend">Legend 4</p>
                </div>
                <div width="200px">
                    <img src={img5} alt="Slide img 5" width="100%" style={{borderRadius: 20}}/>
                    <p className="legend">Legend 5</p>
                </div>
                <div width="200px">
                    <img src={img6} alt="Slide img 6" width="100%" style={{borderRadius: 20}}/>
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
      </Grid>
  </Grid>;
}

export default SlideView;
