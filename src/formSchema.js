// Here goes the schema for the form
import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be 3 characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .min(7, 'Password must be 7 characters long'),    
    terms: yup.boolean(),
})

export default formSchema