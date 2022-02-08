import React from 'react';
import {Grid, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import colors from '../../constants/colors';

function Footer() {
  const navigate = useNavigate ();
  return <Grid container direction="row" justifyContent="space-evenly" padding={10} style={{ backgroundColor: colors.primary }}>
    <Button variant='text' color='secondary' onClick={()=>{
            navigate('/admin');
        }}>
            Admin
        </Button>
  </Grid>;
}

export default Footer;
