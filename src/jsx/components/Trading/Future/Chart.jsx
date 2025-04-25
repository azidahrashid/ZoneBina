import React, {} from 'react';
import {

  ButtonGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";




const ChartSideMenu = () => {


  return (
    <>
      <div className="fixChart_SideMenu border-b-[1px] border-x-0 border-t-0 border-solid border-Line pl-[16px] pr-[16px] py-2">
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
                            <DropdownButton
                              align={{lg: 'start'}}
                              as={ButtonGroup}
                              title=""
                              id="bg-nested-dropdown"
                              drop="start"
                              className="moreright-btn"
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
