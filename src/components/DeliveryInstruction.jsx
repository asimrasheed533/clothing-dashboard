import { X } from "react-feather";

export default function DeliveryInstruction({ setShow }) {
  return (
    <div className="customer__detail__popup">
      <div className="customer__detail__popup__overlay">
        <div className="customer__detail__popup__overlay__card">
          <button
            onClick={() => setShow(false)}
            className="customer__detail__popup__overlay__card__close"
          >
            <X size={20} color="currentColor" />
          </button>
          DeliveryInstruction
          <div className="customer__detail__popup__overlay__card__detail">
            <input
              type="text"
              placeholder=" Enter Delivery Instruction
              "
              autoComplete="off"
              className="customer__detail__popup__overlay__card__deatil__email"
            />
          </div>
          <div className="customer__detail__popup__overlay__card__submit">
            <button onClick={() => setShow(false)}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
