import { X } from "react-feather";

export default function DeliveryAdress({ setShow }) {
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
          <div className="customer__detail__popup__overlay__card__heading">
            DELIVERY ADDRESS
          </div>
          <div className="customer__detail__popup__overlay__card__detail">
            <input
              type="Name"
              placeholder="Enter Name "
              autoComplete="off"
              className="customer__detail__popup__overlay__card__deatil__email"
            />

            <input
              type="text"
              placeholder="Enter Adress"
              autoComplete="off"
              className="customer__detail__popup__overlay__card__deatil__email"
            />
            <input
              type="text"
              placeholder="Enter City"
              autoComplete="off"
              className="customer__detail__popup__overlay__card__deatil__email"
            />
            <input
              type="Number"
              placeholder="Enter Number"
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
