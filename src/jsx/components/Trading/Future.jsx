import React, {useEffect, useState } from 'react';
import {Dropdown, Tab, Nav} from 'react-bootstrap';
// import {Link} from 'react-router-dom';
import {BadgeDollarSign, X} from 'lucide-react';


import OrderTab from './Future/OrderTab';
import ChartTab from './Future/ChartTab';
import ChartSideMenu from './Future/Chart';
import LimitTab from './Future/LimitTab';
import MarketTab from './Future/MarketTab';
import TPSLTab from './Future/TPSLTab';
// import InfoTab from './Future/InfoTab';
// import TradingDataTab from './Future/TradingDataTab';
import OrderBook from './Future/OrderBook';
// import { Checkboard } from 'react-color';

import ModalLeverage from "../Modal/ModalLeverage"
import ModalMargin from "../Modal/ModalMargin"
import PositionTab from './Future/PositionTab';
import OpenOrdersTab from './Future/OpenOrdersTab';
import PositionHistoryTab from './Future/PositionHistoryTab';


const Future = () =>{
    const [istradebarOpen, settradebarOpen] = useState(true);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 1440) {
          settradebarOpen(false); // Close tradebar by default on small screens
        } else {
          settradebarOpen(true);
        }
      };
  
      window.addEventListener("resize", handleResize);
      handleResize(); // Initial check
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <>
            <div className="row">
                <div className="col-xxl-8 future_main_section">
                    <div className="card">
                        
                        <div className="card-body pt-0 px-0">   
                                 <Tab.Container defaultActiveKey="BCoinChart">
                                    <div className="card-header  pb-0 flex-wrap px-1 py-0">
                                        <>
                                            <Nav className="order nav nav-tabs pb-0 pt-0 border-0">
                                                <Nav.Link as="button"  eventKey="BCoinChart"  type="button">Chart</Nav.Link>
                                                {/* <Nav.Link as="button"  eventKey="Info" type="button">Info</Nav.Link> */}
                                                {/* <Nav.Link as="button"  eventKey="TradingDataTab" type="button">Trading Data</Nav.Link> */}
                                            </Nav>
                                        </>
                                    </div>
                                    <div className="card-body pt-0 pb-0 px-0">
                                        <Tab.Content >
                                            <Tab.Pane eventKey="BCoinChart">
                                                <ChartTab />
                                                <ChartSideMenu/>
                                            </Tab.Pane>  
                                            {/* <Tab.Pane eventKey="Info">
                                                <InfoTab />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="TradingDataTab">
                                                <TradingDataTab/>
                                            </Tab.Pane> */}
                                        </Tab.Content>           
                                    </div>
                                </Tab.Container> 
                                                 
                            {/* <div className="d-flex align-items-center justify-content-between flex-wrap">
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                    <div className="price-content">
                                        <span className="fs-18 d-block mb-2">Price</span>
                                        <h4 className="fs-20 font-w600">$9,542.39</h4>
                                    </div>
                                    <div className="price-content">
                                        <span className="fs-14 d-block mb-2">24h% change</span>
                                        <h4 className="font-w600 text-success">1.64%<i className="fa-solid fa-caret-up ms-1 text-success"></i></h4>
                                    </div>
                                    <div className="price-content">
                                        <span className="fs-14 d-block mb-2">Volume (24h)</span>
                                        <h4 className="font-w600">$47.22B</h4>
                                    </div>
                                    <div className="price-content">
                                        <span className="fs-14 d-block mb-2">Market Cap</span>
                                        <h4 className="font-w600">$219.24B</h4>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <h4 className="me-5 font-w600 mb-0"><span className="text-success me-2">BUY</span> $5,673</h4>
                                    <h4 className="font-w600 mb-0"><span className="text-danger me-2">SELL</span> $5,982</h4>
                                </div>
                            </div>	                            
                            <BitCoinChart /> */}
                        </div>
                    </div>
                </div>
                <div className="col-xxl-2 future_orderbook_section">
                    <div className="card">
                        <div className="card-header  pb-0 flex-wrap px-1 py-0">
                            <div className="mb-2 mt-2 ms-2">
                                <h6 className="heading m-0">호가</h6>
                            
                            </div>


                        {/* <Dropdown className="custom-dropdown mb-0">

                            <Dropdown.Toggle as="div" className="btn sharp tp-btn i-false btn-primary">
                                <svg className="bn-svg cursor-pointer text-IconNormal hover:text-TertiaryText text-[16px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10h4v4h-4v-4zM17 10h4v4h-4v-4zM3 10h4v4H3v-4z" fill="currentColor"></path></svg>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu-end mb-0" align="end" style={{ width: '250px' }}> */}
                                {/* Header */}
                                {/* <div className="headerDropdown" style={{ padding: '8px 16px' }}>
                                    Orderbook Preference
                                </div> */}

                                {/* Items with Checkboxes */}
                                {/* <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                    <div className="dropdown-item-checkbox px-3 py-2">
                                        <label className="form-check-label d-flex align-items-center">
                                            <input type="checkbox" className="form-check-input me-2" /> Show Buy/Sell Ratio
                                        </label>
                                    </div>
                                    <div className="dropdown-item-checkbox px-3 py-2">
                                        <label className="form-check-label d-flex align-items-center">
                                            <input type="checkbox" className="form-check-input me-2" />Rounding
                                        </label>
                                    </div>
                            
                                </div>
                            </Dropdown.Menu>
                        </Dropdown> */}

                        </div>
                        <div className="card-body pt-2 pb-0">
                            <OrderBook />
                        </div>
                    </div>
                </div>
                <div className={`col-xxl-2 future_trade_section fixed-tradebar ${istradebarOpen ? "open" : "closed"}`}>

                    <button className="tradebar-toggle-btn mx-1" onClick={() => settradebarOpen(!istradebarOpen)}>
                        {istradebarOpen ? "" : ""} 
                        <div className=" d-flex justify-content-between gap-2" >
                            <a className="btn btn-success py-1 text-uppercase flex-grow-1" href="#/">매수/Long</a>
                            <a className="btn btn-danger py-1 text-uppercase flex-grow-1" href="#/">매도/Short</a>
                        </div>
                    </button>
                    
                    <div className={`card ${istradebarOpen ? "open" : "closed"}`}>
                        <div className="card-header p-0 placeOrderTitle">
                            <div className="card-header  pb-0 flex-wrap px-1 py-0">
                                <div className="mb-2 mt-2 ms-2">
                                    <h6 className="heading m-0">주문</h6>
                                
                                </div>
                            </div>
                        </div>
                        <div className="card-header p-0 d-flex justify-content-between align-items-center leverage_title">
                                <div className="mb-1 mt-2 ms-2 d-flex gap-[8px] bn-tooltips-wrap">
                                    <div className="bn-tooltips-ele">
                                    <ModalMargin />
                                    </div>
                                    <div className="bn-tooltips-ele">
                                    <ModalLeverage />
                                    </div>
                                </div>
                                <div class="closebtn_future_trade_section mx-2" onClick={() => settradebarOpen(!istradebarOpen)}><X size={18}/></div>
                        </div>
                      
                        <div className="card-body pt-2">
                                 <Tab.Container defaultActiveKey="FeatureTrade_Limit">
                                    <div className="card-header  pb-0 flex-wrap px-1 py-0 border-0">
                                        <>
                                            <Nav className="order nav nav-tabs pb-0 pt-0">
                                                <Nav.Link as="button"  eventKey="FeatureTrade_Limit"  type="button">지정가</Nav.Link>
                                                <Nav.Link as="button"  eventKey="FeatureTrade_Market" type="button">시장가</Nav.Link>
                                                <Nav.Link as="button"  eventKey="FeatureTrade_TPSL" type="button">TP/SL</Nav.Link>
                                            </Nav>
                                        </>
                                    </div>
                                    <div className="card-body pt-0 pb-0">
                                        <Tab.Content >
                                            <Tab.Pane eventKey="FeatureTrade_Limit">
                                                <LimitTab />
                                            </Tab.Pane>  
                                             <Tab.Pane eventKey="FeatureTrade_Market">
                                                <MarketTab />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="FeatureTrade_TPSL">
                                                <TPSLTab/>
                                            </Tab.Pane> 
                                        </Tab.Content>           
                                    </div>
                                </Tab.Container> 
                        </div>
                    </div>
                </div>

            </div>
            <div className="row future_tradeStatus_section">

                <div className="col-xl-12">
                    <div className="card">
                        <Tab.Container defaultActiveKey="Position">
                            <div className="card-header  pb-0 flex-wrap px-1 py-0 ">
                                <>
                                    <Nav className="order nav nav-tabs pb-0 pt-0 nav">
                                        <Nav.Link as="button"  eventKey="Position"  type="button" className="fw-bold bn-tab">진행중 포지션<span className="PositionsCount">({/* {positionCount}*/})</span></Nav.Link> 
                                        <Nav.Link as="button"  eventKey="OpenOrders"  type="button" className="fw-bold bn-tab">TP/SL 주문<span className="OrdersCount">({/*{orderCount}*/})</span></Nav.Link>
                                        <Nav.Link as="button"  eventKey="Order" type="button" className="fw-bold bn-tab">주문내역</Nav.Link>
                                        <Nav.Link as="button"  eventKey="PositionHistory" type="button" className="fw-bold bn-tab">트랜잭션 내역</Nav.Link>
                                    </Nav>
                                </>
                            </div>
                            <div className="card-body pt-0 pb-0">
                                <Tab.Content >
                                   
                                    <Tab.Pane eventKey="Position">
                                        <PositionTab />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="OpenOrders">
                                        <OpenOrdersTab />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Order">
                                        <OrderTab />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="PositionHistory">
                                        <PositionHistoryTab />
                                     </Tab.Pane>                       
                                </Tab.Content>           
                            </div>
                        </Tab.Container>           
                    </div>           
                </div>           
            </div>
        </>
    )
}
export default Future;