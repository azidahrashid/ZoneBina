import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { loadingToggleAction, loginAction } from "../../store/actions/AuthActions";

import logo from "../../assets/images/logo/logo-full.png";
import bg6 from "../../assets/images/background/bg6.jpg";


function OpenLoginFront(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("demo@example.com");
    const [password, setPassword] = useState("123456");
    const [errors, setErrors] = useState({ email: "", password: "" });
    const dispatch = useDispatch();
    const [step, setStep] = useState("email");


    const validateEmail = () => {
        if (!email) {
            setErrors({ email: "Email/Phone number is required", password: "" });
            return false;
        }
        setErrors({ email: "", password: "" });
        return true;
    };

    const handleNext = (e) => {
        e.preventDefault();
        if (validateEmail()) {
            setStep("password");
        }
    };

    const onLogin = (e) => {
        e.preventDefault();
        if (!password) {
            setErrors((prev) => ({ ...prev, password: "Password is required" }));
            return;
        }
        setErrors({ email: "", password: "" });
        dispatch(loadingToggleAction(true));
        dispatch(loginAction(email, password, navigate));
    };

 

  	return (        
		<div className="page-wraper">
			<div className="browse-job login-style3">
				<div className="bg-img-fix overflow-hidden" style={{background:'#181a20 url('+ bg6 + ')',  height: "100vh"}}>
					<div className="row gx-0 justify-content-center loginbg-overlay">
						<div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 vh-100 bg-white ">
							<div id="mCSB_1" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style={{maxHeight: "653px"}}>
								<div id="mCSB_1_container" className="mCSB_container" style={{position:"relative", top:"0", left:"0", dir:"ltr"}}>
									<div className="login-form style-2">
										<div className="card-body login-card m-auto mb-3">
											<div className="logo-header">
												<Link to={"#"} className="logo"><img src={logo} alt="" className="width-230 mCS_img_loaded" /></Link>
											</div>											
											<div className="nav nav-tabs border-bottom-0" >														
												<div className="tab-content w-100" id="nav-tabContent">
													<div className="tab-pane fade active show" id="nav-personal">
														{props.errorMessage && (
															<div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
																{props.errorMessage}
															</div>
														)}
														{props.successMessage && (
															<div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
																{props.successMessage}
															</div>
														)}
														<form className=" dz-form pb-3" onSubmit={step === "email" ? handleNext : onLogin}>
														{step === "email" && (
															<>
															<h3 className="form-title m-t0">로그인</h3>
															<div className="dz-separator-outer m-b5">
																<div className="dz-separator bg-primary style-liner"></div>
															</div>
															<p>이메일/전화번호</p>
															<div className="form-group mb-3">																
																<input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
																{errors.email && <div className="text-danger fs-12">{errors.email}</div>}
															</div>
															
															<div className="form-group text-left mb-1">
																<button type="submit" className="btn btn-primary btn-login dz-xs-flex m-r5 nextToPasswordbtn">다음</button>
															</div>
															</>
														)}
														{step === "password" && (
															<>
															<h3 className="form-title m-t0">로그인</h3>
															<div className="dz-separator-outer m-b5">
																<div className="dz-separator bg-primary style-liner"></div>
															</div>
															<p>비밀번호 입력

															</p>
															<div className="form-group mb-3">
																<input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />	
																{errors.password && <div className="text-danger fs-12">{errors.password}</div>}
															</div>
															<div className="form-group text-left mb-1">
																<button type="submit" className="btn btn-primary btn-login dz-xs-flex m-r5 proceedLoginBtn">로그인</button>
																{/* <span className="form-check d-inline-block ms-2">
																	<input type="checkbox" className="form-check-input" id="check1" name="example1" />
																	<label className="form-check-label" htmlFor="check1">Remember me</label>
																</span>																 */}
															</div>




															</>
														)}
															<div className={`dz-social ${step === "password" ? "hidden" : ""}`}>
																<div class="d-flex align-items-center my-4 md:mt-6 md:mb-2">
																	<div class="flex-grow-1 bg-[--color-line] h-[1px]"></div>
																	<div class="px-4">or</div>
																	<div class="flex-grow-1 bg-[--color-line] h-[1px]"></div>
																</div>

														
																<ul className={`dz-social-icon dz-border dz-social-icon-lg text-white ${step === "password" ? "hidden" : ""}`}>
																
																	<li class="linkdz-wrap"><Link target="_blank" to="https://www.google.com/" className="linkdz"><div class="fab fa-google-plus-g btn-google-plus  dzicon"></div><div class="dzcaption">Sign in with Google</div></Link></li>
																	<li class="linkdz-wrap"><Link target="_blank" to="#" className="linkdz "><div class="fab fa-apple btn-apple  dzicon"></div><div class="dzcaption">Continue with Apple</div></Link></li>
																	<li class="linkdz-wrap"><Link target="_blank" to="https://twitter.com/" className="linkdz "><div class="fab fa-telegram btn-twitter  dzicon"></div><div class="dzcaption">Continue with Telegram</div></Link></li>
																</ul>
															</div>
														</form>
														
													</div>
																										
												</div>												
											</div>
										</div>
										<div className="text-center bottom"> 
											<NavLink to="/page-register" className="btn btn-ghost btn-register button-md btn-block mb-5" >
												Create an account
											</NavLink> 																	
										</div>


										{/* <div className="card-footer">
											<div className=" bottom-footer clearfix m-t10 m-b20 row text-center">
												<div className="col-lg-12 text-center">
													<span> © Copyright by <span 
														className={`heart ${heartActive ? "" : "heart-blast"}`}														
														onClick={()=>setHeartActive(!heartActive)}
													></span>
													<a href="#" target="_blank" rel="noreferrer"> _ </a> All rights reserved.</span> 
												</div>
											</div>
										</div>	 */}


									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>            
    )
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};
export default connect(mapStateToProps)(OpenLoginFront);