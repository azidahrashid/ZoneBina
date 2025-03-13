import React, { useState, useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { NavLink } from "react-router-dom";



const HeadLogin = ({ onNote }) => {
    // const [rightSelect, setRightSelect] = useState('Eng');
    //For fix header
    const [headerFix, setheaderFix] = useState(false);
    const { changeBackground } = useContext(ThemeContext);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const [menuWrapperSize, setMenuWrapperSize] = useState(0);
    const [menuSize, setMenuSize] = useState(0);
    const [isScrollable, setIsScrollable] = useState(false);
    const listWrapperRef = useRef(null);

    
    useEffect(() => {
        const handleResize = () => {
            const newMenuWrapperSize = document.querySelector('.list-container').offsetWidth;
            setMenuWrapperSize(newMenuWrapperSize);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        if (menuSize > menuWrapperSize) {
            setIsScrollable(true);
        } else {
            setIsScrollable(false);
        }
        console.log('menu', menuSize);
        console.log('wrapper', menuWrapperSize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [menuWrapperSize]);

    useEffect(() => {
        /*
        const items = document.querySelectorAll('.box-el');
        const totalItems = items.length;
        const itemSize =
            items[0]?.offsetWidth +
            parseFloat(getComputedStyle(items[0]).marginRight) || 0;
        setMenuSize(totalItems * itemSize);
        */
        const items = document.querySelectorAll('.box-el');
        const listWrapper = document.querySelector('.list-wrapper');
        let totalWidth = 0;

        items.forEach((item, index) => {
            totalWidth += item.offsetWidth;

            // Add gap width for all items except the last one
            if (index < items.length - 1) {
                const gapWidth = parseFloat(getComputedStyle(listWrapper).getPropertyValue('gap')) || 0;
                totalWidth += gapWidth;
            }
        });
        setMenuSize(totalWidth);
        console.log(menuSize);

    }, [menuWrapperSize]);

    const calcItemWidth = () => {
        const listWrapper = document.querySelector('.list-wrapper');
        const boxEls = listWrapper.querySelectorAll('.box-el');

        // Check if any elements are found
        if (!boxEls.length) {
            return 0; // Return 0 if no elements are found
        }

        const firstBoxEl = boxEls[0];
        const lastBoxEl = boxEls[boxEls.length - 1];

        // Calculate total width based on first and last element positions
        const totalWidth = lastBoxEl.offsetLeft + lastBoxEl.offsetWidth - firstBoxEl.offsetLeft;

        // Add the gap width between each element (assuming all gaps are equal)
        const gapWidth = parseFloat(getComputedStyle(listWrapper).getPropertyValue('gap')) || 0;
        const totalGaps = boxEls.length - 1; // Exclude the gap after the last element
        const totalGapSize = totalGaps * gapWidth;

        return totalWidth + totalGapSize;
    }

    const handleScroll = () => {
        const menuInvisibleSize = menuSize - menuWrapperSize;
        const menuPosition = listWrapperRef.current.scrollLeft;
        const menuEndOffset = menuInvisibleSize - 15; // Paddle margin

        // Update arrow visibility
        const leftArrow = document.querySelector('.larr');
        const rightArrow = document.querySelector('.rarr');

        if (menuPosition <= 15) {
            if (!leftArrow.classList.contains('hidearr')) { 
                leftArrow.classList.add('hidearr');
            }
            if (rightArrow) {
                if (rightArrow.classList.contains('hidearr')) { 
                    rightArrow.classList.remove('hidearr');
                }
            }
        } else if (menuPosition < menuEndOffset) {
            if (leftArrow.classList.contains('hidearr')) { 
                leftArrow.classList.remove('hidearr');
            }
            if (rightArrow.classList.contains('hidearr')) { 
                rightArrow.classList.remove('hidearr');
            }
        } else if (menuPosition >= menuEndOffset) {
            if (leftArrow.classList.contains('hidearr')) { 
                leftArrow.classList.remove('hidearr');
            }
            if (!rightArrow.classList.contains('hidearr')) { 
                rightArrow.classList.add('hidearr');
            }
        } else if (menuInvisibleSize > 5) {
            if (rightArrow.classList.contains('hidearr')) { 
                    rightArrow.classList.remove('hidearr');
            }
        }
    };

    const handleRightScroll = () => {
        let scrollSize;
        const screenWidth = window.innerWidth;

        if (screenWidth < 431) {
            scrollSize = screenWidth - 20;
        } else {
            scrollSize = 100;
        }

        listWrapperRef.current.scrollBy({
            left: scrollSize,
            behavior: 'smooth',
        });
    };

    const handleLeftScroll = () => {
        let scrollSize;
        const screenWidth = window.innerWidth;

        if (screenWidth < 431) {
            scrollSize = screenWidth - 20;
        } else {
            scrollSize = 100;
        }

        listWrapperRef.current.scrollBy({
            left: -scrollSize,
            behavior: 'smooth',
        });
    };


    useEffect(() => {
        window.addEventListener("scroll", () => {
            setheaderFix(window.scrollY > 50);
        });
    }, []);

    // Toggle theme between dark and light
    const toggleTheme = () => {
        const newTheme = isDarkTheme ? "dark" : "light";
        setIsDarkTheme(!isDarkTheme);
        changeBackground({ value: newTheme, label: newTheme });
    };



    return (
        <div className={`header ${headerFix ? "is-fixed" : ""}`}>
            <div className="header-content">
                <nav className="navbar navbar-expand">
                    <div className="collapse navbar-collapse justify-content-between">
                        <div className="header-left">
                            <div
                                className="dashboard_bar"
                                style={{ textTransform: "capitalize" }}
                            >
                                XRPUSDT
                            </div>
                            <span className="badge-dark light badge badge-xs badgexs_title mx-1">Perp</span>
                            <svg className="bn-svg text-IconNormal fs-16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z" fill="currentColor"></path></svg>
                            <div className="d-flex align-items-center cursor-pointer" >
                                <div className="bn-tooltips-wrap bn-tooltips-web max-w-full cursor-help" >
                                    <div className="bn-tooltips-ele" >
                                        <svg className="bn-svg hover:text-PrimaryText text-IconNormal mx-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 8.2a4 4 0 00-4-4H3v14h5.16c1.193 0 2.243.635 2.86 1.6h1.96c.617-.965 1.668-1.6 2.86-1.6H21v-14h-4a4 4 0 00-4 4v8h-2v-8z" fill="currentColor"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="header-subleft mx-3 default-market-list-container list-container">
                                <div className="larr morearrow hidearr">
                                    <div id="left-button" onClick={handleLeftScroll}>
                                        &#8249;
                                    </div>
                                </div>
                                {isScrollable && (
                                    <div className="rarr morearrow">
                                        <div id="right-button" onClick={handleRightScroll}>
                                            &#8250;
                                        </div>
                                    </div>
                                )}
                                <div className="ticker-market-list d-flex align-items-center justify-content-between gap-3 list-wrapper" ref={listWrapperRef} onScroll={handleScroll}>
                                    <div className="relative-ticker box-el">
                                        <span className="fs-16 text-Sell ">3.0968</span>
                                        <p className="mb-0 fs-12 text-Sell"><span className="me-2">-0.0617-2.02</span></p>
                                    </div>
                                    <div className="relative-ticker box-el">
                                        <span className="fs-16 text-Buy ">3.0960</span>
                                        <p className="mb-0 fs-12 text-Buy"><span className="me-2">-0.0582-2.03</span></p>
                                    </div>
                                    <div className="relative-ticker box-el">
                                        <span className="fs-12">표시가</span>
                                        <p className="mb-0 fs-12 text-black">3.219</p>
                                    </div>
                                    <div className="relative-ticker box-el">
                                        <a className="d-flex align-items-center cursor-pointer">
                                            <span className="fs-12">지수가</span>
                                            <svg className="bn-svg text-[12px] w-2 h-2 min-w-2 ms-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.363 5h-10v2.5h5.734l-9.346 9.346 1.768 1.767 9.345-9.344V15h2.5V5z" fill="currentColor"></path></svg>
                                        </a>
                                        <p className="mb-0 fs-12 text-black">3.2112</p>
                                    </div>
                                    {/* <div className="relative-ticker box-el">
                                        <span className="fs-12">Funding / Countdown</span>
                                        <p className="mb-0 fs-12 text-black"><span className="text-EmphasizeText">0.0100% /</span><span className=""> 00:00:00</span></p>
                                    </div> */}
                                    <div className="relative-ticker box-el">
                                        <span className="fs-12">24시간 고가</span>
                                        <p className="mb-0 fs-12 text-black">3.2612</p>
                                    </div>
                                    <div className="relative-ticker box-el">
                                        <span className="fs-12">24시간 저가</span>
                                        <p className="mb-0 fs-12 text-black">3.0775</p>
                                    </div>
                                    <div className="relative-ticker box-el">
                                        <span className="fs-12">24시간 거래량(BTC)</span>
                                        <p className="mb-0 fs-12 text-black">778,137,280.9</p>
                                    </div>
                                    <div className="relative-ticker box-el">
                                        <span className="fs-12">미결제약정(USDT)</span>
                                        <p className="mb-0 fs-12 text-black">2,472,773,596.16</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="navbar-nav header-right">
                            <div className="nav-item d-flex align-items-center">
                                <div className="header-menu-layout header-theme mx-2">
                                    {/* Toggle Theme Button */}
                                    <div className="theme-toggle" onClick={toggleTheme}>
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
                                </div>


            
                            </div>
                            <div className="nav-item d-flex align-items-center"><div className="header-right-log header-menu-layout header-theme me-2">
                                <div className="form-group clearfix text-left">
                        <NavLink to="/login-front"  className="btn btn-xxs btn-primary outline gray" type="button">로그인</NavLink >
     
                    </div></div></div>

                            

                        </div>


                    </div>
                </nav>
            </div>
        </div>
    );
};

export default HeadLogin;
