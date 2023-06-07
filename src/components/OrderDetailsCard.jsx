export default function OrderDetailsCard({ label, buttonLabel }) {
  return (
    <div className="order__details__main__details__card">
      <div className="order__details__main__details__card__header">
        <div className="order__details__main__details__card__header__title">
          {label}
        </div>
      </div>
      <div className="order__details__main__details__card__content">
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Total No.Of Pieces
          </div>
          <div className="order__details__main__details__card__content__row__value">
            23
          </div>
        </div>
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Product Total Amount
          </div>
          <div className="order__details__main__details__card__content__row__value">
            3343
          </div>
        </div>
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Delivery Charges
          </div>
          <div className="order__details__main__details__card__content__row__value">
            45454
          </div>
        </div>
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Delivery Discount
          </div>
          <div className="order__details__main__details__card__content__row__value">
            343434
          </div>
        </div>
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Coupon Used
          </div>
          <div className="order__details__main__details__card__content__row__value">
            abcx
          </div>
        </div>
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            VAT
          </div>
          <div className="order__details__main__details__card__content__row__value">
            2233
          </div>
        </div>
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Net Due Amount
          </div>
          <div className="order__details__main__details__card__content__row__value">
            1212
          </div>
        </div>
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Amount Paid
          </div>
          <div className="order__details__main__details__card__content__row__value">
            343434
          </div>
        </div>
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Payment Status
          </div>
          <div className="order__details__main__details__card__content__row__value">
            Padding
          </div>
        </div>
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Payment Date
          </div>
          <div className="order__details__main__details__card__content__row__value">
            12/03/22
          </div>
        </div>
      </div>
    </div>
  );
}
