import {
  TableEntryDeleteButton,
  TableEntryEditButton,
  TableEntryImage,
  TableEntryText,
} from "components";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "../../../utils/axios";
import { useLocation } from "react-router-dom";

export default function Categories() {
  const location = useLocation();
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    setLoading(true);
    axios.get("categories").then((res) => {
      setCategory(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container__main__content__listing">
      <div className="container__main__content__listing__header">
        <div className="container__main__content__listing__header__left"></div>
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
            Name
          </div>
        </div>
        <div className="container__main__content__listing__table__content">
          {category.map((item) => (
            <TableEntry item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TableEntry({ item }) {
  return (
    <div className="container__main__content__listing__table__content__list">
      <div className="container__main__content__listing__table__content__list__entry">
        <TableEntryEditButton
          to={`/dashboard/categories/edit/${item?._id}`}
          state={{ ...item }}
        />
        <TableEntryDeleteButton
          onClick={() => {
            axios.delete(`categories/${item?._id}`).then((res) => {
              console.log(res);
            });
          }}
        />
      </div>
      <TableEntryText>{item?.name}</TableEntryText>
    </div>
  );
}
