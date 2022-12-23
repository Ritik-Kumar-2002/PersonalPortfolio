import React from 'react';
import { Typography, Card, CardMedia, Grid, CardContent } from '@mui/material';
import IsResponsive from '../../assets/IsResponsive';

const CodingProfileCard = (props) => {
    let {url, image, title , totalQuestion} = props; 
    const isMobile = IsResponsive('down', 'md');

    return (
        <>
            <Grid item className="CardCover" 
                lg={3} md={3} sm={4} xs={10} style={{cursor:'pointer'}} 
                mt={isMobile ? 3 : 0}
                onClick={()=>  
                window.open(url, '_blank')}>
                <Card elevation={5} style={{ borderRadius: '1rem' }}>
                    <div style={{height:'200px', display:'flex', alignItems:'center', padding:'1rem'}}>
                    <CardMedia
                        component={'img'}
                        image= {image}
                        style={{objectFit:'cover', width:'100%'}}
                    ></CardMedia>
                    </div>
                    <CardContent style={{textAlign:'center', fontWeight:'bold'}}>
                        <Typography variant="body1" style={{fontWeight:'bold'}}> {title}</Typography>
                        <Typography variant="subtitle1"> {totalQuestion} Problems </Typography>
                    </CardContent>
                    
                </Card>
            </Grid>
        </>
    );
}
export default CodingProfileCard;