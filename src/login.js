import React, { useState } from 'react'
import { Input, Form, Button } from "antd";


import './App.scss'
import useFormvalidations from './useFormvalidations';
import Validatelogin from './Validatelogin';


const INTIAL_STATE = {
    name: "",
    email: "",
    password: ""

};


function Login(props) {
    const [login, setLogin] = useState(true);
    const {
        handleSubmit,
        handleBlur,
        handleChange,
        values,
        errors,
        isSubmitting
    } = useFormvalidations(INTIAL_STATE, Validatelogin);




    return (

        <>

            <div id="outer">

                <form onSubmit={handleSubmit} >

                    <h2>{login ? "Login" : "Create Account"}</h2>
                    {!login && <Input
                        name="name"
                        type="text"
                        placeholder="your  name"
                        autoComplete="off"
                        onChange={handleChange}
                        value={values.name}
                    />
                    }
                    <Input
                        type="email"
                        name="email"
                        placeholder="your  email"
                        autoComplete="off"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                    <Input
                        onChange={handleChange}

                        value={values.password}
                        onBlur={handleBlur}
                        name="password"
                        type="password"
                        placeholder="Choose a secure password"
                    />


{errors.password && <p className="error-text">{errors.password}</p>}
                    <div style={{ display: 'flex', marginTop: '10px' }}>
                        <Button type="primary" htmlType="submit" className="login-form-button"
                         disabled={isSubmitting}
                         style={{ background: !isSubmitting ? "red" : "blue" }}
                        >
                            submit
          </Button>

                        <a href="#"
                            style={{ marginLeft: '20px' }}
                            onClick={() => setLogin(prevlogin =>
                                !prevlogin
                            )}
                        >
                            {login ? "need to create an account" : "already have an Account?"}
                        </a>

                    </div>


                </form>
            </div>
        </>
    )
}
export default Login

