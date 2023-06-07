import { ChevronRight } from "react-feather";
import { Link } from "react-router-dom";
import { useBackLocation } from "../global";

export default function DiscountPopup({ setShow }) {
  const backLocation = useBackLocation();
  return (
    <div className="customer__detail__popup">
      <div className="customer__detail__popup__overlay">
        <div className="customer__detail__popup__overlay__card">
          <div className="customer__detail__popup__overlay__card__heading">
            Contact information
          </div>
          <div className="customer__detail__popup__overlay__card__detail">
            <Link
              to={backLocation + "/add"}
              state={{ type: "delivery" }}
              className="customer__detail__popup__overlay__card__detail__entry"
            >
              Delivery Discount
              <ChevronRight />
            </Link>
            <Link
              to={backLocation + "/add"}
              state={{ type: "product" }}
              className="customer__detail__popup__overlay__card__detail__entry"
            >
              Product Discount
              <ChevronRight />
            </Link>
          </div>
          <div className="customer__detail__popup__overlay__card__submit__discount">
            <button onClick={() => setShow(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
