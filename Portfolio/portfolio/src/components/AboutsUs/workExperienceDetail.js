import React from 'react';
import { Grid, Typography } from '@mui/material';
import "./AboutUsStyle.css";
const WorkExperienceDetail = (props) => {
    return (
        <>
            {/* <h1> Educational Detail </h1> */}
            <Grid marginTop={2} >
                <Typography 
                    variant="h5" 
                    className="MainHeading" 
                    style={{fontFamily:'Patua One'}}> {props.Profile}</Typography>
                <Typography 
                    variant="subHeading1" 
                    className="subHeading1"
                    style={{ fontWeight:'bold', fontFamily:'Acme'}}> {props.Company} </Typography>
                <Typography 
                    variant='body2' 
                    className="subheading2"
                    style={{  fontFamily:'Patua One'}}>{props.Description}</Typography>
                <Typography></Typography>
            </Grid>
        </>
    )
}
export default WorkExperienceDetail;