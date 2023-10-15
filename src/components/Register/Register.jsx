import React, { useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Register() {


    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setapiError] = useState("");
    let navigate = useNavigate()

    // Calling the api to register
    async function register(values) {
        setapiError("");
        setIsLoading(true)
        console.log("heelp", values);
        let { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values).catch((error) => {
            setapiError(error.response.data.message);
            setIsLoading(false);
        }
        )
        console.log(data);
        if (data.message === "success") {
            setIsLoading(false);
            navigate("/login")
        }
    }

    // Inputs validatation
    const validate = values => {
        const errors = {};

        //? name 
        if (!values.name) {
            errors.name = 'Required.';
        } else if (values.name.length < 3) {
            errors.name = 'UserName should ne at least 3 characters.';
        }

        //? Email Validation 
        if (!values.email) {
            errors.email = 'Required.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address.';
        }

        // Password 
        if (!values.password) {
            errors.password = 'Required.';
        } else if (!/^.{8,}$/i.test(values.password)) {
            errors.password = 'Password should be at least 8 characters.';
        }

        // Re-Password 
        if (!values.rePassword) {
            errors.rePassword = 'Required';
        } else if (values.rePassword !== values.password) {
            errors.rePassword = 'password doesn\'t match';
        }

        // Phone
        if (!values.phone) {
            errors.phone = 'Required';
        } else if (!/^(010|011|012|015)\d{8}$/i.test(values.phone)) {
            errors.phone = 'Invalid Phone Number';
        }

        return errors;
    };

    // Form default
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: ""
        },
        onSubmit: values => register(values),
        validate
    })

    return (
        <div className="container w-50 p-3">
            <h3>REGISTER</h3>
            {apiError ? <div className='alert alert-danger' >{apiError}</div> : ""}
            <form onSubmit={formik.handleSubmit} >
                <div className="my-4">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label fw-light">name <span className="text-danger">*</span></label>
                        <input className="form-control" id="exampleFormControlInput1" type="text" name='name' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput2" className="form-label fw-light">Email address <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" id="exampleFormControlInput2" name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput3" className="form-label fw-light">Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" id="exampleFormControlInput3" name='password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput4" className="form-label fw-light">Re-Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" id="exampleFormControlInput4" name='rePassword' onChange={formik.handleChange} value={formik.values.rePassword} onBlur={formik.handleBlur} />
                        {formik.touched.rePassword && formik.errors.rePassword ? <div>{formik.errors.rePassword}</div> : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput5" className="form-label fw-light">Phone <span className="text-danger">*</span></label>
                        <input type="tel" className="form-control" id="exampleFormControlInput5" name='phone' onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} />
                        {formik.touched.phone && formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
                    </div>
                    {isLoading ? <button className='btn btn-primary' type='submit' ><i className='fa fa-spin fa-spinner' ></i></button>
                        : <button className='btn btn-primary' type='submit' >Register</button>}
                </div>
            </form>
        </div>
    )
}
