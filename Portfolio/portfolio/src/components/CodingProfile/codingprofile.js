import { Typography, Grid, Box } from '@mui/material';
import React from 'react';
import CodingProfileCard from './CodingProfileCard';
import Images from './CardDetail';
import { useNavigate } from 'react-router-dom';
import IsResponsive from '../../assets/IsResponsive';
import CommonComponent from '../CommonComponents/Common';

const CodingProfile = () => {

    const isMobile = IsResponsive('down', 'md');
    return (
        <>

            <Box style={{ background: 'whiteSmoke', minHeight:'100vh' }}>
                <CommonComponent heading={"Coding Profiles"} Subhead={"Coding Profiles"} />

                <Grid container spacing={isMobile ? 0 : 2}  item lg={11} md={12} sm={12} xs={12} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
                    {
                        Images.map((ProfileDetail) => {
                            return (
                                <>
                                    <CodingProfileCard url={ProfileDetail.url} image={ProfileDetail.image} title={ProfileDetail.title} totalQuestion={ProfileDetail.totalQuestion} />
                                </>
                            );
                        })
                    }
                </Grid>

            </Box>

        </>
    );
}
export default CodingProfile;