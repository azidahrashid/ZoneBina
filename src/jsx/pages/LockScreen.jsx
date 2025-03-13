import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo/logo-full.png";

import { FaEye, FaEyeSlash } from "react-icons/fa";

const LockScreen = () => {
    const nav = useNavigate();

    // State to control password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Function to handle password visibility toggle
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        nav("/dashboard");
    };

    return (
        <div className="authincation">
            <div className="container">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-md-6">
                        <div className="authincation-content">
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <div className="auth-form">
                                        <div className="text-center mb-3">
                                            <Link to="/dashboard">
                                                <img src={logo} alt="logo" />
                                            </Link>
                                        </div>
                                        <h4 className="text-center mb-4">Account Locked</h4>
                                        <form onSubmit={submitHandler}>
                                            <div className="mb-3">
                                                <label><strong>Password</strong></label>
                                                <div className="input-group">
                                                    <input
                                                        type={showPassword ? "text" : "password"}
                                                        className="form-control"
                                                        defaultValue="Password"
                                                    />
                                                    <div className="input-group-append">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-secondary"
                                                            onClick={togglePasswordVisibility}
                                                        >
                                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary btn-block">Unlock</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LockScreen;
