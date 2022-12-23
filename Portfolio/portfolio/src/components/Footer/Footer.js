import React from "react";
import { Grid, Typography, Box } from '@mui/material'
import { Facebook, GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import IsResponsive from "../../assets/IsResponsive";

const Footer = () =>{

    const isMobile = IsResponsive('down', 'md');
    return(
        <>
        <Box style={{ backgroundColor:"rgb(50, 60, 79)", color:'white'  }}> 
            <Grid container item spacing={2} lg={10} md={10} sm={11} xs={11} style={{margin:'auto'}}> 
                <Grid item lg={6} md={6} sm={6} xs={12}>  
                    <Typography variant={isMobile  ? "h6" : "h5"} style={{ fontFamily:'Patua One' }}> Follow Us </Typography>
                    <Box > 
                        <Facebook style={{paddingRight:'1rem'}}  
                            onClick={()=> window.open("https://www.facebook.com/ritik.krish.56")} />
                        <Instagram style={{paddingRight:'1rem'}} 
                            onClick={()=> window.open("https://www.instagram.com/ritikkhanna__079/")} />
                        <LinkedIn style={{paddingRight:'1rem'}}
                            onClick={()=> window.open("https://www.linkedin.com/in/ritik-kumar-9a610421a/")} />
                        <GitHub style={{paddingRight:'1rem'}} 
                            onClick={()=> window.open("https://github.com/Ritik-Kumar-2002")} />
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Typography variant={isMobile  ? "h6" : "h5"} style={{ fontFamily:'Patua One' }}> Made By Ritik kumar </Typography> 
                </Grid>
            </Grid>
            </Box>
        </>
    )
}
export default Footer;