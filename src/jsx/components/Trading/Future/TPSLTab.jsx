import React, { useState } from "react";
import { Link } from "react-router-dom";
import FutureTradeRangeSlider from "../../RangeSlider/FutureTradeRangeSlider";
import DropDownUI from "../../bootstrap/DropDownUi";

const TPSLTab = () => {
    const handleDropdownChange = (value) => {};

    const [focusedInput, setFocusedInput] = useState(null);
    const handleInputFocus = (id) => {
        setFocusedInput(id);
    };

    const handleInputBlur = () => {
        setFocusedInput(null);
    };



    return (
        <>
            {[
                { id: 221, inputId: "unitAmount-221" },
         
            ].map(({ id, inputId }) => (
                <form key={id}>
                    

                  
                        <div className="d-flex align-items-start justify-content-center mt-3 mb-1 flex-column">
                            <span className="small text-muted">Take Profit</span>
                            <div
                                className={`input-group mb-2 ${
                                    focusedInput === `${inputId}-tp` ? "input-group-focus" : ""
                                }`}
                            >
                                <input
                                    id={`${inputId}-tp`}
                                    type="text"
                                    className="form-control border-end-0"
                                    onFocus={() => handleInputFocus(`${inputId}-tp`)}
                                    onBlur={handleInputBlur}
                                />
                                <span className="btn-cur left-radius input-group-text fw-light  border-start-0 textColored">
                                    <DropDownUI
                                        options={["시장가", "현재가"]}
                                        placeholder="시장가"
                                        onValueChange={handleDropdownChange}
                                    />
                                 </span>
                            </div>
                        </div>
                        <div style={{padding:'5px'}}><FutureTradeRangeSlider /></div>
                        <div className="d-flex align-items-start justify-content-center mt-1 mb-1 flex-column">
                            <span className="small text-muted">Stop Loss</span>
                            <div
                                className={`input-group mb-2 ${
                                    focusedInput === `${inputId}-sl` ? "input-group-focus" : ""
                                }`}
                            >
                                <input
                                    id={`${inputId}-sl`}
                                    type="text"
                                    className="form-control border-end-0"
                                    onFocus={() => handleInputFocus(`${inputId}-sl`)}
                                    onBlur={handleInputBlur}
                                />
                                <span className="btn-cur left-radius input-group-text fw-light  border-start-0 textColored">
                                    <DropDownUI
                                        options={["시장가", "Limit"]}
                                        placeholder="시장가"
                                        onValueChange={handleDropdownChange}
                                    />
                                 </span>
                            </div>
                        </div>
                        <div style={{padding:'5px'}}><FutureTradeRangeSlider /></div>
                    

                    <div className="d-flex justify-content-between flex-wrap flex-column tradeDetails">
                        <div className="d-flex justify-content-between">
                            <div className="text-muted">보유금액</div>
                            <div className="text-black px-1"> 0.00 USDT</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="text-muted">미실현수익</div>
                            <div className="text-black px-1"> 0.00 USDT </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="text-muted">수익률</div>
                            <div className="text-black px-1"> 0.00 % </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="text-muted">사용가능금액</div>
                            <div className="text-black px-1"> 0.00 USDT </div>
                        </div>
                    </div>

                    <div className="mt-3 d-flex justify-content-between gap-2">
                        <Link to={"#"} className="btn btn-success py-2 text-uppercase flex-grow-1">
                             확인
                        </Link>
                        <Link to={"#"} className="btn btn-danger py-2 text-uppercase flex-grow-1">
                             취소
                        </Link>
                    </div>
                </form>
            ))}
        </>
    );
};

export default TPSLTab;
