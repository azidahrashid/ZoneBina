import React, { useState, useEffect } from 'react';
import DropDownUI from "../../bootstrap/DropDownUi";
import { Clock } from 'lucide-react'; 
import {
  ButtonGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";


const TIMEFRAME_OPTIONS = ["15m", "1H", "4H", "1D", "1W"];

const ChartTab = ({ onTimeframeChange }) => {
    const DEFAULT_TIMEFRAME = "15m";
    const [selectedTimeframe, setSelectedTimeframe] = useState(DEFAULT_TIMEFRAME);
    

  const handleTimeframeChange = (value) => {
    setSelectedTimeframe(value);
  };

  useEffect(() => {
    if (onTimeframeChange) {
      onTimeframeChange(selectedTimeframe); 
    }
  }, [selectedTimeframe, onTimeframeChange]);




  return (
    <>
      <div className="border-b-[1px] border-x-0 border-t-0 border-solid border-Line pl-[16px] pr-[16px] py-2">
        <div className="d-grid grid-cols-[auto_min-content] align-items-center h-full timechart_wrap">
          <div className="d-flex align-items-center relative mr-[24px]">
            <div className="d-flex cursor-pointer align-items-center justify-content-start position-absolute w-[30px] h-[20px] left-[-1px] z-[1] leftarrow">
              <svg className="bn-svg w-[16px] h-[16px] text-IconNormal" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.934 12l3.89 3.89-1.769 1.767L8.398 12l1.768-1.768 3.89-3.889 1.767 1.768-3.889 3.89z" fill="currentColor"></path>
              </svg>
            </div>

            <div className="d-flex flex-row items-center h-full w-full gap-[--space-m] [&::-webkit-scrollbar]:hidden">
              <div className="d-flex align-items-center gap-[--space-m]">
                <div className="!ml-[0px]">
                  <div className="bn-flex h-[20px]">
                    <div className="bn-flex justify-between gap-[8px] mx-4">


                            <div className="timeframe_dropdown bn-flex justify-center align-items-center" style={{lineHeight: '1'}}>
                            <Clock className="w-3 h-3 text-IconNormal" />
                            <DropDownUI
                                options={TIMEFRAME_OPTIONS}
                                placeholder="Time" // title
                                onValueChange={handleTimeframeChange}
                            />
                            </div>


                            <div className='dropdown-divider-side'></div>



                            <DropdownButton
                              align={{lg: 'start'}}
                              as={ButtonGroup}
                              title=""
                              id="bg-nested-dropdown"
                              drop="down"
                              className="moredown-btn"
                            >
                              
                              <Dropdown.Item eventKey="1"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_26 d-flextrade_icon">봉</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              <Dropdown.Item eventKey="2"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_27 d-flextrade_icon">캔들</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                            </DropdownButton>
                    


                          

                            <div className='dropdown-divider-side'></div>
     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartTab;
