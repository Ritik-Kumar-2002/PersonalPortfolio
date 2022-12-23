import React from 'react'
import { Grid, Typography, Box } from '@mui/material';
import './AboutUsStyle.css';
import { useNavigate } from 'react-router-dom';
import EducationDetail from './EducationDetail';
import WorkExperienceDetail from './workExperienceDetail';
import SkillSetComponents from './SkillsSetComponents';
import IsResponsive from '../../assets/IsResponsive';
import CommonComponent from '../CommonComponents/Common';


const AboutUs = () => {

    const isMobile = IsResponsive('down', 'md');
    return (
        <>
            <Box style={{ background: 'whiteSmoke', minHeight: '100vh' }}>
                <CommonComponent heading={"About Us"} Subhead={"About Us"}/>
                
                <Grid container item lg={10} md={0} sm={11} xs={12} style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ margin: '1rem' }} >
                        <Typography variant={ isMobile ? "h4" : "h3"} style={{ fontFamily: 'Patua One', fontWeight: 'bold' }}> EDUCATION </Typography>
                    </div>
                    <div style={{ margin: '1rem' }}>
                        <Typography variant={ isMobile ? "h4" : "h3"} style={{ fontFamily: 'Patua One', fontWeight: 'bold' }}> EXPERIENCE </Typography>
                    </div>
                </Grid>

                {/* --------------------|| EDUCATION DETAIL || ---------------------- */}

                <Grid container item lg={10} md={10} sm={10} xs={12}>
                    <Grid item lg={10} md={10} sm={10} xs={11} style={{ margin: 'auto' }}>
                        <Typography variant="h4" style={{ fontFamily: 'Acme', fontWeight: 'bold' }}> EDUCATION </Typography>
                    </Grid>
                    <Grid item lg={10} md={10} sm={10} xs={11} style={{ margin: 'auto' }}>
                        <EducationDetail
                            Degree={"Bachelor Of Technology"}
                            College={"Dayalbagh Educational Institute Deemed University Agra, UP"}
                            Stream={"Footwear Engineering With CS Specialization"} />
                    </Grid>
                    <Grid item lg={10} md={10} sm={10} xs={11} style={{ margin: 'auto' }}>
                        <EducationDetail
                            Degree={"Intermediate"}
                            College={"St. Queen Mary's Public School Agra, UP"}
                            Stream={"Science Stream"} />
                    </Grid>
                    <Grid item lg={10} md={10} sm={10} xs={11} style={{ margin: 'auto' }}>
                        <EducationDetail
                            Degree={"High School"}
                            College={"Shanti Niketan Public School Agra, UP"}
                            Stream={""} />
                    </Grid>
                </Grid>

                {/* -------------------|| EXPERIENCE DETAIL  ||------------------- */}

                <Grid container item lg={10} md={10} sm={10} xs={12} mt={5}>
                    <Grid item lg={10} md={10} sm={10} xs={11} style={{ margin: 'auto' }}>
                        <Typography variant="h4" style={{ fontFamily: 'Acme', fontWeight: 'bold' }}> EXPERIENCE </Typography>
                    </Grid>
                    <Grid item lg={10} md={10} sm={10} xs={11} style={{ margin: 'auto' }}>
                        <WorkExperienceDetail
                            Profile={"Software Developer Intern"}
                            Company={"ATF Labs Pvt. Ltd.  Agra, UP"}
                            Description={" Working on React JS, material UI, Node js, Express JS. Work on REACT REDUX, REACT HOOKS, AXIOS, JSON, FORMIK ,OBJECT AND REST FULL API. Closely worked with a development team on a Dubai based client project "} />
                    </Grid>
                    <Grid item lg={10} md={10} sm={10} xs={11} style={{ margin: 'auto' }}>
                        <WorkExperienceDetail
                            Profile={"Web Developer Intern"}
                            Company={"Karo StartUp"}
                            Description={"Worked on React Js and material UI. Design a KARO START UP website. Worked on front part of the website"} />
                    </Grid>
                    <Grid item lg={10} md={10} sm={10} xs={11} style={{ margin: 'auto' }}>
                        <WorkExperienceDetail
                            Profile={"Web Developer Intern"}
                            Company={"Lets Grow More"}
                            Description={"Create a static website(clone of the Lets grow more). website using a HTML, CSS and JAVASCRIPT. Fetching Data on Random User API On React Js"} />
                    </Grid>
                </Grid>

                {/* ------------------ || SKILLS || --------------------- */}

                <Grid container item  pt={5} lg={10} md={10} sm={10} xs={11} style={{ margin: 'auto' }}>
                    <Grid item lg={10} md={10} sm={10} xs={11}>
                        <Typography variant="h4" style={{ fontFamily: 'Acme', fontWeight: 'bold' }}> SKILLS </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={isMobile ? 0: 1} item lg={10} md={10} sm={10} xs={11} style={{ margin: 'auto' }}>
                    <Grid item lg={6} md={6} sm={10} xs={12} pt={1} style={{ margin: 'auto' }}>
                        <SkillSetComponents skill={"JAVA"} percentage={"90%"} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={10} xs={12} pt={1} style={{ margin: 'auto' }}>
                        <SkillSetComponents skill={"C Language"} percentage={"70%"} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={10} xs={12} pt={1}  style={{ margin: 'auto' }}>
                        <SkillSetComponents skill={"Material UI"} percentage={"85%"} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={10} xs={12} pt={1}  style={{ margin: 'auto' }}>
                        <SkillSetComponents skill={"Data Structure And Algorithm"} percentage={"85%"} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={10} xs={12} pt={1}  style={{ margin: 'auto' }}>
                        <SkillSetComponents skill={"HTML"} percentage={"75%"} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={10} xs={12} pt={1}  style={{ margin: 'auto' }}>
                        <SkillSetComponents skill={"CSS"} percentage={"75%"} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={10} xs={12} pt={1}  style={{ margin: 'auto' }}>
                        <SkillSetComponents skill={"JAVA SCRIPT"} percentage={"75%"} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={10} xs={12} pt={1}  style={{ margin: 'auto' }}>
                        <SkillSetComponents skill={"REACT JS"} percentage={"70%"} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={10} xs={12} pt={1}  style={{ margin: 'auto' }}>
                        <SkillSetComponents skill={"NODE JS"} percentage={"60%"} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={10} xs={12} pt={1}  style={{ margin: 'auto' }}>
                        <SkillSetComponents skill={"EXPRESS JS"} percentage={"55%"} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={10} xs={12} pt={1}  style={{ margin: 'auto' }}>
                        <SkillSetComponents skill={"MONGO DB"} percentage={"50%"} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={10} xs={12} pt={1} pb={2} style={{ margin: 'auto' }}>
                        <SkillSetComponents skill={"PYTHON"} percentage={"60%"} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default AboutUs;