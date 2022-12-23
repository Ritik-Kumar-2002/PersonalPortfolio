import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import IsResponsive from '../../assets/IsResponsive';

const CommonComponent = (props) =>{

    const isMobile = IsResponsive('down', 'md');
    let {heading, Subhead} =props;
    const navigate = useNavigate();
    return(
        <>
            <Box p={2}>
                    <Typography variant={ isMobile ? "h4" : "h3"}
                        style={{
                            fontWeight: 'bold', textAlign: 'center',
                            fontFamily: 'Patua One', padding: '2rem 0rem 1rem 0rem'
                        }}> {heading} </Typography>
                    <Grid container item lg={8} md={8} sm={12} xs={12}
                        style={{
                            fontWeight: 'bold',
                            margin: 'auto', textAlign: 'center'
                        }}>
                        <Grid item className="LinkWrap"
                            style={{ margin: 'auto',fontFamily:"Acme" }}
                        >
                            <div style={{ paddingRight: '0.5rem', cursor: 'pointer' }}
                                onClick={() => navigate("/")}> Home </div><div> || </div>
                            <div style={{ paddingLeft: '0.5rem', cursor: 'pointer' }}> {Subhead} </div>
                        </Grid>
                    </Grid>

                </Box>
        </>
    );
}   
export default CommonComponent;