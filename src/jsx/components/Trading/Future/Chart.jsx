import React, {useState} from 'react';
import {

  ButtonGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";







const SIDEBAR_MENU1_ITEMS = [
  { id: 1, iconClass: "tradeicon-ticon_211", label: "크로스" },
  { id: 2, iconClass: "tradeicon-ticon_207", label: "점" },
  { id: 3, iconClass: "tradeicon-ticon_208", label: "화살표" },
  { id: 4, iconClass: "tradeicon-ticon_209", label: "데모" },
  { id: 5, iconClass: "tradeicon-ticon_210", label: "지우개" },
];

const SIDEBAR_MENU2_ITEMS = [
  { id: 1, iconClass: "tradeicon-ticon_165", label: "추세줄" },
  { id: 2, iconClass: "tradeicon-ticon_166", label: "빛" },
  { id: 3, iconClass: "tradeicon-ticon_167", label: "인포 라인" },
  { id: 4, iconClass: "tradeicon-ticon_168", label: "익스텐디드 라인" },
  { id: 5, iconClass: "tradeicon-ticon_169", label: "추세각" },
  { id: 6, iconClass: "tradeicon-ticon_170", label: "가로줄" },
  { id: 7, iconClass: "tradeicon-ticon_171", label: "가로빛" },
  { id: 8, iconClass: "tradeicon-ticon_172", label: "세로줄" },
  { id: 9, iconClass: "tradeicon-ticon_173", label: "크로스 라인" },
  { id: 10, iconClass: "tradeicon-ticon_174", label: "패러렐 채널" },
  { id: 11, iconClass: "tradeicon-ticon_175", label: "회귀추세" },
  { id: 12, iconClass: "tradeicon-ticon_176", label: "위나 아래 수평" },
  { id: 13, iconClass: "tradeicon-ticon_177", label: "디스조인트 채널" },
  { id: 14, iconClass: "tradeicon-ticon_178", label: "피치포크" },
  { id: 15, iconClass: "tradeicon-ticon_179", label: "쉬프 피치포크" },
  { id: 16, iconClass: "tradeicon-ticon_180", label: "변형 쉬프 피치포크" },
  { id: 17, iconClass: "tradeicon-ticon_181", label: "피치포크" },
];


const SIDEBAR_MENU3_ITEMS = [
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
  { id: 12, iconClass: "tradeicon-ticon_130", label: "간 박스" },
  { id: 13, iconClass: "tradeicon-ticon_3", label: "간 스퀘어 픽스트" },
  { id: 14, iconClass: "tradeicon-ticon_4", label: "간 스퀘어" },
  { id: 15, iconClass: "tradeicon-ticon_133", label: "간 팬" },
];


const SIDEBAR_MENU4_ITEMS = [
  { id: 1, iconClass: "tradeicon-ticon_98", label: "패턴" },
  { id: 2, iconClass: "tradeicon-ticon_99", label: "XABCD  패턴" },
  { id: 3, iconClass: "tradeicon-ticon_100", label: "사이퍼 패턴" },
  { id: 4, iconClass: "tradeicon-ticon_101", label: "헤드 앤 숄더" },
  { id: 5, iconClass: "tradeicon-ticon_102", label: "ABCD 패턴" },
  { id: 6, iconClass: "tradeicon-ticon_103", label: "세모 패턴" },
  { id: 7, iconClass: "tradeicon-ticon_104", label: "쓰리 드라이브 패턴" },
  { id: 8, iconClass: "tradeicon-ticon_105", label: "엘리엇 임펄스 파동 (12345)" },
  { id: 9, iconClass: "tradeicon-ticon_106", label: "엘리엇 코렉션 파동 (ABC)" },
  { id: 10, iconClass: "tradeicon-ticon_107", label: "엘리엇 트라이앵글 웨이브 (ABCDE)" },
  { id: 11, iconClass: "tradeicon-ticon_108", label: "엘리엇 다블콤보 파동 (WXY)" },
  { id: 12, iconClass: "tradeicon-ticon_109", label: "엘리엇 트리플콤보 파동 (WXYXZ)" },
  { id: 13, iconClass: "tradeicon-ticon_110", label: "사이클릭 라인" },
  { id: 14, iconClass: "tradeicon-ticon_111", label: "타임 사이클" },
  { id: 15, iconClass: "tradeicon-ticon_112", label: "사인 라인" },
];



const SIDEBAR_MENU5_ITEMS = [
  { id: 1, iconClass: "tradeicon-ticon_57", label: "매수 포지션" },
  { id: 2, iconClass: "tradeicon-ticon_59", label: "숏 포지션" },
  { id: 3, iconClass: "tradeicon-ticon_60", label: "예측" },
  { id: 4, iconClass: "tradeicon-ticon_61", label: "봉패턴" },
  { id: 5, iconClass: "tradeicon-ticon_62", label: "고스트피드" },
  { id: 6, iconClass: "tradeicon-ticon_63", label: "프로젝션" },
  { id: 7, iconClass: "tradeicon-ticon_64", label: "앵커드 VWAP" },
  { id: 8, iconClass: "tradeicon-ticon_65", label: "픽스트 레인지 볼륨 프로화일" },
  { id: 9, iconClass: "tradeicon-ticon_66", label: "고정 볼륨 프로필" },
  { id: 10, iconClass: "tradeicon-ticon_67", label: "가격범위" },
  { id: 11, iconClass: "tradeicon-ticon_68", label: "기간" },
  { id: 12, iconClass: "tradeicon-ticon_69", label: "날짜 및 가격 범위" },
];





const SIDEBAR_MENU6_ITEMS = [
  { id: 1, iconClass: "tradeicon-ticon_57", label: "붓" },
  { id: 2, iconClass: "tradeicon-ticon_59", label: "하이라이터" },
  { id: 3, iconClass: "tradeicon-ticon_60", label: "예측" },
  { id: 4, iconClass: "tradeicon-ticon_61", label: "봉패턴" },
  { id: 5, iconClass: "tradeicon-ticon_62", label: "고스트피드" },
  { id: 6, iconClass: "tradeicon-ticon_63", label: "프로젝션" },
  { id: 7, iconClass: "tradeicon-ticon_64", label: "앵커드 VWAP" },
  { id: 8, iconClass: "tradeicon-ticon_65", label: "픽스트 레인지 볼륨 프로화일" },
  { id: 9, iconClass: "tradeicon-ticon_66", label: "고정 볼륨 프로필" },
  { id: 10, iconClass: "tradeicon-ticon_67", label: "가격범위" },
  { id: 11, iconClass: "tradeicon-ticon_68", label: "기간" },
  { id: 12, iconClass: "tradeicon-ticon_69", label: "날짜 및 가격 범위" },
];





const ChartSideMenu = () => {


  // State for each dropdown
  const [selectedChartType1, setSelectedChartType1] = useState(localStorage.getItem('selectedChartType1') || null);
  const [selectedChartType2, setSelectedChartType2] = useState(localStorage.getItem('selectedChartType2') || null);
  const [selectedChartType3, setSelectedChartType3] = useState(localStorage.getItem('selectedChartType3') || null);
  const [selectedChartType4, setSelectedChartType4] = useState(localStorage.getItem('selectedChartType4') || null);
  const [selectedChartType5, setSelectedChartType5] = useState(localStorage.getItem('selectedChartType5') || null);
  const [selectedChartType6, setSelectedChartType6] = useState(localStorage.getItem('selectedChartType6') || null);

  // Handle item selection for each dropdown and save it in localStorage
  const handleChartTypeSelect = (dropdown, item) => {
    // Update selected state based on the dropdown
    if (dropdown === 1) {
      setSelectedChartType1(item.id);
      localStorage.setItem('selectedChartType1', item.id);
    } else if (dropdown === 2) {
      setSelectedChartType2(item.id);
      localStorage.setItem('selectedChartType2', item.id);
    } else if (dropdown === 3) {
      setSelectedChartType3(item.id);
      localStorage.setItem('selectedChartType3', item.id);
    } else if (dropdown === 4) {
      setSelectedChartType4(item.id);
      localStorage.setItem('selectedChartType4', item.id);
    } else if (dropdown === 5) {
      setSelectedChartType5(item.id);
      localStorage.setItem('selectedChartType5', item.id);
    } else if (dropdown === 6) {
      setSelectedChartType6(item.id);
      localStorage.setItem('setSelectedChartType6', item.id);
    }
  };



  return (
    <>
      <div className="fixChart_SideMenu border-t-[1px]  border-l-0 border-t-0 border-solid border-Line pl-[16px] pr-[16px] py-2">
        <div className="d-grid grid-cols-[auto_min-content] align-items-start h-full">
          <div className="d-flex align-items-center relative mr-[24px]">


            <div className="d-flex flex-row items-center h-full w-full gap-[--space-m] [&::-webkit-scrollbar]:hidden">
              <div className="d-flex align-items-center gap-[--space-m]">
                <div className="!ml-[0px]">
                  <div className="bn-flex">
                    <div className="bn-flex justify-content-center mx-1 icondrop_menu flex-column">
                        
                            {/* First Dropdown */}
                            <DropdownButton
                              align={{ lg: 'end' }}
                              as={ButtonGroup}
                              title={
                                <span className={`font-i-side trade_icon ${selectedChartType1 ? SIDEBAR_MENU1_ITEMS.find(item => item.id === selectedChartType1)?.iconClass : 'tradeicon-ticon_205'}`} />
                              }
                              id="bg-nested-dropdown-1"
                              drop="end"
                              className="moreright-btn bn-flex justify-content-between"
                            >
                              {SIDEBAR_MENU1_ITEMS.slice(0,4).map((item) => (
                                <Dropdown.Item
                                  key={item.id}
                                  eventKey={item.id}
                                  active={selectedChartType1 === item.id}
                                  onClick={() => handleChartTypeSelect(1, item)}
                                >
                                  <div className="bn-flex justify-content-between align-items-center">
                                    <span className={`font-i trade_icon d-flextrade_icon ${item.iconClass}`}>{item.label}</span>
                                  </div>
                                </Dropdown.Item>
                              ))}

                              <div className="dropdown-divider"></div>


                              {SIDEBAR_MENU1_ITEMS.slice(4).map((item) => (
                                <Dropdown.Item
                                  key={item.id}
                                  eventKey={item.id}
                                  active={selectedChartType1 === item.id}
                                  onClick={() => handleChartTypeSelect(1, item)}
                                >
                                  <div className="bn-flex justify-content-between align-items-center">
                                    <span className={`font-i trade_icon d-flextrade_icon ${item.iconClass}`}>{item.label}</span>
                                  </div>
                                </Dropdown.Item>
                              ))}

                            </DropdownButton>

                            {/* Second Dropdown */}
                            <DropdownButton
                              align={{ lg: 'end' }}
                              as={ButtonGroup}
                              title={
                                <span className={`font-i-side trade_icon ${selectedChartType2 ? SIDEBAR_MENU2_ITEMS.find(item => item.id === selectedChartType2)?.iconClass : 'tradeicon-ticon_165'}`} />
                              }
                              id="bg-nested-dropdown-2"
                              drop="end"
                              className="moreright-btn bn-flex justify-content-between"
                            >
                              {/* 라인 Section */}
                              <div className="px-3 py-2 text-muted text-sm">라인</div>
                              {SIDEBAR_MENU2_ITEMS.slice(0, 9).map((item) => (
                                <Dropdown.Item
                                  key={item.id}
                                  eventKey={item.id}
                                  active={selectedChartType2 === item.id}
                                  onClick={() => handleChartTypeSelect(2, item)}
                                >
                                  <div className="bn-flex justify-content-between align-items-center">
                                    <span className={`font-i trade_icon d-flextrade_icon ${item.iconClass}`}>{item.label}</span>
                                  </div>
                                </Dropdown.Item>
                              ))}

                              <div className="dropdown-divider"></div>

                              {/* 채널 Section */}
                              <div className="px-3 py-2 text-muted text-sm">채널</div>
                              {SIDEBAR_MENU2_ITEMS.slice(9, 13).map((item) => (
                                <Dropdown.Item
                                  key={item.id}
                                  eventKey={item.id}
                                  active={selectedChartType2 === item.id}
                                  onClick={() => handleChartTypeSelect(2, item)}
                                >
                                  <div className="bn-flex justify-content-between align-items-center">
                                    <span className={`font-i trade_icon d-flextrade_icon ${item.iconClass}`}>{item.label}</span>
                                  </div>
                                </Dropdown.Item>
                              ))}

                              <div className="dropdown-divider"></div>

                               {/* 피치포크 Section */}
                               <div className="px-3 py-2 text-muted text-sm">피치포크</div>
                               {SIDEBAR_MENU2_ITEMS.slice(13).map((item) => (
                                <Dropdown.Item
                                  key={item.id}
                                  eventKey={item.id}
                                  active={selectedChartType2 === item.id}
                                  onClick={() => handleChartTypeSelect(2, item)}
                                >
                                  <div className="bn-flex justify-content-between align-items-center">
                                    <span className={`font-i trade_icon d-flextrade_icon ${item.iconClass}`}>{item.label}</span>
                                  </div>
                                </Dropdown.Item>
                              ))}



                            </DropdownButton>



                            <DropdownButton
                              align={{lg: 'end'}}
                              as={ButtonGroup}
                              title={
                                <span className={`font-i-side trade_icon ${selectedChartType3 ? SIDEBAR_MENU3_ITEMS.find(item => item.id === selectedChartType3)?.iconClass : 'tradeicon-ticon_134'}`} />
                              }
                              id="bg-nested-dropdown"
                              drop="end"
                              className="moreright-btn bn-flex justify-content-between"
                            >
                              {/* 피보나치 Section */}
                              <div className="px-3 py-2 text-muted text-sm">피보나치</div>
                              {SIDEBAR_MENU3_ITEMS.slice(0, 11).map((item) => (
                                <Dropdown.Item
                                  key={item.id}
                                  eventKey={item.id}
                                  active={selectedChartType3 === item.id}
                                  onClick={() => handleChartTypeSelect(3, item)}
                                >
                                  <div className="bn-flex justify-content-between align-items-center">
                                    <span className={`font-i trade_icon d-flextrade_icon ${item.iconClass}`}>{item.label}</span>
                                  </div>
                                </Dropdown.Item>
                              ))}

                              <div className="dropdown-divider"></div>


                              {/* 간 Section */}
                              <div className="px-3 py-2 text-muted text-sm">간</div>
                              {SIDEBAR_MENU3_ITEMS.slice(11).map((item) => (
                                <Dropdown.Item
                                  key={item.id}
                                  eventKey={item.id}
                                  active={selectedChartType3 === item.id}
                                  onClick={() => handleChartTypeSelect(3, item)}
                                >
                                  <div className="bn-flex justify-content-between align-items-center">
                                    <span className={`font-i trade_icon d-flextrade_icon ${item.iconClass}`}>{item.label}</span>
                                  </div>
                                </Dropdown.Item>
                              ))}


                             

                            </DropdownButton>



                            <DropdownButton
                              align={{lg: 'end'}}
                              as={ButtonGroup}
                              title={
                                <span className={`font-i-side trade_icon ${selectedChartType4 ? SIDEBAR_MENU4_ITEMS.find(item => item.id === selectedChartType4)?.iconClass : 'tradeicon-ticon_84'}`} />
                              }
                              id="bg-nested-dropdown"
                              drop="end"
                              className="moreright-btn bn-flex justify-content-between"
                            >

                              {/* 패턴 Section */}
                              <div className="px-3 py-2 text-muted text-sm">패턴</div>
                              {SIDEBAR_MENU4_ITEMS.slice(0, 5).map((item) => (
                                <Dropdown.Item
                                  key={item.id}
                                  eventKey={item.id}
                                  active={selectedChartType4 === item.id}
                                  onClick={() => handleChartTypeSelect(4, item)}
                                >
                                  <div className="bn-flex justify-content-between align-items-center">
                                    <span className={`font-i trade_icon d-flextrade_icon ${item.iconClass}`}>{item.label}</span>
                                  </div>
                                </Dropdown.Item>
                              ))}

                              <div className="dropdown-divider"></div>


                              {/* 엘리엇 웨이브 Section */}
                              <div className="px-3 py-2 text-muted text-sm">엘리엇 웨이브</div>
                              {SIDEBAR_MENU4_ITEMS.slice(5, 10).map((item) => (
                                <Dropdown.Item
                                  key={item.id}
                                  eventKey={item.id}
                                  active={selectedChartType4 === item.id}
                                  onClick={() => handleChartTypeSelect(4, item)}
                                >
                                  <div className="bn-flex justify-content-between align-items-center">
                                    <span className={`font-i trade_icon d-flextrade_icon ${item.iconClass}`}>{item.label}</span>
                                  </div>
                                </Dropdown.Item>
                              ))}


                              <div className="dropdown-divider"></div>


                              {/* 사이클 Section */}
                              <div className="px-3 py-2 text-muted text-sm">사이클</div>
                              {SIDEBAR_MENU4_ITEMS.slice(10).map((item) => (
                                <Dropdown.Item
                                  key={item.id}
                                  eventKey={item.id}
                                  active={selectedChartType4 === item.id}
                                  onClick={() => handleChartTypeSelect(4, item)}
                                >
                                  <div className="bn-flex justify-content-between align-items-center">
                                    <span className={`font-i trade_icon d-flextrade_icon ${item.iconClass}`}>{item.label}</span>
                                  </div>
                                </Dropdown.Item>
                              ))}
                            </DropdownButton>



                            <DropdownButton
                              align={{lg: 'end'}}
                              as={ButtonGroup}
                              title={
                                <span className={`font-i-side trade_icon ${selectedChartType5 ? SIDEBAR_MENU5_ITEMS.find(item => item.id === selectedChartType5)?.iconClass : 'tradeicon-ticon_57'}`} />
                              }
                              id="bg-nested-dropdown"
                              drop="end"
                              className="moreright-btn bn-flex justify-content-between"
                            >
                              
                              {/* 프로젝션 Section */}
                              <div className="px-3 py-2 text-muted text-sm">프로젝션</div>
                              {SIDEBAR_MENU5_ITEMS.slice(0, 7).map((item) => (
                                <Dropdown.Item
                                  key={item.id}
                                  eventKey={item.id}
                                  active={selectedChartType5 === item.id}
                                  onClick={() => handleChartTypeSelect(5, item)}
                                >
                                  <div className="bn-flex justify-content-between align-items-center">
                                    <span className={`font-i trade_icon d-flextrade_icon ${item.iconClass}`}>{item.label}</span>
                                  </div>
                                </Dropdown.Item>
                              ))}

                              <div className="dropdown-divider"></div>


                              {/* 볼륨-기반 Section */}
                              <div className="px-3 py-2 text-muted text-sm">볼륨-기반</div>
                              {SIDEBAR_MENU5_ITEMS.slice(6, 8).map((item) => (
                                <Dropdown.Item
                                  key={item.id}
                                  eventKey={item.id}
                                  active={selectedChartType5 === item.id}
                                  onClick={() => handleChartTypeSelect(5, item)}
                                >
                                  <div className="bn-flex justify-content-between align-items-center">
                                    <span className={`font-i trade_icon d-flextrade_icon ${item.iconClass}`}>{item.label}</span>
                                  </div>
                                </Dropdown.Item>
                              ))}


                              <div className="dropdown-divider"></div>


                              {/* 계측기 Section */}
                              <div className="px-3 py-2 text-muted text-sm">계측기</div>
                              {SIDEBAR_MENU5_ITEMS.slice(8).map((item) => (
                                <Dropdown.Item
                                  key={item.id}
                                  eventKey={item.id}
                                  active={selectedChartType5 === item.id}
                                  onClick={() => handleChartTypeSelect(5, item)}
                                >
                                  <div className="bn-flex justify-content-between align-items-center">
                                    <span className={`font-i trade_icon d-flextrade_icon ${item.iconClass}`}>{item.label}</span>
                                  </div>
                                </Dropdown.Item>
                              ))}


                            </DropdownButton>



                            <DropdownButton
                              align={{lg: 'end'}}
                              as={ButtonGroup}
                              title={
                                <span className={`font-i-side trade_icon ${selectedChartType6 ? SIDEBAR_MENU5_ITEMS.find(item => item.id === selectedChartType6)?.iconClass : 'tradeicon-ticon_31'}`} />
                              }
                              id="bg-nested-dropdown"
                              drop="end"
                              className="moreright-btn bn-flex justify-content-between"
                            >
                             

                              {/* 프로젝션 Section */}
                              <div className="px-3 py-2 text-muted text-sm">프로젝션</div>
                              {SIDEBAR_MENU6_ITEMS.slice(0, 7).map((item) => (
                                <Dropdown.Item
                                  key={item.id}
                                  eventKey={item.id}
                                  active={selectedChartType6 === item.id}
                                  onClick={() => handleChartTypeSelect(6, item)}
                                >
                                  <div className="bn-flex justify-content-between align-items-center">
                                    <span className={`font-i trade_icon d-flextrade_icon ${item.iconClass}`}>{item.label}</span>
                                  </div>
                                </Dropdown.Item>
                              ))}

                              <div className="dropdown-divider"></div>


                              {/* 볼륨-기반 Section */}
                              <div className="px-3 py-2 text-muted text-sm">볼륨-기반</div>
                              {SIDEBAR_MENU6_ITEMS.slice(6, 8).map((item) => (
                                <Dropdown.Item
                                  key={item.id}
                                  eventKey={item.id}
                                  active={selectedChartType6 === item.id}
                                  onClick={() => handleChartTypeSelect(6, item)}
                                >
                                  <div className="bn-flex justify-content-between align-items-center">
                                    <span className={`font-i trade_icon d-flextrade_icon ${item.iconClass}`}>{item.label}</span>
                                  </div>
                                </Dropdown.Item>
                              ))}


                              <div className="dropdown-divider"></div>


                              {/* 계측기 Section */}
                              <div className="px-3 py-2 text-muted text-sm">계측기</div>
                              {SIDEBAR_MENU6_ITEMS.slice(8).map((item) => (
                                <Dropdown.Item
                                  key={item.id}
                                  eventKey={item.id}
                                  active={selectedChartType6 === item.id}
                                  onClick={() => handleChartTypeSelect(6, item)}
                                >
                                  <div className="bn-flex justify-content-between align-items-center">
                                    <span className={`font-i trade_icon d-flextrade_icon ${item.iconClass}`}>{item.label}</span>
                                  </div>
                                </Dropdown.Item>
                              ))}



                            </DropdownButton>



                            <DropdownButton
                              align={{lg: 'end'}}
                              as={ButtonGroup}
                              title={<span className="font-i-side trade_icon tradeicon-ticon_12" />}
                              id="bg-nested-dropdown"
                              drop="end"
                              className="moreright-btn bn-flex justify-content-between"
                            >
                              <Dropdown.Item eventKey="1"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_26 d-flextrade_icon">봉</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              <Dropdown.Item eventKey="2"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_27 d-flextrade_icon">캔들</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                            </DropdownButton>
                            




     


                            <div className='dropdown-divider'></div>


                            <DropdownButton
                              align={{lg: 'end'}}
                              as={ButtonGroup}
                              title={<span className="font-i-side trade_icon tradeicon-ticon_7" />}
                              id="bg-nested-dropdown"
                              drop="end"
                              className="moreright-btn bn-flex justify-content-between"
                            >
                              <Dropdown.Item eventKey="1"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_26 d-flextrade_icon">봉</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              <Dropdown.Item eventKey="2"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_27 d-flextrade_icon">캔들</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                            </DropdownButton>


                            <DropdownButton
                              align={{lg: 'end'}}
                              as={ButtonGroup}
                              title={<span className="font-i-side trade_icon tradeicon-ticon_8" />}
                              id="bg-nested-dropdown"
                              drop="end"
                              className="moreright-btn bn-flex justify-content-between"
                            >
                              <Dropdown.Item eventKey="1"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_26 d-flextrade_icon">봉</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              <Dropdown.Item eventKey="2"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_27 d-flextrade_icon">캔들</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                            </DropdownButton>



                            <div className='dropdown-divider'></div>




                            <DropdownButton
                              align={{lg: 'end'}}
                              as={ButtonGroup}
                              title={<span className="font-i-side trade_icon tradeicon-ticon_9" />}
                              id="bg-nested-dropdown"
                              drop="end"
                              className="moreright-btn bn-flex justify-content-between"
                            >
                              <Dropdown.Item eventKey="1"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_26 d-flextrade_icon">봉</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                              <Dropdown.Item eventKey="2"><div className="bn-flex justify-content-between align-items-center"><span className="font-i trade_icon tradeicon-ticon_27 d-flextrade_icon">캔들</span><span className="font-i trade_icon tradeicon-ticon_0 star_icon"></span></div></Dropdown.Item>
                            </DropdownButton>


     
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
