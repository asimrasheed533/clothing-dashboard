import OrderProductsCardRow from "./OrderProductsCardRow";

export default function OrderProductsCard({ label }) {
  return (
    <div className="order__details__main__products__card">
      <div className="order__details__main__products__card__header">
        <div className="order__details__main__products__card__header__title">
          {label}
        </div>
        <div className="order__details__main__details__card__header__details">
          No. of pcs <span>12</span>
        </div>
      </div>
      <div className="order__details__main__products__card__content">
        <OrderProductsCardRow />
        <OrderProductsCardRow />
        <OrderProductsCardRow />
        <OrderProductsCardRow />
        <OrderProductsCardRow />
        <OrderProductsCardRow />
        <OrderProductsCardRow />
        <OrderProductsCardRow />
        <OrderProductsCardRow />
        <OrderProductsCardRow />
        <OrderProductsCardRow />
        <OrderProductsCardRow />
        <OrderProductsCardRow />
        <OrderProductsCardRow />
      </div>
    </div>
  );
}
