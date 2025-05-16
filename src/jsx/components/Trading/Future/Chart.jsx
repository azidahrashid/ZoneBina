import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";



// Menu structure for each section of the sidebar, each section contains a list of items
const SIDEBAR_MENU1 = [
  {
    section: "기본",
    items: [
      { id: 1, iconClass: "tradeicon-ticon_211", label: "크로스" },
      { id: 2, iconClass: "tradeicon-ticon_207", label: "점" },
      { id: 3, iconClass: "tradeicon-ticon_208", label: "화살표" },
      { id: 4, iconClass: "tradeicon-ticon_209", label: "데모" },
      { id: 5, iconClass: "tradeicon-ticon_210", label: "지우개" },
    ],
  },
];

const SIDEBAR_MENU2 = [
  {
    section: "라인",
    items: [
      { id: 1, iconClass: "tradeicon-ticon_165", label: "추세줄" },
      { id: 2, iconClass: "tradeicon-ticon_166", label: "빛" },
      { id: 3, iconClass: "tradeicon-ticon_167", label: "인포 라인" },
      { id: 4, iconClass: "tradeicon-ticon_168", label: "익스텐디드 라인" },
      { id: 5, iconClass: "tradeicon-ticon_169", label: "추세각" },
      { id: 6, iconClass: "tradeicon-ticon_170", label: "가로줄" },
      { id: 7, iconClass: "tradeicon-ticon_171", label: "가로빛" },
      { id: 8, iconClass: "tradeicon-ticon_172", label: "세로줄" },
      { id: 9, iconClass: "tradeicon-ticon_173", label: "크로스 라인" },
    ],
  },
  {
    section: "채널",
    items: [
      { id: 10, iconClass: "tradeicon-ticon_174", label: "패러렐 채널" },
      { id: 11, iconClass: "tradeicon-ticon_175", label: "회귀추세" },
      { id: 12, iconClass: "tradeicon-ticon_176", label: "위나 아래 수평" },
      { id: 13, iconClass: "tradeicon-ticon_177", label: "디스조인트 채널" },
    ],
  },
  {
    section: "피치포크",
    items: [
      { id: 14, iconClass: "tradeicon-ticon_178", label: "피치포크" },
      { id: 15, iconClass: "tradeicon-ticon_179", label: "쉬프 피치포크" },
      { id: 16, iconClass: "tradeicon-ticon_180", label: "변형 쉬프 피치포크" },
      { id: 17, iconClass: "tradeicon-ticon_181", label: "피치포크" },
    ],
  },
];


const SIDEBAR_MENU3 = [
  {
    section: "피보나치",
    items: [
      { id: 1, iconClass: "tradeicon-ticon_119", label: "피보나치 되돌림" },
      { id: 2, iconClass: "tradeicon-ticon_120", label: "추세기반 피보나치 확장" },
      { id: 3, iconClass: "tradeicon-ticon_121", label: "피보나치 채널" },
      { id: 4, iconClass: "tradeicon-ticon_122", label: "피보나치 타임존" },
      { id: 5, iconClass: "tradeicon-ticon_123", label: "피보나치 스피드 리지스턴스 팬" },
      { id: 6, iconClass: "tradeicon-ticon_124", label: "추세기반 피보나치 시간" },
      { id: 7, iconClass: "tradeicon-ticon_125", label: "피보나치 서클" },
      { id: 8, iconClass: "tradeicon-ticon_126", label: "피보나치 스파이럴" },
      { id: 9, iconClass: "tradeicon-ticon_127", label: "피보나치 스피드 리지스턴스 아크" },
      { id: 10, iconClass: "tradeicon-ticon_128", label: "피보나치 웻지" },
      { id: 11, iconClass: "tradeicon-ticon_129", label: "피치팬" },
    ],
  },
  {
    section: "간",
    items: [
      { id: 12, iconClass: "tradeicon-ticon_130", label: "간 박스" },
      { id: 13, iconClass: "tradeicon-ticon_3", label: "간 스퀘어 픽스트" },
      { id: 14, iconClass: "tradeicon-ticon_4", label: "간 스퀘어" },
      { id: 15, iconClass: "tradeicon-ticon_133", label: "간 팬" },
    ],
  },
];



