import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FutureTradeLeverageSlider = () => {
  const [value, setValue] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  // Handle changes
  const handleSliderChange = (e) => setValue(parseFloat(e.target.value));
  const handleInputChange = (e) => {
    let newValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    newValue = Math.min(Math.max(parseFloat(newValue) || 0, 0), 125);
    setValue(newValue);
  };

  const handleKeyPress = (e) => {
    if (!/[0-9.%]/.test(e.key)) e.preventDefault();
  };

  const handleStepChange = (step) => {
    setValue((prev) => Math.min(Math.max(prev + step, 0), 125));
  };

  return (
    <div className="d-flex align-items-start justify-content-center mt-1 mb-3 flex-column flex-1">
      <span className="small text-muted m-1">레버리지 설정</span>
      <div className={`input-group mb-2 futureTradeLeverageInput ${isFocused ? "input-group-focus" : ""}`}>
        <input
          step="1"
          className="bn-textField-input form-control"
          type="text"
          spellCheck="false"
          autoComplete="off"
          value={`${value}배`}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

      <div className="bn-slider-wrapper2 relative w-full" style={{height: '80px'}}>
            {/* Buttons */}

            <div className="bn-slider-track bg-gray-200 h-2 rounded relative"> </div>
            <div className="d-flex gap-4 bn-slider-button-wrap justify-content-between flex-1">
                <button onClick={() => handleStepChange(-1)} className="px-4 py-2 bg-gray-300 rounded text-black bn-slider-button"><Minus /></button>
                {/* <button onClick={() => handleStepChange(20)} className="px-4 py-2 bg-blue-500 text-black rounded bn-slider-button">20배</button> */}
                <button onClick={() => handleStepChange(1)} className="px-4 py-2 bg-gray-300 rounded text-black bn-slider-button"><Plus /></button>
            </div>
      </div>

      </div>

      
      {/* Slider */}
      <div className="bn-slider-wrapper relative w-full " style={{height: '120px'}} >
        <input
          type="range"
          max="125"
          min="0"
          step="1"
          className="bn-slider w-full"
          value={value}
          onChange={handleSliderChange}
          aria-valuemin="0"
          aria-valuemax="125"
          aria-valuenow={value}
        />
        <div className="bn-slider-track bg-gray-200 h-2 rounded relative">
          <div className="bn-slider-track-thumb bg-blue-500 h-2 rounded"
            style={{ width: `${((value - 1) / 124) * 100}%` }} // Adjusted width calculation
          ></div>


          {/* Steps */}
          {['1배', '25배', '50배', '75배', '100배', '125배'].map((step) => {
              const stepValue = parseInt(step.replace(/\D/g, ""), 10);
              return (
                <div
                  key={step}
                  className={`bn-slider-track-step ${stepValue <= value ? "active" : ""} absolute`}
                  style={{ left: `${((stepValue - 1) / 124) * 100}%` }} // Correct step positioning
                >
                  <div className="bn-slider-track-step-dot w-2 h-2 bg-gray-500 rounded-full"></div>
                  <div className="bn-slider-track-step-name text-xs text-gray-600 mt-1">
                    {step}
                  </div>
                </div>
              );
            })}

        </div>

     
      </div>

    </div>
  );
};

export default FutureTradeLeverageSlider;
