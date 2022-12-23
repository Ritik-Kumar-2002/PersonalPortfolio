import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import ContactDetailCard from "./ContactDetailCard";
import { useNavigate } from "react-router-dom";
import "./ContactStyle.css";
import IsResponsive from "../../assets/IsResponsive";
import CommonComponent from "../CommonComponents/Common";

const ContactUs = () => {

    const navigate = useNavigate();
    const isMobile = IsResponsive('down', 'md');

    return (
        <>
            <Box style={{ width: '100%' }} className="box">
                <CommonComponent heading={"Contact Us"} Subhead={"Contact Us"} />
             
                <Grid container item lg={8} md={8} sm={12} xs={12} style={{
                    fontWeight: 'bold',
                    margin: 'auto', textAlign: 'center'
                }}>
                    <Grid item >
                        <Typography variant="body1" style={{ textAlign: 'center', fontSize: '1.2rem', fontFamily: 'Patua One' }} mt={5} mb={5}> Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects. </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={isMobile ? 0 : 2} item lg={11} md={12} sm={12} xs={12} style={{ margin: 'auto' }}>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <ContactDetailCard Text={"Phone"} data={"+91 9389456691"} info={"Promising development turmoil inclusive education transformative community"} />
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <ContactDetailCard Text={"Email"} data={"ritikkhanna079@gmail.com"} info="Promising development turmoil inclusive education transformative community" />
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <ContactDetailCard Text={"Location"} data={"View On Google Map"} info={"Gummat Thakt Pahalwan Deori Road Agra, UP India"} />
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}
export default ContactUs;