import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CodingProfileCard from "../CodingProfile/CodingProfileCard";
import Images from "./ProjectComponents/ProjectCardDetail";
import IsResponsive from "../../assets/IsResponsive";
import CommonComponent from "../CommonComponents/Common";


const Project = () => {

    const navigate = useNavigate();
    const isMobile = IsResponsive('down', 'md');
    return (
        <>
            <Box style={{ backgroundColor: 'whiteSmoke', minHeight: '100vh' }}>
                <CommonComponent heading={"Projects"} Subhead={"Projects"} />
                <Grid container spacing = {isMobile ? 0 : 2 } item lg={11} md={12} sm={12} xs={12} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', margin: 'auto', paddingBottom:'2rem' }}>
                    {
                        Images.map((ProfileDetail) => {
                            // console.log("profile detail is ", ProfileDetail);
                            return (
                                <>
                                    <CodingProfileCard url={ProfileDetail.url} image={ProfileDetail.image} title={ProfileDetail.title} totalQuestion={ProfileDetail.totalQuestion}  />
                                </>
                            );
                        })
                    }
                </Grid>

            </Box>
        </>
    )
}
export default Project;