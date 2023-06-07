import { product } from "../assets";

export default function OrderProductsCardRow() {
  return (
    <div className="order__details__main__products__card__content__row">
      <div className="order__details__main__products__card__content__row__left">
        <img
          src={product}
          alt="product"
          className="order__details__main__products__card__content__row__left__img"
        />
        <div className="order__details__main__products__card__content__row__left__label">
          Product name
        </div>
      </div>
      <div className="order__details__main__products__card__content__row__right">
        <span>S</span>
        <span>Trail</span>
      </div>
    </div>
  );
}
