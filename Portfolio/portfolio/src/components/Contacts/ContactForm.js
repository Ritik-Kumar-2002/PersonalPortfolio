import { DialogTitle, Dialog, Button, Typography, Grid, TextField } from '@mui/material';
import { useFormik, Formik, Form } from 'formik';
import React, { useRef  } from 'react';
import ContactUsSchema from '../../Schemas/ContactUsSchema';
import emailjs from 'emailjs-com';

const ContactForm = (props) => {
    
    const form = useRef();
    let { openDialog, SetOpenDialog } = props;
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        },
        validationSchema: ContactUsSchema,
        onSubmit: (data) => {
            
            SetOpenDialog(false);
            sendEmail(data);
            formik.resetForm();
            data.preventDefault();
        }

    });

    const sendEmail = (e) => {
        console.log("call successfully done ", e);
        e.preventDefault();
    
        emailjs.sendForm('service_97u8tdh', 'service_97u8tdh', form.current, 'dn_q5Tdf6PbY3hAaY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <>
            <Dialog open={openDialog} onClose={() => SetOpenDialog(false)}>
                <Formik>
                    <form onSubmit={formik.handleSubmit } ref={form} >
                        <Grid p={2} spacing={2} container item lg={12} sm={12} md={12} xs={12}>
                            <DialogTitle style={{ margin:'auto'}}>
                                <Typography variant="h4" style={{ fontFamily: 'Patua One'}}> Contact Us </Typography>
                            </DialogTitle>
                            <Grid item spacing={1} container lg={12} sm={12} md={12} xs={12}>
                                <Grid item lg={6} sm={6} md={6} xs={12}>
                                    <TextField
                                        required label="FirstName"
                                        type="text"
                                        placeholder='Enter Your First Name'
                                        name='firstName'
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                        fullWidth />
                                        <div style={{color:'red'}}> {formik.errors.firstName != null ? formik.errors.firstName : ""} </div>
                                </Grid>
                                <Grid item lg={6} sm={6} md={6} xs={12}>
                                    <TextField
                                        required label="LastName"
                                        type="text"
                                        name='lastName'
                                        placeholder='Enter Your Last Name'
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName}
                                        fullWidth />
                                        <div style={{color:'red'}}> {formik.errors.lastName != null ? formik.errors.lastName : ""} </div>
                                </Grid>

                            </Grid>
                            <Grid item lg={12} sm={12} md={12} xs={12}>
                                <TextField
                                    required label="Email"
                                    type="text"
                                    name='email'
                                    placeholder='Enter Your Email'
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    fullWidth />
                                    <div style={{color:'red'}}> {formik.errors.email != null ? formik.errors.email : ""} </div>
                            </Grid>
                            <Grid item lg={12} sm={12} md={12} xs={12}>
                                <TextField
                                    required label="Message"
                                    type="text"
                                    name='message'
                                    multiline
                                    minRows={4}
                                    placeholder='Enter Your Message'
                                    onChange={formik.handleChange}
                                    value={formik.values.message}
                                    fullWidth />
                                    <div style={{color:'red'}}> {formik.errors.message != null ? formik.errors.message : ""} </div>
                            </Grid>
                            <Grid item lg={12} sm={12} md={12} xs={12}>
                                <Button variant="contained" type="submit" > Submit </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Formik>
            </Dialog>
        </>
    );
}
export default ContactForm;