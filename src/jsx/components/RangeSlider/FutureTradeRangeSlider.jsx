import React, { useState } from "react";
import DropDownUI from "../bootstrap/DropDownUi";

const FutureTradeRangeSlider = () => {
  const handleDropdownChange = (value) => {};
  const [value, setValue] = useState(0); 

  // Handle slider change
  const handleSliderChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleInputChange = (e) => {
    let newValue = e.target.value;
    // Ensure the value stays within the allowed range (0-100)
    if (newValue.endsWith('%')) {
      newValue = newValue.slice(0, -1);
    }
    newValue = Math.min(Math.max(parseFloat(newValue) || 0, 0), 100);
    setValue(newValue);
  };


  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => setIsFocused(true);
  const handleInputBlur = () => setIsFocused(false);

  return (
    <div className="d-flex align-items-start justify-content-center mt-1 mb-3 flex-column ">       
            <span className="small text-muted">수량</span>
                <div className={`input-group mb-2 ${isFocused ? "input-group-focus" : ""}`}>
                        <input
                            step="0.001"
                            id="unitAmount-225"
                            className="bn-textField-input form-control border-end-0"
                            type="text"
                            spellCheck="false"
                            autoComplete="off"
                            value={`${value}%`}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus} 
                            onBlur={handleInputBlur} 
                        />

                        <div className="btn-cur left-radius input-group-text fw-light textColored">
                            <DropDownUI  
                            options={["USDT", "BTC"]}
                            placeholder="현재가" 
                            onValueChange={handleDropdownChange}
                            />
                        </div>
            
            

                </div>

                    {/* Slider */}
                    <div className="bn-slider-wrapper relative w-full">
                    <input
                        type="range"
                        max="100"
                        min="0"
                        step="1"
                        className="bn-slider w-full"
                        value={value}
                        onChange={handleSliderChange}
                    />
            
                    {/* Slider Track */}
                    <div className="bn-slider-track bg-gray-200 h-2 rounded relative">
                        <div
                        className="bn-slider-track-thumb bg-blue-500 h-2 rounded"
                        style={{ width: `${value}%` }}
                        ></div>
            
                        {/* Steps */}
                        {[0, 25, 50, 75, 100].map((step) => (
                        <div
                            key={step}
                            className={`bn-slider-track-step ${step <= value ? "active" : ""} absolute`}
                            style={{ left: `${step}%` }}
                        >
                            <div className="bn-slider-track-step-dot w-2 h-2 bg-gray-500 rounded-full"></div>
                        </div>
                        ))}
                    </div>
                    </div>
                    </div>
  );
};

export default FutureTradeRangeSlider;
