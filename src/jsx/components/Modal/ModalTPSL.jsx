import React, { useState } from "react";
import Modal from "./DModal"; 
import{Plus} from "lucide-react";
import FutureTradeRangeSlider from "../RangeSlider/FutureTradeRangeSlider";
import DropDownUI from "../bootstrap/DropDownUi";

const ModalTPSL = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

   const handleDropdownChange = (value) => {};
  
      const [focusedInput, setFocusedInput] = useState(null);
      const handleInputFocus = (id) => {
          setFocusedInput(id);
      };
  
      const handleInputBlur = () => {
          setFocusedInput(null);
      };
  
  
  return (
    <>
     
 
      
      <button type="button" className="plus_icon btn table-btn-more  height20 px-3 d-flex align-items-center" onClick={openModal}><Plus size={14}/></button>

      <Modal 
         isOpen={isOpen}
         onClose={closeModal}
         modalId="ModalTPSL"
         size="custom"  
         position="center"
         customSize="TPSL-modal-xxs"  //  Pass a CSS class
      >
            <h3 className="text-xl text-SecondaryText fw-bold mb-4"></h3>
            <div className="my-2 d-flex justify-content-between gap-1  align-items-center"><div className="SecondaryBetweenText"><span className="text-muted  mb-4">코인종류</span></div><div className="SecondaryBetweenText"><span className="text-black mx-2">XRPUSDT</span><span className="text-black ">Perpetual</span></div></div>
            <div className="my-2 d-flex justify-content-between gap-1  align-items-center"><div className="SecondaryBetweenText"><span className="text-muted  mb-4">진입가격</span></div><div className="SecondaryBetweenText"><span className="text-black mx-2">XRPUSDT</span><span className="text-black ">Perpetual</span><span className="text-black ">123,456 USDT</span></div></div>
           
           
            {[
             { id: 231, inputId: "unitAmount-231" },
    
            ].map(({ id, inputId }) => (
                     <div className="descriptionContainer"   key={id}>
                        
                                    <div className="d-flex align-items-start justify-content-center mb-1 flex-column" key={id}>
                                        <span className="small text-muted">Take Profit</span>
                                        <div
                                            className={`input-group mb-2 ${
                                                focusedInput === `${inputId}-tp` ? "input-group-focus" : ""
                                            }`}
                                        >
                                            <input
                                                id={`${inputId}-tp`}
                                                type="text"
                                                className="form-control border-end-0"
                                                onFocus={() => handleInputFocus(`${inputId}-tp`)}
                                                onBlur={handleInputBlur}
                                            />
                                            <span className="btn-cur left-radius input-group-text fw-light textColored">
                                                <DropDownUI
                                                    options={["시장가", "현재가"]}
                                                    placeholder="시장가"
                                                    onValueChange={handleDropdownChange}
                                                />
                                            </span>
                                        </div>
                                    </div>


                                    <div style={{padding:'5px'}}><FutureTradeRangeSlider /></div>


                                    <div className="d-flex align-items-start justify-content-center mt-1 mb-1 flex-column">
                                        <span className="small text-muted">Stop Loss</span>
                                        <div
                                            className={`input-group mb-2 ${
                                                focusedInput === `${inputId}-sl` ? "input-group-focus" : ""
                                            }`}
                                        >
                                            <input
                                                id={`${inputId}-sl`}
                                                type="text"
                                                className="form-control border-end-0"
                                                onFocus={() => handleInputFocus(`${inputId}-sl`)}
                                                onBlur={handleInputBlur}
                                            />
                                            <span className="btn-cur left-radius input-group-text fw-light textColored">
                                                <DropDownUI
                                                    options={["Mark", "Limit"]}
                                                    placeholder="Mark"
                                                    onValueChange={handleDropdownChange}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{padding:'5px'}}><FutureTradeRangeSlider /></div>
                     </div>
             ))}


            <div class="modal_comfirmbtn_footer mt-4"><button className="btn btn-primary w-100">확인</button></div>          
      </Modal>
     
    </>
  );
};

export default ModalTPSL;
