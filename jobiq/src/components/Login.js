import React, { useState } from "react";
import "./Login.css";

import {
    Envelope,
    Lock,
    Eye,
    EyeSlash,
    ArrowRight
} from "react-bootstrap-icons";

function Login({setPage}) {

    const [showPassword, setShowPassword] = useState(false);

    return (

        <div className="login-page">


            <div className="login-background">

            </div>


            

            <div className="login-container">

               

                <div className="login-logo">
                    Job<span>IQ</span>
                </div>


               

                <div className="login-card">

                    <div className="login-heading">

                        <h1>
                            Welcome back
                        </h1>

                        <p>
                            Sign in to continue to your JobIQ account.
                        </p>

                    </div>


                   

                    <div className="login-field">

                        <label>
                            Email address
                        </label>

                        <div className="login-input">

                            <Envelope />

                            <input
                                type="email"
                                placeholder="Enter your email"
                            />

                        </div>

                    </div>


                    

                    <div className="login-field">

                        <div className="password-row">

                            <label>
                                Password
                            </label>

                            <button>
                                Forgot password?
                            </button>

                        </div>


                        <div className="login-input">

                            <Lock />

                            <input
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Enter your password"
                            />

                            <span
                                className="password-eye"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                            >

                                {showPassword
                                    ? <EyeSlash />
                                    : <Eye />
                                }

                            </span>

                        </div>

                    </div>


                  

                    <div className="remember-row">

                        <label>

                            <input type="checkbox" />

                            <span>
                                Remember me
                            </span>

                        </label>

                    </div>


                    <button className="login-button"
                    onClick={()=>setPage("home")}
                    >

                        Sign in

                        <ArrowRight />

                    </button>


                 

                    <div className="login-divider">

                        <span>
                            OR
                        </span>

                    </div>


                

                    <button className="google-button">

                        <span className="google-letter">
                            G
                        </span>

                        Continue with Google

                    </button>


                    

                    <div className="register-text">

                        <span>
                            Don't have an account?
                        </span>

                        <button>
                            Create account
                        </button>

                    </div>

                </div>


            

                <p className="login-footer">
                    © 2026 JobIQ · Skill intelligence platform
                </p>

            </div>

        </div>
    );
}

export default Login;