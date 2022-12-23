import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const SkillSetComponents = (props) => {

    const { skill, percentage } = props;
    // console.log("skills is "+ skill+ " "+ percentage)
    return (
        <>
            <Box style={{
                width: '100%', boxSizing:'border-box' , borderRadius: '1rem 1rem 1rem 1rem'
                , padding: '0.5rem 0.5rem', border: '2px solid black',
                boxShadow: '5px 5px 1.5rem lightgrey', display: 'flex', alignItem: 'center'
            }}>
                <Grid container item lg={12} md={12} sm={12} xs={12} style={{display:'flex', alignItems:'center'}}>
                    <Grid item lg={4} md={4} sm={3} xs={4}>
                        <Typography variant="body1" style={{ padding: '0rem 0.5rem', fontWeight:'bold' }}> {skill} </Typography> 
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={6} style={{background:'lightgrey', height:'7px'}}>
                        <div style={{ width: percentage , backgroundColor:'green', height:'100%', 
                        }}></div>
                    </Grid>
                    <Grid item lg={1} md={1} sm={2} xs={2} >
                        <h3 style={{ padding: '0rem 0.5rem' }}> {percentage } </h3>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default SkillSetComponents; 