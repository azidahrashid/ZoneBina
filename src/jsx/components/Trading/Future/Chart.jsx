import React, {} from 'react';
import {

  ButtonGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";




const ChartSideMenu = () => {


  return (
    <>
      <div className="fixChart_SideMenu border-t-[1px]  border-l-0 border-t-0 border-solid border-Line pl-[16px] pr-[16px] py-2">
        <div className="d-grid grid-cols-[auto_min-content] align-items-start h-full">
          <div className="d-flex align-items-center relative mr-[24px]">


            <div className="d-flex flex-row items-center h-full w-full gap-[--space-m] [&::-webkit-scrollbar]:hidden">
              <div className="d-flex align-items-center gap-[--space-m]">
                <div className="!ml-[0px]">
                  <div className="bn-flex h-[20px]">
                    <div className="bn-flex justify-between gap-[8px] mx-1">
                        
                            <DropdownButton
                              align={{lg: 'end'}}
                              as={ButtonGroup}
                              title=""
                              id="bg-nested-dropdown"
                              drop="end"
                              className="moreright-btn font-i-side trade_icon tradeicon-ticon_173"
                            >
                              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                            </DropdownButton>



                            <div className='dropdown-divider'></div>
     
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

export default ChartSideMenu;
