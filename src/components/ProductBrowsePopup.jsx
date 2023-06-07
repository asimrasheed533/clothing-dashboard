import { Search, X } from "react-feather";

import clsx from "clsx";
import { product } from "../assets";
import { useState } from "react";

export default function ProductBrowsePopup({ setShow }) {
  return (
    <div className="customer__detail__popup">
      <div className="customer__detail__popup__overlay">
        <div className="customer__detail__popup__overlay__card">
          <button
            onClick={() => setShow(false)}
            className="customer__detail__popup__overlay__card__close"
          >
            <X size={20} color="white" />
          </button>
          <div
            className="customer__detail__popup__overlay__card__heading"
            style={{ textAlign: "left", width: "100%" }}
          >
            Popular Products
          </div>

          <div
            className="order__create__panel__form__search"
            style={{ marginRight: 0, width: "100%", marginTop: "1em" }}
          >
            <Search size={20} color="currentColor" />
            <input
              type="search"
              placeholder="Search for products"
              className="order__create__panel__form__search__input"
            />
          </div>
          <div
            style={{
              width: "100%",
              padding: "1em 0em",
              margin: "1em 0em",
              borderTop: "1px solid var(--backgroundColor)",
              borderBottom: "1px solid var(--backgroundColor)",
              overflowY: "auto",
              paddingRight: "1em",
              height: "300px",
            }}
          >
            <ProductBrowseEntry />
            <ProductBrowseEntry />
            <ProductBrowseEntry />
            <ProductBrowseEntry />
            <ProductBrowseEntry />
            <ProductBrowseEntry />
            <ProductBrowseEntry />
            <ProductBrowseEntry />
            <ProductBrowseEntry />
            <ProductBrowseEntry />
            <ProductBrowseEntry />
            <ProductBrowseEntry />
            <ProductBrowseEntry />
            <ProductBrowseEntry />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              maxWidth: "230px",
              marginLeft: "auto",
            }}
          >
            <button className="container__main__content__details__buttons__button container__main__content__details__buttons__secondary">
              Cancel
            </button>
            <button className="container__main__content__details__buttons__button container__main__content__details__buttons__primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductBrowseEntry() {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={clsx(
        "customer__detail__popup__overlay__product__entry",
        selected && "customer__detail__popup__overlay__product__entry__active"
      )}
      onClick={() => setSelected(!selected)}
    >
      <img
        src={product}
        alt=""
        className="customer__detail__popup__overlay__product__entry__image"
      />
      <div className="customer__detail__popup__overlay__product__entry__name">
        Product Name
      </div>
      <div className="customer__detail__popup__overlay__product__entry__avalable">
        10 available
      </div>
      <div className="customer__detail__popup__overlay__product__entry__price">
        $10
      </div>
    </div>
  );
}
