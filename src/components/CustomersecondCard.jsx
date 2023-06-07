import { X } from "react-feather";

export default function CustomersecondCard({ setCustomer }) {
  return (
    <div className="customer__detail__popup">
      <div className="customer__detail__popup__overlay">
        <div className="customer__detail__popup__overlay__card">
          <button
            onClick={() => setCustomer(false)}
            className="customer__detail__popup__overlay__card__close"
          >
            <X size={20} color="currentColor" />
          </button>
          <div className="customer__detail__popup__overlay__card__heading">
            Contact information
          </div>
          <div className="customer__detail__popup__overlay__card__detail">
            <input
              type="email"
              placeholder="Enter email address"
              autoComplete="off"
              className="customer__detail__popup__overlay__card__deatil__email"
            />
            <input
              type="number"
              placeholder="Enter phone number"
              autoComplete="off"
              className="customer__detail__popup__overlay__card__deatil__email"
            />
          </div>
          <div className="customer__detail__popup__overlay__card__submit">
            <button onClick={() => setCustomer(false)}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