const SIDEBAR_MENU4 = [
  {
    section: "패턴",
    items: [
      { id: 1, iconClass: "tradeicon-ticon_98", label: "패턴" },
      { id: 2, iconClass: "tradeicon-ticon_99", label: "XABCD  패턴" },
      { id: 3, iconClass: "tradeicon-ticon_100", label: "사이퍼 패턴" },
      { id: 4, iconClass: "tradeicon-ticon_101", label: "헤드 앤 숄더" },
      { id: 5, iconClass: "tradeicon-ticon_102", label: "ABCD 패턴" },
    ],
  },
  {
    section: "엘리엇 웨이브",
    items: [
      { id: 6, iconClass: "tradeicon-ticon_103", label: "세모 패턴" },
      { id: 7, iconClass: "tradeicon-ticon_104", label: "쓰리 드라이브 패턴" },
      { id: 8, iconClass: "tradeicon-ticon_105", label: "엘리엇 임펄스 파동 (12345)" },
      { id: 9, iconClass: "tradeicon-ticon_106", label: "엘리엇 코렉션 파동 (ABC)" },
      { id: 10, iconClass: "tradeicon-ticon_107", label: "엘리엇 트라이앵글 웨이브 (ABCDE)" },
    ],
  },
  {
    section: "사이클",
    items: [
      { id: 11, iconClass: "tradeicon-ticon_108", label: "엘리엇 다블콤보 파동 (WXY)" },
      { id: 12, iconClass: "tradeicon-ticon_109", label: "엘리엇 트리플콤보 파동 (WXYXZ)" },
      { id: 13, iconClass: "tradeicon-ticon_110", label: "사이클릭 라인" },
      { id: 14, iconClass: "tradeicon-ticon_111", label: "타임 사이클" },
      { id: 15, iconClass: "tradeicon-ticon_112", label: "사인 라인" },
    ],
  },
];




const SIDEBAR_MENU5 = [
  {
    section: "프로젝션",
    items: [
      { id: 1, iconClass: "tradeicon-ticon_57", label: "매수 포지션" },
      { id: 2, iconClass: "tradeicon-ticon_59", label: "숏 포지션" },
      { id: 3, iconClass: "tradeicon-ticon_60", label: "예측" },
      { id: 4, iconClass: "tradeicon-ticon_61", label: "봉패턴" },
      { id: 5, iconClass: "tradeicon-ticon_62", label: "고스트피드" },
      { id: 6, iconClass: "tradeicon-ticon_63", label: "프로젝션" },
    
    ],
  },
  {
    section: "볼륨-기반",
    items: [
      { id: 7, iconClass: "tradeicon-ticon_64", label: "앵커드 VWAP" },
      { id: 8, iconClass: "tradeicon-ticon_65", label: "픽스트 레인지 볼륨 프로화일" },
      { id: 9, iconClass: "tradeicon-ticon_66", label: "고정 볼륨 프로필" },
    ],
  },
  {
    section: "계측기",
    items: [
  { id: 10, iconClass: "tradeicon-ticon_67", label: "가격범위" },
  { id: 11, iconClass: "tradeicon-ticon_68", label: "기간" },
  { id: 12, iconClass: "tradeicon-ticon_69", label: "날짜 및 가격 범위" },
    ],
  },
];




