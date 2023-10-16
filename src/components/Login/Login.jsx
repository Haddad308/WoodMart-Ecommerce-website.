import React, { useContext, useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { tokenContext } from '../../context/tokenContext';


export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setapiError] = useState("");
    let navigate = useNavigate()
    let { setToken } = useContext(tokenContext);

    // Calling the api to register
    async function login(values) {
        setapiError("");
        setIsLoading(true)
        let { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values).catch((error) => {
            setapiError(error.response.data.message);
            setIsLoading(false);
        }
        )
        if (data.message === "success") {
            setIsLoading(false);
            localStorage.setItem("userName", data.user.name.split(" ")[0])
            localStorage.setItem("userToken", data.token)
            setToken(data.token);
            navigate("/")
        }
    }

    // Inputs validatation
    const validate = values => {
        const errors = {};

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

        return errors;
    };

    // Form default
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: values => login(values),
        validate
    })

    return (
        <div className="container w-50 p-3">
            <h3>Login</h3>
            {apiError ? <div className='alert alert-danger' >{apiError}</div> : ""}
            <form onSubmit={formik.handleSubmit} >
                <div className="my-4">

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


                    {isLoading ? <button className='btn btn-primary' type='submit' ><i className='fa fa-spin fa-spinner' ></i></button>
                        : <button disabled={!(formik.isValid && formik.dirty)} className='btn btn-primary' type='submit' >Login</button>}
                </div>
            </form>
        </div>
    )
}
