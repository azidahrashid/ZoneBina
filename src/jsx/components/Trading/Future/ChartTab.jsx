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
                    <div className="bn-flex justify-content-center gap-[8px] mx-4 icondrop_menu">


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
                              className="moredown-btn bn-flex justify-content-between"
                            >
                              
                              <Dropdown.Item eventKey="1"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_26 d-flextrade_icon">봉</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              <Dropdown.Item eventKey="2"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_27 d-flextrade_icon">캔들</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              <Dropdown.Item eventKey="3"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_204 d-flextrade_icon">할로우캔들</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              
                              <div className='dropdown-divider'></div>

                              <Dropdown.Item eventKey="4"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_192 d-flextrade_icon">캔들</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              <Dropdown.Item eventKey="5"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_193 d-flextrade_icon">마커가 있는 라인</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              <Dropdown.Item eventKey="6"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_194 d-flextrade_icon">스텝 라인</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>

                              <div className='dropdown-divider'></div>                              

                              <Dropdown.Item eventKey="7"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_204 d-flextrade_icon">영역</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              <Dropdown.Item eventKey="8"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_195 d-flextrade_icon">HLC 영역</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              <Dropdown.Item eventKey="9"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_196 d-flextrade_icon">베이스라인</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              
                              <div className='dropdown-divider'></div>

                              <Dropdown.Item eventKey="10"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_197 d-flextrade_icon">컬럼</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              <Dropdown.Item eventKey="11"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_198 d-flextrade_icon">하이-로우</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              
                              <div className='dropdown-divider'></div>

                              <Dropdown.Item eventKey="12"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_199 d-flextrade_icon">헤이킨 아시</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              <Dropdown.Item eventKey="13"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_200 d-flextrade_icon">렌코</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              <Dropdown.Item eventKey="14"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_201 d-flextrade_icon">라인브레이크</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              <Dropdown.Item eventKey="15"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_202 d-flextrade_icon">카기</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              <Dropdown.Item eventKey="16"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_203 d-flextrade_icon">포인트앤피겨</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              <Dropdown.Item eventKey="17"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_2 d-flextrade_icon">레인지</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>


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
