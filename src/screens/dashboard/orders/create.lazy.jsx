import { Search, X } from "react-feather";

import CheckBox from "../../../components/CheckBox";
import { Link } from "../../../router";
import ProductBrowsePopup from "../../../components/ProductBrowsePopup";
import { product } from "../../../assets";
import { useBackLocation } from "../../../global";
import { useState } from "react";

export default function create() {
  const backLocation = useBackLocation();
  const [paymentDueLater, setPaymentDueLater] = useState(false);
  const [showProductBrowsePopup, setShowProductBrowsePopup] = useState(false);

  return (
    <>
      {showProductBrowsePopup && (
        <ProductBrowsePopup setShow={setShowProductBrowsePopup} />
      )}

      <div className="order__create">
        <div className="order__create__col">
          <div className="order__create__panel">
            <div className="order__create__panel__heading">Products</div>
            <div className="order__create__panel__form">
              <div className="order__create__panel__form__search">
                <Search size={20} color="currentColor" />
                <input
                  type="search"
                  placeholder="Search for products"
                  className="order__create__panel__form__search__input"
                  onFocus={() => setShowProductBrowsePopup(true)}
                />
              </div>
              <button
                className="order__create__panel__form__button"
                onClick={() => setShowProductBrowsePopup(true)}
              >
                Browse
              </button>
            </div>
            <div className="order__create__panel__table">
              <div className="order__create__panel__table__header">
                <div className="order__create__panel__table__header__entry">
                  Product
                </div>
                <div className="order__create__panel__table__header__entry">
                  Quantity
                </div>
                <div className="order__create__panel__table__header__entry">
                  Total
                </div>
              </div>
              <div className="order__create__panel__table__content">
                <CreateOrderProductEntery />
                <CreateOrderProductEntery />
                <CreateOrderProductEntery />
                <CreateOrderProductEntery />
                <CreateOrderProductEntery />
                <CreateOrderProductEntery />
              </div>
            </div>
          </div>
          <div className="order__create__panel">
            <div className="order__create__panel__heading">Payment</div>
            <div className="order__create__panel__row">
              <div className="order__create__panel__row__entry">
                Subtotal <span>Subtotal</span>
              </div>
              <div className="order__create__panel__row__entry">
                RS 4,565.00
              </div>
            </div>
            <div className="order__create__panel__row">
              <div className="order__create__panel__row__entry">
                Subtotal <span>Subtotal</span>
              </div>
              <div className="order__create__panel__row__entry">
                RS 4,565.00
              </div>
            </div>
            <div className="order__create__panel__row">
              <div className="order__create__panel__row__entry">
                Subtotal <span>Subtotal</span>
              </div>
              <div className="order__create__panel__row__entry">
                RS 4,565.00
              </div>
            </div>
            <div className="order__create__panel__row">
              <div className="order__create__panel__row__entry">
                Subtotal <span>Subtotal</span>
              </div>
              <div className="order__create__panel__row__entry">
                RS 4,565.00
              </div>
            </div>
            <div className="order__create__panel__row">
              <div className="order__create__panel__row__entry">
                Subtotal <span>Subtotal</span>
              </div>
              <div className="order__create__panel__row__entry">
                RS 4,565.00
              </div>
            </div>
            <div className="order__create__panel__row">
              <div className="order__create__panel__row__entry">Subtotal</div>
              <div className="order__create__panel__row__entry">
                RS 4,565.00
              </div>
            </div>
          </div>
          <div className="order__create__panel">
            <CheckBox
              value={paymentDueLater}
              label="Set end date and time"
              labelColor="var(--colorLight)"
              checkedColor="#2A5E59"
              unCheckedColor="var(--backgroundColor)"
              iconColor="#ffffff"
              onChange={() => {
                setPaymentDueLater(!paymentDueLater);
              }}
            />
            <div className="order__create__panel__actions">
              <Link
                to={backLocation}
                className="container__main__content__details__buttons__button container__main__content__details__buttons__secondary"
              >
                Send invoice
              </Link>
              <Link
                to={backLocation}
                className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
              >
                Collect payment
              </Link>
            </div>
          </div>
        </div>
        <div className="order__create__col">
          <CreateOrderCustomerPanel />
        </div>
      </div>
    </>
  );
}

function CreateOrderProductEntery() {
  return (
    <div className="order__create__panel__table__entry">
      <div className="order__create__panel__table__entry__entry">
        <img
          className="order__create__panel__table__entry__entry__image"
          src={product}
        />
        <div className="order__create__panel__table__entry__entry__content">
          <strong>RMB-102</strong>
          <span>XS</span>
          <strong>RS 4,434.00</strong>
        </div>
      </div>
      <div className="order__create__panel__table__entry__entry">
        <input
          type="number"
          placeholder="0"
          className="order__create__panel__table__entry__entry__input"
        />
      </div>
      <div className="order__create__panel__table__entry__entry">
        RS 4,434.00
      </div>
      <button>
        <X size={20} color="currentColor" />
      </button>
    </div>
  );
}

