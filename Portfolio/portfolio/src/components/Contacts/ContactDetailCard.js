import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Email, Call, AddLocation } from '@mui/icons-material';
import "./ContactStyle.css";
import ContactForm from './ContactForm';
import Location from './Locations';


const ContactDetailCard = (props) => {

    const [openDialog, SetOpenDialog] = useState(false);
    const [openMap, SetOpenMap] = useState(false);
    let { Text, data, info } = props;

    return (
        <>
            <Box
            >
                <div style={{ margin: 'auto', width: "20%" }}>
                    {Text === "Phone" ?
                        <Call className='Icons' /> :
                        Text === "Email" ?
                            <Email className='Icons' onClick={() => SetOpenDialog(true)} /> :
                        Text === "Location" ?
                            <AddLocation className='Icons' onClick={() => SetOpenMap(true)} /> : null}
                </div>
                <Typography variant="body1" className="ContactDetail" style={{fontFamily: 'Patua One'}}
                > {info} </Typography>
                <Typography variant="body1" className="ContactDetail" style={{ fontFamily: 'Patua One'}}> {Text} </Typography>
                <Typography variant="body1" className="ContactLinks" style={{ fontFamily: 'Patua One' }} onClick={() =>  {
                    if(data === "View On Google Map") SetOpenMap(true)
                } }> {data} </Typography>
                <ContactForm openDialog={openDialog} SetOpenDialog={SetOpenDialog} />
                <Location openMap={openMap} SetOpenMap={SetOpenMap} />
            </Box>

        </>);
}
export default ContactDetailCard;