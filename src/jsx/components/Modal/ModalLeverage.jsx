import React, { useState } from "react";
import Modal from "./DModal"; 
import FutureTradeLeverageSlider from "../RangeSlider/FutureTradeLeverageSlider";

const ModalLeverage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
     
      <button type="button" className="btn btn-dark btn-xxs" onClick={openModal}>
            20x
      </button>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        modalId="ModalLeverage"
        size="small"
        position="center"
      >
          <h3 className="text-xl text-SecondaryText fw-bold mb-4">레버리지 설정</h3>
        
          <div class="my-3 d-flex justify-content-between gap-2 group_btn" >
              <FutureTradeLeverageSlider/>
          </div>
          <div className="descriptionContainer">
              <div className="description_details mb-2">
                      <div class="wraplist_title mb-1">
                          <p className="fw-bold text-keep fs-7 m-0">격리마진</p>
                      </div> 
                     
                      <div className="wraplist_description">
                          <p className="m-0 text-keep"><span class="dot_symbol mx-1">•</span> 레버리지는 적은 자산으로 더 큰 거래를 할수 있게하는 옵션이며, 고수익 및 고위험성이 존재합니다.</p>
                          <p className="m-0 text-keep"><span class="dot_symbol mx-1">•</span> 예를 들어, 100USDT를 10배의 레버리지로 롱에 매수했을때 : 10%가 오르면 10배인 100%의 수익이 발생하지만, 10%가 떨어지면 10배인 100%의 손실 즉 청산되게 됩니다.</p> 
                      </div>
              </div>
              
          </div>
          <div class="modal_comfirmbtn_footer mt-4"><button className="btn btn-primary w-100">확인</button></div>
      </Modal>
    </>
  );
};

export default ModalLeverage;
