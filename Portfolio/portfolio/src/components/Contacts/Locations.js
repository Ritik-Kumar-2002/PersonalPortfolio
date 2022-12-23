import React from 'react';
import { Dialog, Grid } from '@mui/material';
import IsResponsive from '../../assets/IsResponsive';

const Location = (props) => {

    const isMobile = IsResponsive('down', 'md');
    let { openMap, SetOpenMap } = props;
    return (
        <>
            <Dialog open={openMap} onClose={() => SetOpenMap(false)}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.668396019054!2d78.00454276505103!3d27.198157183005474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477465100b67b%3A0x419aecf550944f42!2sMadhu%20Nagar%2C%20Agra%2C%20Uttar%20Pradesh%20282002!5e0!3m2!1sen!2sin!4v1641560450710!5m2!1sen!2sin"
                          width={isMobile ? "250px" : "600px"} height={isMobile ? "250px" : "500px"} loading="lazy"></iframe>
                </Grid>
            </Dialog>
        </>
    );
}
export default Location;