const SIDEBAR_MENU6 = [
    {
      section: "프로젝션",
      items: [
        { id: 1, iconClass: "tradeicon-ticon_31", label: "붓" },
        { id: 2, iconClass: "tradeicon-ticon_32", label: "하이라이터" },
      
      ],
    },
    {
      section: "볼륨-기반",
      items: [
        { id: 3, iconClass: "tradeicon-ticon_33", label: "화살표" },
        { id: 4, iconClass: "tradeicon-ticon_34", label: "화살표" },
        { id: 5, iconClass: "tradeicon-ticon_35", label: "위화살표" },
        { id: 6, iconClass: "tradeicon-ticon_36", label: "아래화살표" },
      ],
    },
    {
      section: "계측기",
      items: [
        { id: 7, iconClass: "tradeicon-ticon_37", label: "네모" },
        { id: 8, iconClass: "tradeicon-ticon_38", label: "회전네모" },
        { id: 9, iconClass: "tradeicon-ticon_39", label: "경로" },
        { id: 10, iconClass: "tradeicon-ticon_40", label: "서클" },
        { id: 11, iconClass: "tradeicon-ticon_41", label: "타원" },
        { id: 12, iconClass: "tradeicon-ticon_42", label: "다선형" },
        { id: 13, iconClass: "tradeicon-ticon_43", label: "세모" },
        { id: 14, iconClass: "tradeicon-ticon_44", label: "원호" },
        { id: 15, iconClass: "tradeicon-ticon_45", label: "곡선" },
        { id: 16, iconClass: "tradeicon-ticon_46", label: "더블곡선" },
      ],
    },
  ];
  



const SIDEBAR_MENU7 = [
  {
    section: "텍스트 & 노트",
    items: [
        { id: 1, iconClass: "tradeicon-ticon_12", label: "텍스트" },
        { id: 2, iconClass: "tradeicon-ticon_13", label: "고정위치문자" },
        { id: 3, iconClass: "tradeicon-ticon_14", label: "노트" },
        { id: 4, iconClass: "tradeicon-ticon_15", label: "프라이스 노트" },
        { id: 5, iconClass: "tradeicon-ticon_16", label: "핀" },
        { id: 6, iconClass: "tradeicon-ticon_17", label: "테이블" },
        { id: 7, iconClass: "tradeicon-ticon_18", label: "콜아웃" },
        { id: 8, iconClass: "tradeicon-ticon_19", label: "코멘트" },
        { id: 9, iconClass: "tradeicon-ticon_20", label: "가격라벨" },
        { id: 10, iconClass: "tradeicon-ticon_21", label: "길잡이" },
        { id: 11, iconClass: "tradeicon-ticon_22", label: "플래그 마크" },
    ],
  },
];

const SIDEBAR_MENU8 = [
  {
    section: "마그넷",
    items: [
      { id: 1, iconClass: "tradeicon-ticon_9", label: "위크 마그넷" },
      { id: 2, iconClass: "tradeicon-ticon_10", label: "스트롱 마그넷" },
    ],
  },
];


// Combining all the menus into a single object for easier management and reference
const SIDEBAR_MENUS = {
  1: SIDEBAR_MENU1,
  2: SIDEBAR_MENU2,
  3: SIDEBAR_MENU3,
  4: SIDEBAR_MENU4,
  5: SIDEBAR_MENU5,
  6: SIDEBAR_MENU6,
  7: SIDEBAR_MENU7,
  8: SIDEBAR_MENU8,
};



