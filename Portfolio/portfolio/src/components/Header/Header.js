import React from "react";
import Navigation from "./Navigations.js/Navigation";
import { Grid, Box } from "@mui/material";
import { Menu, Facebook, Instagram } from '@mui/icons-material';
import IsResponsive from "../../assets/IsResponsive";
import Sidebar from "../SideBar/Sidebar";
import { useState } from "react";

const Header = () => {

    const isMobile = IsResponsive('down', 'md');
    const [OpenDrawer, SetOpenDrawer] = useState(false);
    
    return (
        <>
            <Sidebar OpenDrawer={OpenDrawer} SetOpenDrawer={SetOpenDrawer}/>
            <Grid container item lg={12} sm={12} md={12} xs={12}
                style={{
                    margin: 'auto', padding: '1rem', background: 'rgb(50, 60, 79)',
                    color: 'white', display: 'flex', alignItems: 'center'
                }}>
                <Grid item lg={4} md={4} sm={7} xs={7}>
                {!isMobile ?  
                    <img src="https://htmldemo.net/lendex/lendex/assets/images/logo/logo.png" alt="loading..." style={{ width: '40%', objectFit: 'cover' }} />
                :  <img src="https://htmldemo.net/lendex/lendex/assets/images/logo/logo.png" alt="loading..." style={{ width: '80%', objectFit: 'cover' }} />
                }
                </Grid>
                <Grid item container lg={7} md={7} sm={1} xs={2}>
                    {!isMobile ? <Navigation />: <Menu  onClick={()=> SetOpenDrawer(true) } />}
                </Grid>
                <Grid item lg={1} md={1} sm={3} xs={3} style={{ cursor: 'pointer'}}>
                    {/* <Menu /> */}
                    <Facebook style={{ paddingRight: '0.5rem' }} onClick={()=> window.open("https://www.facebook.com/ritik.krish.56")}/>
                    <Instagram onClick={()=> window.open("https://www.instagram.com/ritikkhanna__079/")}/>
                </Grid>
            </Grid>
        </>
    )
}
export default Header;