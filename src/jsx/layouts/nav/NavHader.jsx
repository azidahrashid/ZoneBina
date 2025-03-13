import React, { useState, useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { Link } from "react-router-dom";

// Logo imports
import logoDark from './../../../assets/images/logo/logo.png';
import logoTextDark from './../../../assets/images/logo/logo-text.png';
import logoColorDark from './../../../assets/images/logo/logo-color.png';
import logoColorTextDark from './../../../assets/images/logo/logo-text-color.png';

import logoLight from './../../../assets/images/logo/logo.png';
import logoTextLight from './../../../assets/images/logo/logo-text-color.png';
import logoColorLight from './../../../assets/images/logo/logo-color.png';
import logoColorTextLight from './../../../assets/images/logo/logo-text-color.png';

import { Dropdown } from "react-bootstrap";
import {Menu} from 'lucide-react';
import LogoutPage from './Logout';


const NavHader = () => {
const [toggle, setToggle] = useState(false);
const { background } = useContext(ThemeContext); // Access toggleTheme and background
const [isDarkTheme, setIsDarkTheme] = useState(false);
const { changeBackground } = useContext(ThemeContext);

  const handleMenuToggle = () => {
    setToggle(!toggle);
    const mainWrapper = document.getElementById("main-wrapper");
    if (mainWrapper) {
      mainWrapper.classList.toggle("menu-toggle");
    }
  };


  
	// Toggle theme between dark and light
	const toggleTheme = () => {
		const newTheme = isDarkTheme ? "dark" : "light";
		setIsDarkTheme(!isDarkTheme);
		changeBackground({ value: newTheme, label: newTheme });
	};


  return (
    <div className="nav-header">
      <Link to="/" className="brand-logo">
      {background.value === "dark" ? (
          <>
            <img src={logoDark} className="logo-abbr" alt="Logo Dark" />
            <img src={logoTextDark} className="brand-title" alt="Logo Text Dark" />
            <img src={logoColorDark} className="logo-color" alt="Logo Color Dark" />
            <img src={logoColorTextDark} className="brand-title color-title" alt="Logo Color Text Dark" />
          </>
        ) : (
          <>
            <img src={logoLight} className="logo-abbr" alt="Logo Light" />
            <img src={logoTextLight} className="brand-title" alt="Logo Text Light Light" />
            <img src={logoColorLight} className="logo-color" alt="Logo Color Light" />
            <img src={logoColorTextLight} className="brand-title color-title" alt="Logo Color Text Light" />
          </>
        )}
      </Link>

      <div
        className="nav-control"
        onClick={handleMenuToggle}
        aria-label="Toggle navigation menu"
        role="button"
        tabIndex="0"
      >
        <div className={`hamburger ${toggle ? "is-active" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="22" y="11" width="4" height="4" rx="2" fill="#2A353A" />
            <rect x="11" width="4" height="4" rx="2" fill="#2A353A" />
            <rect x="22" width="4" height="4" rx="2" fill="#2A353A" />
            <rect x="11" y="11" width="4" height="4" rx="2" fill="#2A353A" />
            <rect x="11" y="22" width="4" height="4" rx="2" fill="#2A353A" />
            <rect width="4" height="4" rx="2" fill="#2A353A" />
            <rect y="11" width="4" height="4" rx="2" fill="#2A353A" />
            <rect x="22" y="22" width="4" height="4" rx="2" fill="#2A353A" />
            <rect y="22" width="4" height="4" rx="2" fill="#2A353A" />
          </svg>
        </div>
      </div>


      						
      <div className="dz-side-menu" >
							<ul>
							<Dropdown as="li" className="nav-item dropdown header-profile">
								<Dropdown.Toggle variant="" as="a" className="nav-link i-false c-pointer">
									{/* <img src={profile} width={20} alt="" /> */}
									<Menu size={40} />
								</Dropdown.Toggle>
								<Dropdown.Menu align="right" className="dropdown-menu dropdown-menu-end">
							
									<div  className="dropdown-item ai-icon">
										<span className=" header-theme d-flex justify-content-start gap-1" onClick={toggleTheme}>
											{/* Toggle Theme Button */}
												<div className="theme-toggle" >
													{isDarkTheme ? (
														<svg
															viewBox="0 0 24 24"
															xmlns="http://www.w3.org/2000/svg"
															className="bn-svg"

														
														>
															<path
																fillRule="evenodd"
																clipRule="evenodd"
																d="M13.5 3h-3v3h3V3zm0 15h-3v3h3v-3zm-6.803-2.818l2.121 2.121-2.121 2.122-2.122-2.122 2.122-2.121zm12.728-8.485l-2.122-2.122-2.12 2.122 2.12 2.121 2.122-2.121zM15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM6.697 8.818l2.121-2.121-2.121-2.122-2.122 2.122 2.122 2.121zM6 10.5v3H3v-3h3zm15 0v3h-3v-3h3zm-1.576 6.803l-2.12 2.121-2.122-2.12 2.121-2.122 2.121 2.121z"
																fill="currentColor"
															></path>
														</svg>
													) : (
														<svg
															viewBox="0 0 24 24"
															xmlns="http://www.w3.org/2000/svg"
															className="bn-svg"
														>
															<path
																d="M20 12.67A6.233 6.233 0 0111.33 4 8.015 8.015 0 1020 12.67z"
																fill="currentColor"
															></path>
														</svg>
													)}
											</div> 
											<div className="dzheadertheme_name ms-2">Set theme</div>
										</span>
									</div>
									<LogoutPage />
								</Dropdown.Menu>
							</Dropdown> 	
							</ul>
						</div>

    </div>
  );
};

export default NavHader;
