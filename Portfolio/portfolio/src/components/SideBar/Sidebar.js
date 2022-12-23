import React from 'react'
import { Drawer, Box, ListItemButton, ListItemText, ListItem, List, Typography } from '@mui/material';
import HeaderNavigate from '../Header/Navigations.js/headerNavigate';
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
    const { OpenDrawer, SetOpenDrawer } = props;
    const navigate = useNavigate();
    return (
        <>
            <Box>
                <Drawer PaperProps={{
                    sx: {
                        width: 240,
                    }
                }} anchor={'right'} open={OpenDrawer} onClose={() => SetOpenDrawer(false)}>
                    <List>
                        {HeaderNavigate.map((UserData) => (
                            <ListItem key={UserData.id} disablePadding style={{borderBottom:'1px solid lightgrey'}}>
                                <ListItemButton onClick={() => {
                                    navigate(UserData.url)
                                    SetOpenDrawer(false);
                                }}>
                                    <Typography variant="body1" style={{fontFamily: 'Patua One', textAlign:'center', margin:'auto', padding:'0.5rem'}}> {UserData.name} </Typography>
                                    {/* <ListItemText primary={UserData.name} 
                                        style={{ textAlign:'center',paddingTop:'1rem',
                                        fontSize:'1.2rem', fontFamily: 'Patua One', border:'2px solid orange'}} /> */}
                                </ListItemButton>
                            </ListItem>

                        ))}
                    </List>
                </Drawer>
            </Box>
        </>
    );
}
export default Sidebar;