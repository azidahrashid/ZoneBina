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

  const TOPBAR_MENU_ITEMS = [
    { id: 1, iconClass: "tradeicon-ticon_26", label: "봉" },
    { id: 2, iconClass: "tradeicon-ticon_27", label: "캔들" },
    { id: 3, iconClass: "tradeicon-ticon_204", label: "할로우캔들" },
    { id: 4, iconClass: "tradeicon-ticon_192", label: "캔들" },
    { id: 5, iconClass: "tradeicon-ticon_193", label: "마커가 있는 라인" },
    { id: 6, iconClass: "tradeicon-ticon_194", label: "스텝 라인" },
    { id: 7, iconClass: "tradeicon-ticon_204", label: "영역" },
    { id: 8, iconClass: "tradeicon-ticon_195", label: "HLC 영역" },
    { id: 9, iconClass: "tradeicon-ticon_196", label: "베이스라인" },
    { id: 10, iconClass: "tradeicon-ticon_197", label: "컬럼" },
    { id: 11, iconClass: "tradeicon-ticon_198", label: "하이-로우" },
    { id: 12, iconClass: "tradeicon-ticon_199", label: "헤이킨 아시" },
    { id: 13, iconClass: "tradeicon-ticon_200", label: "렌코" },
    { id: 14, iconClass: "tradeicon-ticon_201", label: "라인브레이크" },
    { id: 15, iconClass: "tradeicon-ticon_202", label: "카기" },
    { id: 16, iconClass: "tradeicon-ticon_203", label: "포인트앤피겨" },
    { id: 17, iconClass: "tradeicon-ticon_2", label: "레인지" },
  ];
  

  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (item) => {
    if (favourites.some(fav => fav.id === item.id)) {
      setFavourites(prev => prev.filter(fav => fav.id !== item.id));

    } else {
      setFavourites(prev => [...prev, item]);

    }
  };

  const handleFavouriteClick = (item) => {
    // You can do anything here, like changing chart type, etc.
  };


  const [selectedChartType, setSelectedChartType] = useState(null);

  const handleChartTypeSelect = (item) => {
    setSelectedChartType(item.id);
    handleFavouriteClick(item); // if you want to still trigger favourite click or custom logic
  };
  
  



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
                                placeholder="Time" 
                                onValueChange={handleTimeframeChange}
                            />
                            </div>


                            <div className='dropdown-divider-side'></div>


                              <div className="favourites-bar d-flex gap-2">
                                {favourites.map((item) => (
                                  <span
                                    key={item.id}
                                    className={`font-i trade_icon ${item.iconClass} d-flex trade_icon cursor-pointer`}
                                    onClick={() => handleFavouriteClick(item)}
                                  >
                                  
                                  </span>
                                ))}
                              </div>

                                  



                              <DropdownButton
                              align={{lg: 'start'}}
                              as={ButtonGroup}
                              title=""
                              id="bg-nested-dropdown"
                              drop="down"
                              className="moredown-btn bn-flex justify-content-between"
                            >
                              {TOPBAR_MENU_ITEMS.map((item) => (
                                <Dropdown.Item
                                  key={item.id}
                                  eventKey={item.id}
                                  className={selectedChartType === item.id ? 'selectedMenu' : ''}
                                  onClick={() => handleChartTypeSelect(item)}
                                >
                                  <div className="bn-flex justify-content-between align-items-center">
                                    <span className={`font-i trade_icon ${item.iconClass} d-flextrade_icon`}>
                                      {item.label}
                                    </span>
                                    <span
                                      className={`font-i trade_icon ${favourites.some(fav => fav.id === item.id) ? "tradeicon-ticon_filled_star" : "tradeicon-ticon_0"} star_icon`}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleFavourite(item);
                                      }}
                                    ></span>
                                  </div>
                                </Dropdown.Item>
                              ))}
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
