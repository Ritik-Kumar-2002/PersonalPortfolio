import { Typography, Grid} from "@mui/material";
import React from "react";
import HeaderNavigate from './headerNavigate';
import {useNavigate} from 'react-router-dom'

const Navigation = () =>{

    const navigate = useNavigate();
    return(
        <>
            <Grid item lg={12} sm={12} md={12} xs={12} style={{display:'flex', justifyContent:'center', alignItems:'center'}}> 
            {
                HeaderNavigate.map((data)=> {
                    return(
                        <Grid item key={data.id} style={{paddingRight:'1rem'}}
                           >
                            <Typography style={{cursor:'pointer', fontWeight:'bold'}}
                                onClick={()=> navigate(data.url)}
                                >{ data.name }</Typography>
                        </Grid >
                    )
                })
            }
            </Grid>
        </>
    )
}
export default Navigation;