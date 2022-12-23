import React from 'react'
import { Grid, Typography, Box, Button, Paper } from '@mui/material';
import "./HomeStyle.css";
import IsResponsive from '../../assets/IsResponsive';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

    const isMobile = IsResponsive('down', 'md');
    return (
        <>
            <Grid container item lg={12} sm={12} md={12} xs={12} className="HomeWrapper">
                <Grid item lg={6} sm={8} md={6} xs={12} style={{ margin: 'auto' }} className="IntroBox" >
                    <div style={{ width: '80%', height: '80vh', margin: 'auto', opacity: '0.8' }}>
                        {isMobile ?
                            <div className="Mobileprofile"></div>
                            :
                            <div className="profile"> </div>}

                        <div style={{ textAlign: 'center' }}>
                            <Typography variant="h4" mt={2} style={{ fontFamily: 'Patua One' }} > Here' I am Ritik Kumar </Typography>
                            <Typography variant="h5" mt={2} style={{ color: 'rgb(35, 35, 186)', fontFamily: 'Patua One' }} >
                                <TypeAnimation
                                    sequence={[
                                        'I Am Passionate Web Developer', // Types 'One'
                                        1000, // Waits 1s
                                        'I Am a Software Developer', // Deletes 'One' and types 'Two'
                                        2000, // Waits 2s
                                        'I Am a Footwear Engineer', // Types 'Three' without deleting 'Two'
                                        1000,
                                        
                                    ]}
                                    // wrapper="div"
                                    cursor={true}
                                    repeat={Infinity}
                                />
                                 </Typography>
                        </div>
                        <Grid container item lg={12} md={12} sm={12} xs={12} >
                            <Grid item lg={7} md={7} sm={7} xs={12} style={{ margin: 'auto' }}>
                                <Button
                                    variant="contained" style={{ margin: "0.5rem" }}> Hire Me </Button>
                                <Button
                                    variant="contained" style={{ margin: "0.5rem" }}
                                    onClick={() => {
                                        console.log("run")
                                        fetch('Ritikkumar_9389456691.pdf').then(response => {
                                            response.blob().then(blob => {
                                                // Creating new object of PDF file
                                                const fileURL = window.URL.createObjectURL(blob);
                                                // Setting various property values
                                                let alink = document.createElement('a');
                                                alink.href = fileURL;
                                                console.log("a link is " + alink.href);
                                                alink.download = 'Ritikkumar_9389456691.pdf';
                                                alink.click();
                                            })
                                        })
                                    }} > Download CV </Button>
                            </Grid>
                        </Grid>
                    </div>

                </Grid>

                <Grid item lg={11} sm={11} md={11} xs={11} style={{ margin: 'auto' }}>
                    <Paper elevation={5} style={{ borderRadius: '1rem', padding: '1rem', marginBottom:'1rem' }}>
                        <Grid container spacing={2} item lg={12} md={12} xs={12} sm={12}
                            style={{ padding: '1rem' }}>
                            <Grid item lg={3} sm={3} md={3} xs={12} style={{ background: 'rgb(243, 242, 242)', padding: '1rem', borderRadius: '1rem' }}>
                                <Typography style={{ fontWeight: "bold" }} variant="subtitle1" fontFamily='Patua One'> Personal Details</Typography>
                                <div> --------------------------------------------</div>
                                <Typography fontFamily='Acme' variant="body2"> Email: ritikkhanna079@gmail.com</Typography>
                                <Typography fontFamily='Acme' variant="body2"> Languages: Hindi, English</Typography>
                                <Typography fontFamily='Acme' variant="body2"> Nationality: Indian</Typography>
                            </Grid>
                            <Grid item lg={9} sm={9} md={9} xs={12}>
                                <Typography variant="subtitle1" fontFamily='Patua One'> Final Year Engineering Student</Typography>
                                <Typography variant="body2" fontFamily='Acme'>
                                    Obviously I'm a Student of Dayalbagh Educational Institute Persuing BTech in Footwear Engineering with Computer Science Specialization. Over a 5 Month Web Development Experience. Experienced in Problem Solving. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.
                                </Typography>

                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
        </>
    )
}
export default Home;