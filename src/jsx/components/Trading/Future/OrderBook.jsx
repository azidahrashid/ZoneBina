import React, { useState } from "react";
import DropDownUI from "../../bootstrap/DropDownUi";

const tableData = [
  { price: "20972.43", Size: "0.0588", total: "5.8312" },
  { price: "19972.43", Size: "0.0488", total: "6.8312" },
  { price: "16572.43", Size: "0.0488", total: "7.8312" },
  { price: "20972.43", Size: "0.0114", total: "8.1212" },
  { price: "19972.43", Size: "0.0216", total: "6.9852" },
];

// Separate data into Ask and Bid groups
const askData = tableData.filter((_, index) => index % 2 === 0);
const bidData = tableData.filter((_, index) => index % 2 !== 0);

function OrderBook() {
  const [mode, setMode] = useState("default");
  const [selectedValue, setSelectedValue] = useState("0.1");

  const handleDropdownChange = (value) => {
    setSelectedValue(value);
  };

  const maxSize = Math.max(...tableData.map((item) => parseFloat(item.total)));

  return (
    <div className="orderbook-list tradeview-ob-container">
      <div className="orderbook-header">
        <div className="orderbook-header-tips">
          <button
            className="ob-type-button"
            data-testid="defaultModeButton"
            style={{ opacity: mode === "default" ? 1 : 0.5 }}
            onClick={() => setMode("default")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2.66663 2.66699L7.33329 2.66699L7.33329 7.33366L2.66663 7.33366L2.66663 2.66699Z" fill="var(--color-Sell)"></path>
                  <path d="M2.66663 8.66699L7.33329 8.66699L7.33329 13.3337L2.66663 13.3337L2.66663 8.66699Z" fill="var(--color-Buy)"></path>
                  <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.66663 2.66699L13.3333 2.66699L13.3333 5.33366L8.66663 5.33366L8.66663 2.66699ZM8.66663 6.66699L13.3333 6.66699L13.3333 9.33366L8.66663 9.33366L8.66663 6.66699ZM13.3333 10.667L8.66663 10.667L8.66663 13.3337L13.3333 13.3337L13.3333 10.667Z"
                      fill="var(--color-IconNormal)"
                  ></path>
              </svg>
          </button>
          <button
            className="ob-type-button"
            data-testid="sellModeButton"
            style={{ opacity: mode === "sellmode" ? 1 : 0.5 }}
            onClick={() => setMode("sellmode")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g>
                      <path d="M2.66663 2.66699L7.33329 2.66699L7.33329 13.3337L2.66663 13.3337L2.66663 2.66699Z" fill="var(--color-Buy)"></path>
                      <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.66663 2.66699L13.3333 2.66699L13.3333 5.33366L8.66663 5.33366L8.66663 2.66699ZM8.66663 6.66699L13.3333 6.66699L13.3333 9.33366L8.66663 9.33366L8.66663 6.66699ZM13.3333 10.667L8.66663 10.667L8.66663 13.3337L13.3333 13.3337L13.3333 10.667Z"
                          fill="var(--color-IconNormal)"
                      ></path>
                  </g>
              </svg>
          </button>
          <button
            className="ob-type-button"
            data-testid="buyModeButton"
            style={{ opacity: mode === "buymode" ? 1 : 0.5 }}
            onClick={() => setMode("buymode")}
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g>
                    <path d="M2.66663 2.66699L7.33329 2.66699L7.33329 13.3337L2.66663 13.3337L2.66663 2.66699Z" fill="var(--color-Sell)"></path>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.66663 2.66699L13.3333 2.66699L13.3333 5.33366L8.66663 5.33366L8.66663 2.66699ZM8.66663 6.66699L13.3333 6.66699L13.3333 9.33366L8.66663 9.33366L8.66663 6.66699ZM13.3333 10.667L8.66663 10.667L8.66663 13.3337L13.3333 13.3337L13.3333 10.667Z"
                        fill="var(--color-IconNormal)"
                    ></path>
                </g>
            </svg>
          </button>
        </div>
        { <div className="orderbook-tickSize" >
          <div className="bn-tooltips-wrap" >
                  <div className="bn-tooltips-ele" >
                      <div className="tick-content" > 

                        {/* { <Dropdown>
                            <Dropdown.Toggle className="btn btn-primary btn-outline-primary left-radius p-0" currentValue="10" onValueChange={handleDropdownChange} >
                              {selectedValue}
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end">
                              <Dropdown.Item
                                onClick={() => handleSelect("1")}
                                active={selectedValue === "1"} // Highlights the selected item
                              >
                                1
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleSelect("10")}
                                active={selectedValue === "10"} // Highlights the selected item
                              >
                                10
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleSelect("50")}
                                active={selectedValue === "50"} // Highlights the selected item
                              >
                                50
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleSelect("100")}
                                active={selectedValue === "100"} // Highlights the selected item
                              >
                                100
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown> } */}

                        { <DropDownUI
                          options={["0.1", "1", "10", "50" , "100"]}
                          placeholder="0.1" // Custom placeholder text
                          onValueChange={handleDropdownChange}
                        />}
                      </div>
                  </div>
                  <div className="bn-bubble bn-bubble__unset data-shadow data-font-14 bn-tooltips"  style={{transform: 'translate(0px, 0px)' , top:'100%', right: '0px'}}>
                      <div className="bn-bubble-content"  style={{marginTop: '4px'}}></div>
                  </div>
              </div>
          </div> }
      </div>
     

      {/* Orderbook Ask */}
      {(mode === "default" || mode === "buymode") && (
        <div className="orderbook-ask">
          <table className="table shadow-hover orderbookTable">
            <thead>
              <tr>
                <th>가격 (USDT)</th>
                <th className="t-right">수량 (USDT)</th>
                <th className="t-right">합계수량 (USDT)</th>
              </tr>
            </thead>
            <tbody>
              {askData.map((data, index) => (
                <tr key={index} className="order-row">
                  <td><span className="text-danger">{data.price}</span></td>
                  <td className="t-right">{data.Size}</td>
                  <td className="t-right" style={{ position: "relative" }}>
                  <div
                      className="progress-bar ask-bar border-radius-0"
                      style={{
                        width: `${(parseFloat(data.total) / maxSize) * 100}%`,
                        position: "absolute",
                        right: 0,
                        top: 0,
                        height: "100%",
                        backgroundColor: "rgba(255, 0, 0, 0.05)",
                        zIndex: 0,
                      }}
                    >
                  </div>
                    <span>{data.total}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}



      {/* Orderbook Ticker */}
      <div className="orderbook-ticker px-0 lg:px-[15px] with-ratio" >
        <div className="contractPrice mr-[4px] status-green" >
            <div className="mr-[4px]" >100029.3</div>
            <svg className="bn-svg arrow-icon text-[16px] status-green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{transform: 'rotate(180deg)'}}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20.999l7.071-7.071-1.768-1.768-4.054 4.055V2.998h-2.5v13.216L6.696 12.16l-1.768 1.768 7.07 7.071H12z" fill="currentColor"></path>
            </svg>
        </div>
        <div className="markPrice" >
            <div className="bn-tooltips-wrap bn-tooltips-web text-TertiaryText hover:text-PrimaryYellow" ><div className="bn-tooltips-ele" >100028.6</div></div>
        </div>
        <div ></div>
    </div>

  {/*     
    <div className="orderbook-ticker px-0 lg:px-[15px] with-ratio" >
        <div className="contractPrice mr-[4px] status-sell" >
            <div className="mr-[4px]" >99797.2</div>
            <svg className="bn-svg arrow-icon text-[16px] status-sell" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20.999l7.071-7.071-1.768-1.768-4.054 4.055V2.998h-2.5v13.216L6.696 12.16l-1.768 1.768 7.07 7.071H12z" fill="currentColor"></path>
            </svg>
        </div>
        <div className="markPrice" >
            <div className="bn-tooltips-wrap bn-tooltips-web text-TertiaryText hover:text-PrimaryYellow" ><div className="bn-tooltips-ele" >99827.7</div></div>
        </div>
        <div ></div>
    </div> */}


      {/* Orderbook Bid */}
      {(mode === "default" || mode === "sellmode") && (
        <div className="orderbook-bid">
          <table className="table shadow-hover orderbookTable">
            <thead>
              <tr>
                <th>가격 (USDT)</th>
                <th className="t-right">수량 (USDT)</th>
                <th className="t-right">합계수량 (USDT)</th>
              </tr>
            </thead>
            <tbody>
              {bidData.map((data, index) => (
                <tr key={index} className="order-row">
                  <td><span className="text-success">{data.price}</span></td>
                  <td className="t-right">{data.Size}</td>
                  <td className="t-right" style={{ position: "relative" }}>
                    <div
                      className="progress-bar bid-bar border-radius-0"
                      style={{
                        width: `${(parseFloat(data.total) / maxSize) * 100}%`,
                        position: "absolute",
                        right: 0,
                        top: 0,
                        height: "100%",
                        backgroundColor: "rgba(0, 255, 0, 0.05)",
                        zIndex: 0,
                      }}
                    ></div>
                    <span>{data.total}</span>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}


<div className="orderbook-compare pt-[4px] pr-[8px] md:px-0 lg:px-[16px]" >
          <div className="compare-direction" >
              <div >매수 : B</div>
              <div className="compare-percent-buy mx-1" >45.49%</div>
          </div>
          <div className="compare-bar" >
              <div className="compare-bids-bar"  style={{width: '45.49%'}}></div>
              <div className="compare-asks-bar"  style={{width: '54.51%'}}></div>
          </div>
          <div className="compare-direction" >
              <div className="compare-percent-sell mx-1" >54.51%</div>
              <div >매도 : S</div>
          </div>
      </div>


    </div>
  );
}

export default OrderBook;
