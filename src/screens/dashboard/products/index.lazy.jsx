import {
  TableEntryDeleteButton,
  TableEntryEditButton,
  TableEntryImage,
  TableEntryStatus,
  TableEntryText,
} from "components";
import { useCallback, useEffect, useState } from "react";

import { Link } from "router";
import Loading from "../../../layouts/loading";
import { TableEntryDescription } from "../../../components";
import axios from "../../../utils/axios";
import { useLocation } from "react-router-dom";

export default function Products() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");

  const filter = useCallback((products) => {
    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, []);

  const getData = () => {
    setLoading(true);
    axios.get("products").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container__main__content__listing">
      <div className="container__main__content__listing__header">
        {/* <div className="container__main__content__listing__header__left">
          <div className="container__main__content__listing__header__left__search">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              className="container__main__content__listing__header__left__search__field"
            />
          </div>
        </div> */}
        <div className="container__main__content__listing__header__right">
          <Link
            to={location.pathname.toLowerCase() + "/add"}
            className="container__main__content__listing__header__right__button"
          >
            Add
          </Link>
        </div>
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
          <div className="container__main__content__listing__table__header__entry">
            Actions
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Status
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Featured
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Image
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Brand
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Price
          </div>

          <div className="container__main__content__listing__table__header__entry">
            Stock
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Category
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Description
          </div>
        </div>
        <div className="container__main__content__listing__table__content">
          {loading ? (
            <Loading dashboard />
          ) : (
            filter(products).map((product) => (
              <TableEntry
                key={product._id}
                product={product}
                getData={getData}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
function TableEntry({ product, getData }) {
  return (
    <div className="container__main__content__listing__table__content__list">
      <div className="container__main__content__listing__table__content__list__entry">
        <TableEntryEditButton state={{ ...product }} />
        <TableEntryDeleteButton
          onClick={() => {
            axios.delete(`products/${product._id}`).then(() => {
              getData();
            });
          }}
        />
      </div>
      <TableEntryStatus
        defaultValue={{
          value: product.isActive,
          label: product.isActive ? "Active" : "Deactive",
        }}
        options={[
          {
            value: true,
            label: "Active",
          },
          {
            value: false,
            label: "Deactive",
          },
        ]}
        onChange={(e) => {
          axios
            .put(`products/${product._id}`, {
              isActive: e.value,
            })
            .then(() => {
              getData();
            });
        }}
      />
      <TableEntryStatus
        defaultValue={{
          value: product.isFeatured,
          label: product.isFeatured ? "Featured" : "Not Featured",
        }}
        options={[
          {
            value: true,
            label: "Featured",
          },
          {
            value: false,
            label: "Not Featured",
          },
        ]}
        onChange={(e) => {
          axios
            .put(`products/${product._id}`, {
              isFeatured: e.value,
            })
            .then(() => {
              getData();
            });
        }}
      />
      <TableEntryImage src={product.img} />
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        {product.name}
      </TableEntryText>
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        {product.brand}
      </TableEntryText>
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        {product.price}
      </TableEntryText>
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        {product.stock}
      </TableEntryText>
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        {product.category}
      </TableEntryText>
      <TableEntryDescription className="container__main__content__listing__table__content__list__entry">
        {product?.description}
      </TableEntryDescription>
    </div>
  );
}