const ChartSideMenu = () => {
  // State to manage the active dropdown menu and selection
  const [dropdownState, setDropdownState] = useState({
    1: { clickCount: 0, isSelected: false, active: false },
    2: { clickCount: 0, isSelected: false, active: false },
    3: { clickCount: 0, isSelected: false, active: false },
    4: { clickCount: 0, isSelected: false, active: false },
    5: { clickCount: 0, isSelected: false, active: false },
    6: { clickCount: 0, isSelected: false, active: false },
    7: { clickCount: 0, isSelected: false, active: false },
    8: { clickCount: 0, isSelected: false, active: false },
  });

  const dropdownRef = useRef(null);



  // Function to update the icon and active class of the dropdown toggle button
  const updateDropdownIconAndClass = (dropdownId) => {
    const selectedItem = localStorage.getItem(`selectedChartType${dropdownId}`);
    const dropdownButton = document.querySelector(`.dropdown-toggle-btn-${dropdownId}`);

    if (dropdownButton) {
      const menuSections = SIDEBAR_MENUS[dropdownId];
      const selectedIconClass =
        menuSections.flatMap((s) => s.items).find((item) => item.id.toString() === selectedItem)?.iconClass ||
        menuSections[0].items[0].iconClass;

      dropdownButton.className = `dropdown-toggle-btn-${dropdownId} moreright-btn bn-flex justify-content-between ${
        selectedItem ? "isactive" : ""
      }`;

      dropdownButton.querySelector("span").className = `font-i-side trade_icon ${selectedIconClass}`;
    }
  };


  //Tracks which dropdown is currently active
  const [activeDropdownId, setActiveDropdownId] = useState(null);


  // Handles the click event for dropdowns (toggles visibility)
  const handleDropdownClick = (dropdownId, isTostich = false) => {
    setDropdownState((prevState) => {
      const newState = {};
  
      Object.keys(prevState).forEach((key) => {
        const keyNum = parseInt(key);
        if (keyNum === dropdownId) {
          // Toggle active for clicked dropdown
          newState[key] = {
            ...prevState[key],
            active: !prevState[key].active,
          };
        } else {
          // Close all other dropdowns
          newState[key] = {
            ...prevState[key],
            active: false,
          };
        }

        if (isTostich) {
            setActiveTostichId(prev => (prev === dropdownId ? null : dropdownId));
          } else {
            setActiveDropdownId(prev => (prev === dropdownId ? null : dropdownId));
            setActiveTostichId(null); // Reset tostich when dropdown is clicked
          }

      });
  
      return newState;
    });
    
    // Update active dropdown ID for styling if needed
    setActiveDropdownId(dropdownId);
    updateDropdownIconAndClass(dropdownId);
  };




  // Handles the selection of a chart item within a dropdown
  const handleSelectItem = (dropdownId, item) => {
    localStorage.setItem(`selectedChartType${dropdownId}`, item.id);
    setDropdownState((prevState) => {
      const newState = {};
  
      Object.keys(prevState).forEach((key) => {
        const keyNum = parseInt(key);
        newState[key] = {
          ...prevState[key],
          isSelected: keyNum === dropdownId,
          active: false,
        };
      });
  
      return newState;
    });
  
    setActiveDropdownId(dropdownId);
    updateDropdownIconAndClass(dropdownId);
    setActiveItemId(item.id);
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownState((prevState) =>
          Object.keys(prevState).reduce((acc, key) => {
            acc[key] = { ...prevState[key], active: false }; // Tutup dropdown
            return acc;
          }, {})
        );
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);




  const [activeItemId, setActiveItemId] = useState(null);
 const [activeTostichId, setActiveTostichId] = useState(null);


const handleToStichClick = (id) => {
  setActiveTostichId(prev => prev === id ? null : id);
};


  return (
    <>

    <div className='chart_container_'>


       {/* chart area */}
        <div className="fixChart_SideChart border-t-[1px]  border-l-0 border-t-0 border-solid border-Line pl-[16px] pr-[16px] ">
                <div className="bn-flex justify-content-center mx-1 coinchart flex-column">
                   <div id="CoinChartContainer" className="w-full aspect-[16/9]">
                        <div>
                           {/* Place your chart here */}
                        </div>
                    </div>
              </div>         
        </div> 



        {/* side menu area */}
        <div className="fixChart_SideMenu border-t-[1px]  border-l-0 border-t-0 border-solid border-Line pl-[16px] pr-[16px] "  ref={dropdownRef} >
        <div className="d-grid grid-cols-[auto_min-content] align-items-start h-full">
          <div className="d-flex align-items-center relative mr-[24px]">


            <div className="d-flex flex-row items-center h-full w-full gap-[--space-m] [&::-webkit-scrollbar]:hidden">
              <div className="d-flex align-items-center gap-[--space-m]">
                <div className="!ml-[0px]">
                  <div className="bn-flex">
                  <div className="bn-flex justify-content-center mx-1 icondrop_menu flex-column">
                      {Object.keys(SIDEBAR_MENUS).map((dropdownId) => {
                        const menuSections = SIDEBAR_MENUS[dropdownId];
                        // const isSelected = dropdownState[dropdownId]?.isSelected;
                        const isActive = dropdownState[dropdownId]?.active;
                        const selectedItem = localStorage.getItem(`selectedChartType${dropdownId}`);
                        

                        return (
                          <React.Fragment key={dropdownId}>
                            <DropdownButton
                            align={{lg: 'end'}}
                            drop="end"
                            variant=""
                              as={ButtonGroup}
                              title={
                                <>
                                      <span
                                        className={`font-i-side trade_icon tostich ${activeTostichId === dropdownId ? "btnON_using" : ""} ${
                                          menuSections
                                            .flatMap((s) => s.items)
                                            .find((item) => item.id.toString() === selectedItem)?.iconClass ||
                                          menuSections[0].items[0].iconClass
                                        }`}

                                        onClick={() => handleToStichClick(dropdownId)}
                                      />
                                      <span
                                      className="font-i-side-xs trade_icon tradeicon-ticon_182 too_gle_sidesubmenu arrow_image"  // Toggle submenu only when clicking this
                                      onClick={() => handleDropdownClick(parseInt(dropdownId))} 
                                      />
                                
                                  </>
                               }
                              className={`dropdown-toggle-btn-${dropdownId} moreright-btn bn-flex justify-content-between ${activeDropdownId === parseInt(dropdownId) ? "isselected btnON_using" : ""} ${activeTostichId === dropdownId ? "btnON_using" : ""}`}

                               show={isActive}
                              // onClick={() => handleDropdownClick(parseInt(dropdownId))}
                            
                                onClick={(e) => {
                                e.stopPropagation(); // Stop click events here so clicking the icon DOES NOT toggle submenu                       
                                // Remove btnON_using from all elements
                                document.querySelectorAll(".btnON_using").forEach((el) => el.classList.remove("btnON_using"));
                      
                              }} 
                            >

                              {menuSections.map((section) => (
                                <React.Fragment key={section.section}>
                                  <div className="px-3 py-2 text-muted text-sm dropitem_subsection_title">
                                    {section.section}
                                  </div>
                                  {section.items.map((item) => (
                                    <Dropdown.Item
                                      key={item.id}
                                      onClick={() => handleSelectItem(parseInt(dropdownId), item)}
                                      active={localStorage.getItem(`selectedChartType${dropdownId}`) === item.id.toString()}
                                      className={
                                        // Apply "isselected" class only for the currently selected item in the active dropdown
                                        activeDropdownId === dropdownId && activeItemId === item.id
                                          ? 'isselected'
                                          : ''
                                      }
                                    >
                                      <div className="bn-flex justify-content-between align-items-center">
                                        <span className={`font-i-side trade_icon d-flextrade_icon ${item.iconClass}`}>
                                          {item.label}
                                        </span>
                                      </div>
                                    </Dropdown.Item>
                                  ))}
                                  <div className="dropdown-divider"></div>
                                </React.Fragment>
                              ))}
                            </DropdownButton>

                            {/* Inserted Divider and Buttons After dropdown Menu 7 */}
                            {parseInt(dropdownId) === 7 && (
                              <>
                                <div className="dropdown-divider"></div>
                                <Button 
                                  className={`moreright-btn bn-flex justify-content-between ghostbg nonDropdownButton tostich ${activeTostichId === '7_1' ? "btnON_using" : ""}`}
                                  onClick={() => handleToStichClick('7_1')}
                                >
                                  <span className="font-i-side trade_icon tradeicon-ticon_7" />
                                </Button>

                                <Button 
                                  className={`moreright-btn bn-flex justify-content-between ghostbg nonDropdownButton tostich ${activeTostichId === '7_2' ? "btnON_using" : ""}`}
                                  onClick={() => handleToStichClick('7_2')}
                                >
                                  <span className="font-i-side trade_icon tradeicon-ticon_8" />
                                </Button>
                                <div className="dropdown-divider"></div>
                              </>
                            )}

                          </React.Fragment>
                        );
                      })}
                    </div>

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