function CreateOrderCustomerPanel({}) {
  return (
    <div className="order__create__panel">
      <div className="order__details__main__customer__card__header">
        Customer
        <span>Muhammad Dayyan</span>
      </div>
      <div className="order__details__main__customer__card__content">
        <div className="order__details__main__customer__card__content__row">
          <div className="order__details__main__customer__card__content__row__left">
            <div className="order__details__main__customer__card__content__row__left__heading">
              Contact information
            </div>
            <a
              href="mailto:dayyanshahid13@gmail.com"
              className="order__details__main__customer__card__content__row__left__email"
            >
              dayyanshahid13@gmail.com
            </a>
            <div className="order__details__main__customer__card__content__row__left__number">
              +923219652222
            </div>
          </div>
          <button className="order__details__main__customer__card__content__row__right">
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.269 3.16797H17.5644C18.1731 3.16797 18.757 3.39624 19.1874 3.80257C19.6179 4.2089 19.8597 4.76 19.8597 5.33464V20.5013C19.8597 21.0759 19.6179 21.627 19.1874 22.0334C18.757 22.4397 18.1731 22.668 17.5644 22.668H3.7924C3.18364 22.668 2.59981 22.4397 2.16936 22.0334C1.7389 21.627 1.49707 21.0759 1.49707 20.5013V5.33464C1.49707 4.76 1.7389 4.2089 2.16936 3.80257C2.59981 3.39624 3.18364 3.16797 3.7924 3.16797H6.08773"
                stroke="#5E5F63"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.1206 1H7.23458C6.60074 1 6.08691 1.48502 6.08691 2.08333V4.25C6.08691 4.84831 6.60074 5.33333 7.23458 5.33333H14.1206C14.7544 5.33333 15.2682 4.84831 15.2682 4.25V2.08333C15.2682 1.48502 14.7544 1 14.1206 1Z"
                stroke="#5E5F63"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="order__details__main__customer__card__content__row">
          <div className="order__details__main__customer__card__content__row__left">
            <div className="order__details__main__customer__card__content__row__left__heading">
              DELIVERY ADDRESS
            </div>
            <div className="order__details__main__customer__card__content__row__left__email">
              Muhammad Dayyan
            </div>
            <div className="order__details__main__customer__card__content__row__left__email">
              P-4-B, NEW GARDEN BLOCK,
            </div>
            <div className="order__details__main__customer__card__content__row__left__email">
              FAISALABAD PAKISTAN
            </div>
            <div className="order__details__main__customer__card__content__row__left__email">
              Faisalabad 38000 pakistan
            </div>
            <div className="order__details__main__customer__card__content__row__left__number">
              +923219652222
            </div>
          </div>
          <button className="order__details__main__customer__card__content__row__right">
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.269 3.16797H17.5644C18.1731 3.16797 18.757 3.39624 19.1874 3.80257C19.6179 4.2089 19.8597 4.76 19.8597 5.33464V20.5013C19.8597 21.0759 19.6179 21.627 19.1874 22.0334C18.757 22.4397 18.1731 22.668 17.5644 22.668H3.7924C3.18364 22.668 2.59981 22.4397 2.16936 22.0334C1.7389 21.627 1.49707 21.0759 1.49707 20.5013V5.33464C1.49707 4.76 1.7389 4.2089 2.16936 3.80257C2.59981 3.39624 3.18364 3.16797 3.7924 3.16797H6.08773"
                stroke="#5E5F63"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.1206 1H7.23458C6.60074 1 6.08691 1.48502 6.08691 2.08333V4.25C6.08691 4.84831 6.60074 5.33333 7.23458 5.33333H14.1206C14.7544 5.33333 15.2682 4.84831 15.2682 4.25V2.08333C15.2682 1.48502 14.7544 1 14.1206 1Z"
                stroke="#5E5F63"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="order__details__main__customer__card__content__row">
          <div className="order__details__main__customer__card__content__row__left">
            <div className="order__details__main__customer__card__content__row__left__heading">
              BILLING ADDRESS
            </div>
            <div className="order__details__main__customer__card__content__row__left__number">
              Same as shipping address
            </div>
          </div>
          <button className="order__details__main__customer__card__content__row__right">
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.269 3.16797H17.5644C18.1731 3.16797 18.757 3.39624 19.1874 3.80257C19.6179 4.2089 19.8597 4.76 19.8597 5.33464V20.5013C19.8597 21.0759 19.6179 21.627 19.1874 22.0334C18.757 22.4397 18.1731 22.668 17.5644 22.668H3.7924C3.18364 22.668 2.59981 22.4397 2.16936 22.0334C1.7389 21.627 1.49707 21.0759 1.49707 20.5013V5.33464C1.49707 4.76 1.7389 4.2089 2.16936 3.80257C2.59981 3.39624 3.18364 3.16797 3.7924 3.16797H6.08773"
                stroke="#5E5F63"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.1206 1H7.23458C6.60074 1 6.08691 1.48502 6.08691 2.08333V4.25C6.08691 4.84831 6.60074 5.33333 7.23458 5.33333H14.1206C14.7544 5.33333 15.2682 4.84831 15.2682 4.25V2.08333C15.2682 1.48502 14.7544 1 14.1206 1Z"
                stroke="#5E5F63"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
