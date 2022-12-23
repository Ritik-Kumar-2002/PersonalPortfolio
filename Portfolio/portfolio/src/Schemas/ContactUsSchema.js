import * as Yup from 'yup';

const ContactUsSchema = Yup.object({
    firstName: Yup.string()
        .required('required')
        .min(5, "too short ")
        .max(50, "too long"),
    lastName: Yup.string()
        .required('required')
        .min(5, "too short ")
        .max(50, "too long"),
    email: Yup.string()
        .required('required')
        .email("Invalid Email"),
    message: Yup.string()
        .required("requied")
        .max(800, "too long")
        .min(5, 'too short')
})

export default ContactUsSchema;