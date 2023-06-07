import clsx from "clsx";
import { useState } from "react";

export default function CardTransaction() {
  const [activeTab, setActiveTab] = useState("booking");
  return (
    <div className="order__details__main__customer__card">
      <div className="order__details__main__customer__card__header order__details__main__customer__card__header__special">
        Card Transaction
        <div className="order__details__main__customer__card__header__tabs">
          <button
            onClick={() => setActiveTab("booking")}
            className={clsx(
              "order__details__main__customer__card__header__tabs__tab",
              activeTab === "booking" &&
                "order__details__main__customer__card__header__tabs__tab__active"
            )}
          >
            Booking Transaction
          </button>
          <button
            onClick={() => setActiveTab("return")}
            className={clsx(
              "order__details__main__customer__card__header__tabs__tab",
              activeTab === "return" &&
                "order__details__main__customer__card__header__tabs__tab__active"
            )}
          >
            Return Transaction
          </button>
        </div>
      </div>
      <div className="order__details__main__customer__card__content">
        <CardTransactionRow text="Authorized" value="Aur-163" />
        <CardTransactionRow text="Created" value="14/13/2022" />
        <CardTransactionRow text="UID" value="23243443543434" />
        <CardTransactionRow text="Action ID" value="1212121234" />
        <CardTransactionRow text="Status" value="Approved" />
        <CardTransactionRow text="Card" value="XXXXX XXXX-----" />
        <CardTransactionRow text="Reference" value="Auth-che-4335463" />
        <CardTransactionRow text="Auth Code" value="3435465756" />
        <CardTransactionRow
          text="Transaction for order ids"
          value="3435465756"
        />
      </div>
    </div>
  );
}
function CardTransactionRow({ text, value }) {
  return (
    <div className="order__details__main__customer__card__content__row__card__transaction">
      <div className="order__details__main__customer__card__content__row__label">
        {text}
      </div>
      <div className="order__details__main__customer__card__content__row__value">
        {value}
      </div>
    </div>
  );
}
