import React, {useState} from 'react';
// import loadable from "@loadable/component";
// import pMinDelay from "p-min-delay";

// const BitCoinChart = loadable(() =>
// 	pMinDelay(import("../../Crypto/Coin/BitCoinChart"), 1000)
// );

const ChartTab = () =>{
    const [active, setActive] = useState("Time");
    const timeIntervals = [
        { id: "timesrt1", label: "Time" },
        { id: "timesrt15", label: "15m" },
        { id: "timesrt1h", label: "1H" },
        { id: "timesrt4h", label: "4H" },
        { id: "timesrt1d", label: "1D" },
        { id: "timesrt1w", label: "1W" },
      ];
    return(
        <>

        <div className="border-b-[1px] border-x-0 border-t-0 border-solid border-Line pl-[16px] pr-[16px] py-2" >
            <div className="d-grid grid-cols-[auto_min-content] align-items-center h-full timechart_wrap" >
                <div className="d-flex align-items-center relative overflow-hidden mr-[24px]" >
                    <div className="d-flex cursor-pointer align-items-center justify-content-start position-absolute w-[30px] h-[20px] left-[-1px] z-[1] leftarrow" >
                        <svg className="bn-svg w-[16px] h-[16px] text-IconNormal" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.934 12l3.89 3.89-1.769 1.767L8.398 12l1.768-1.768 3.89-3.889 1.767 1.768-3.889 3.89z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <div className="d-flex flex-row items-center h-full w-full overflow-auto gap-[--space-m] [&amp;::-webkit-scrollbar]:hidden" >
                        <div className="d-flex align-items-center gap-[--space-m]" >
                            <div className="!ml-[0px]" >
                                <div className="bn-flex h-[20px]" >
                                    <div className="bn-flex justify-between overflow-hidden gap-[8px] mx-4" >
                                            {timeIntervals.map(({ id, label }) => (
                                                        <div
                                                            key={id}
                                                            id={label}
                                                            className={`bn-flex typography-caption0 h-[20px] items-center justify-center cursor-pointer text-${
                                                            active === id ? "PrimaryText" : "TertiaryText"
                                                            } px-[1px] whitespace-nowrap`}
                                                            onClick={() => setActive(id)}
                                                        >
                                                            {label}
                                                        </div>
                                            ))}
                                       
                                    </div>
                                    {/* <div className="!ml-[8px] css-ybbx55" >
                                        <div className="bn-flex typography-caption0 h-[20px] items-center justify-center cursor-pointer text-TertiaryText min-w-[auto]" >
                                            <div className="bn-flex items-center flex-nowrap justify-center" >
                                                <svg className="bn-svg interval-expand-btn text-IconNormal w-[16px] h-[16px] transition-transform hover:rotate-180" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                           {/* <div className="bn-tooltips-wrap bn-tooltips-web" >
                                    <div className="d-flex items-center cursor-pointer relative text-[--color-IconNormal] hover:text-[--color-SecondaryText]" >
                                        <svg className="bn-svg h-[16px] w-[16px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3H7v2H4v3h16V5h-3V3h-3v2h-4V3zm10 7H4v10h16V10zm-10 2v2h7v2h-7v2l-3-3 3-3z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                            </div> */}
                        </div>


                            {/* <div className="bn-tooltips-wrap bn-tooltips-web" >
                                <div className="bn-tooltips-ele" >
                                    <div className="d-flex items-center cursor-pointer relative text-[--color-IconNormal] hover:text-[--color-SecondaryText]" >
                                        <svg className="bn-svg h-[16px] w-[16px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M4 20h3v-6.791l3.767-3.767.967.966 1.767 1.768 6.364-6.364-1.767-1.768-4.596 4.596-.967-.966-1.768-1.768L7 9.673V4H4v16zm16 0H7v-3h13v3zm-6.5-7.823l2.828 2.828h-5.656l2.828-2.828z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="bn-tooltips-wrap bn-tooltips-web bn-select bn-select__auto [&amp;_.bn-select-field]:border-none [&amp;_.bn-select-field]:w-auto [&amp;_.bn-select-field]:h-auto [&amp;_.bn-select-field]:p-0 [&amp;_.bn-select-field-input]:overflow-visible [&amp;_.bn-select-field-input]:w-[16px] [&amp;_.bn-select-field-input]:h-[16px] [&amp;_.bn-select-field-arrow]:hidden" >
                                <div className="bn-tooltips-ele bn-select-trigger" >
                                    <div className="bn-select-field data-single data-size-middle data-borderless" >
                                        <div className="bn-select-field-input" >
                                            <div className="d-flex items-center cursor-pointer relative text-[--color-IconNormal] hover:text-[--color-SecondaryText]" >
                                                <svg className="bn-svg h-[16px] w-[16px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 3h-3v4h-3v10h3v4h3v-4h3V7h-3V3zM11 11H8V7H5v4H2v6h3v4h3v-4h3v-6z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <svg fill="textThird" className="bn-svg bn-select-field-arrow" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z" fill="currentColor"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="bn-tooltips-wrap bn-tooltips-web" >
                                <div className="bn-tooltips-ele" >
                                    <div className="d-flex items-center cursor-pointer relative text-[--color-IconNormal] hover:text-[--color-SecondaryText]" >
                                        <svg className="bn-svg h-[16px] w-[16px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M21 4H3v3h18V4zM8 10.5H3v3h5v-3zM3 17h5v3H3v-3zm12.5-8.1l5.5 3.175v6.35l-5.5 3.176-5.5-3.176v-6.35l5.5-3.176zm2.25 6.35a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="bn-tooltips-wrap bn-tooltips-web" >
                                <div className="bn-tooltips-ele" >
                                    <div className="d-flex items-center cursor-pointer relative text-[--color-IconNormal] hover:text-[--color-SecondaryText]" >
                                        <svg className="bn-svg h-[16px] w-[16px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M13.8 3h-3.6v2.027c-.66.17-1.285.431-1.858.77L6.91 4.363 4.363 6.91l1.434 1.433a7.157 7.157 0 00-.77 1.858H3v3.6h2.027c.17.66.431 1.285.77 1.858L4.363 17.09l2.546 2.546 1.433-1.434c.573.339 1.197.6 1.858.77V21h3.6v-2.027a7.157 7.157 0 001.858-.77l1.433 1.434 2.546-2.546-1.434-1.434a7.16 7.16 0 00.77-1.857H21v-3.6h-2.027a7.158 7.158 0 00-.77-1.858l1.434-1.433-2.546-2.546-1.434 1.434a7.156 7.156 0 00-1.857-.77V3zm-4.5 9a2.7 2.7 0 115.4 0 2.7 2.7 0 01-5.4 0z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="bn-tooltips-wrap bn-tooltips-web bn-select bn-select__auto [&amp;_.bn-select-field]:border-none [&amp;_.bn-select-field]:w-auto [&amp;_.bn-select-field]:h-auto [&amp;_.bn-select-field]:p-0 [&amp;_.bn-select-field]:gap-0">
                                <div className="bn-tooltips-ele bn-select-trigger" >
                                    <div className="bn-select-field data-single data-size-middle data-borderless" >
                                        <div className="bn-select-field-input" ><div className="typography-caption1 text-SecondaryText md:text-TertiaryText" >Last Price</div></div>
                                        <svg fill="textThird" className="bn-svg bn-select-field-arrow" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z" fill="currentColor"></path></svg>
                                    </div>
                                </div>
                            </div> 
                        </div>*/}
                        {/* <div className="draggableHandle d-flex items-center justify-center h-full gap-[--space-m]" ></div> */}
                    </div>
                    {/* <div className="d-flex cursor-pointer items-center justify-end absolute w-[30px] h-[20px] right-[-1px] rightarrow">
                        <svg className="bn-svg w-[16px] h-[16px] text-IconNormal" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor"></path>
                        </svg>
                    </div> */}
                </div>
                {/* <div className="d-flex items-center whitespace-nowrap gap-[--space-m]" >
                    <div className="bn-flex gap-[16px]" >
                        <div className="d-flex flex-row gap-[--space-m]" >
                            <div className="typography-caption0 cursor-pointer text-[--color-PrimaryText]" >Original</div>
                            <div className="typography-caption0 cursor-pointer text-[--color-TertiaryText]" >Trading View</div>
                            <div className="typography-caption0 cursor-pointer text-[--color-TertiaryText]" >Depth</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
                         {/* <div className="d-flex align-items-center justify-content-between flex-wrap">
                       
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                    <div className="price-content">
                                        <span className="fs-18 d-block mb-2">Price</span>
                                        <h4 className="fs-20 font-w600">$9,542.39</h4>
                                    </div>
                                    <div className="price-content">
                                        <span className="fs-14 d-block mb-2">24h% change</span>
                                        <h4 className="font-w600 text-success">1.64%<i className="fa-solid fa-caret-up ms-1 text-success"></i></h4>
                                    </div>
                                    <div className="price-content">
                                        <span className="fs-14 d-block mb-2">Volume (24h)</span>
                                        <h4 className="font-w600">$47.22B</h4>
                                    </div>
                                    <div className="price-content">
                                        <span className="fs-14 d-block mb-2">Market Cap</span>
                                        <h4 className="font-w600">$219.24B</h4>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <h4 className="me-5 font-w600 mb-0"><span className="text-success me-2">BUY</span> $5,673</h4>
                                    <h4 className="font-w600 mb-0"><span className="text-danger me-2">SELL</span> $5,982</h4>
                                </div>
                        </div>	  */}

                            {/* <BitCoinChart /> */}
        </>
    )
}
export default ChartTab;