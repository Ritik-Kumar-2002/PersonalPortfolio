import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./ResumeStyle.css";
import CommonComponent from "../CommonComponents/Common";

const Resume = () => {
    return (
        <>
            <Box style={{minHeight:'80vh', background:'whiteSmoke'}}>
                <Box p={2}>
                    <CommonComponent heading={"Resume"} Subhead={"Resume"} />

                    <Typography variant="body1" fontFamily={"Patua One"} style={{textAlign:'center',  paddingTop:'1rem'}}> Click ! Here to Download My CV </Typography>
                    <Grid container item lg={8} md={8} sm={12} xs={12} style={{margin:'auto',  paddingTop:'1rem'}}>
                        <Grid item className="ResumeStyle" 
                            style={{ margin: 'auto',fontWeight: 'bold', fontFamily: "Patua One",fontSize:'1.2rem' }}
                        >
                            
                            {/* ---------------- || THIS IS HERE TO DOWNLOAD THE PDF OF THE RESUME || ---------------- */}

                            <div className="" style={{ paddingRight: '0.5rem', cursor: 'pointer' }}
                            onClick={()=> { 
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
                            }}    >  DownLoad CV  </div>
                            
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
export default Resume;