import React from 'react';
import { Grid, Typography } from '@mui/material';
import "./AboutUsStyle.css";
const EducationDetail = (props) => {
    return (
        <>
            {/* <h1> Educational Detail </h1> */}
            <Grid marginTop={2} >
                <Typography 
                    variant="h5" 
                    className="MainHeading" 
                    style={{fontFamily:'Patua One' }}> {props.Degree}</Typography>
                <Typography 
                    variant="subHeading1" 
                    className="subHeading1"
                    style={{fontFamily:'Acme', fontWeight:'bold' }}> {props.College} </Typography>
                <Typography 
                    variant='body1' 
                    className="subheading2"
                    style={{ fontFamily:'Patua One'}}>{props.Stream}</Typography>
                <Typography></Typography>
            </Grid>
        </>
    )
}
export default EducationDetail;