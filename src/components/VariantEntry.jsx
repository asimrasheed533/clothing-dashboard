import { Input } from "components";

export function VariantEntry() {
  return (
    <div className="product__form__col__panel__row">
      <div className="product__form__col__panel__row__entry">S</div>
      <div className="product__form__col__panel__row__entry">
        <Input type="text" placeholder="Enter SKU" />
      </div>
      <div className="product__form__col__panel__row__entry">
        <Input type="text" placeholder="Enter SKU" />
      </div>
      <div className="product__form__col__panel__row__entry">
        <Input type="text" placeholder="Enter SKU" />
      </div>
    </div>
  );
}
