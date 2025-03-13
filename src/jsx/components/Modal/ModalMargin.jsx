import React, { useState } from "react";
import Modal from "./DModal"; 


const ModalMargin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
     
      <button type="button" className="btn btn-dark btn-xxs text-keep" onClick={openModal}>
            교차
      </button>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        modalId="ModalMargin"
        size="small"
        position="center"
      >
            <h3 className="text-xl text-SecondaryText fw-bold mb-4">마진 선택</h3>
            <div className="my-2 d-flex justify-content-start gap-1  align-items-center"><span className="text-black fw-bold fs-4" style={{ textTransform: "capitalize" }}>BTCUSDT</span><span class="badge-dark light badge badge-xs badgexs_title mx-1">Perp</span></div>
            <div class="my-3 d-flex justify-content-between gap-2 group_btn" ><a class="btn btn-outline-secondary py-3 text-uppercase flex-grow-1" href="/">교차</a><a class="btn btn-outline-secondary py-3 text-uppercase flex-grow-1" href="/">격리</a></div>
            <div className="descriptionContainer">
                <div className="description_details mb-2">
                    <div class="wraplist_title mb-1">
                            <p className="fw-bold text-keep fs-7 m-0">격리마진</p>
                        </div> 
                        <div className="wraplist_description">
                            <p className="m-0 text-keep"><span class="dot_symbol mx-1">•</span> 자신이 보유하고 있는 전체 자산과 관계없이 투자한 금액을 담보로 청산을 실행합니다.</p>
                            <p className="m-0 text-keep"><span class="dot_symbol mx-1">•</span>  예를 들어, 보유자산이 100USDT이며 50USDT를 롱에 매수했을때 : -100% 손실이 발생하면 50USDT를 손절하고 거래는 종료됩니다.</p> 
                        </div>
                </div>
                <div className="description_details mb-2">
                    <div class="wraplist_title mb-1">
                            <p className="fw-bold text-keep fs-7 m-0">교차마진</p>
                        </div> 
                        <div className="wraplist_description">
                            <p className="m-0 text-keep"><span class="dot_symbol mx-1">•</span> 자신이 투자한 금액과 상관없이 전체 자산을 담보로 청산을 실행합니다.</p>
                            <p className="m-0 text-keep"><span class="dot_symbol mx-1">•</span> 예를 들어, 보유자산이 100USDT이며 50USDT를 롱에 매수했을때 : -100% 손실이 발생했을때 거래가 종료되는게 아니라, -200%가되어 청산이되야 거래가 종료됩니다.</p> 
                        </div>
                </div>
            </div>
            <div class="modal_comfirmbtn_footer mt-4"><button className="btn btn-primary w-100">확인</button></div>          
      </Modal>
    </>
  );
};

export default ModalMargin;
