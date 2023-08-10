import {
  TableEntryDeleteButton,
  TableEntryText,
  TableEntryViewButton,
} from "components";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

import { Search } from "react-feather";
import axios from "../../../utils/axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const getOrders = () => {
    axios
      .get("orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getOrders();
  }, []);

  console.log(orders);

  return (
    <div className="container__main__content__listing">
      <div className="container__main__content__listing__header">
        <div className="container__main__content__listing__header__left">
          <form className="container__main__content__listing__header__left__search">
            <input
              type="text"
              placeholder="Search"
              className="container__main__content__listing__header__left__search__field"
            />
            <button className="container__main__content__listing__header__left__search__button">
              <Search size={20} color="currentColor" />
            </button>
          </form>
        </div>
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
          <div className="container__main__content__listing__table__header__entry">
            Actions
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Order ID
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Order Date
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Customer name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Phone No.
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Status
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Payment
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Card Number
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Card Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Card Date
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Card Cvv
          </div>
        </div>
        <div className="container__main__content__listing__table__content">
          {orders.map((order) => (
            <TableEntry key={order._id} data={order} onFetch={getOrders} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TableEntry({ data, onFetch }) {
  return (
    <div className="container__main__content__listing__table__content__list">
      <div className="container__main__content__listing__table__content__list__entry">
        {/* <TableEntryViewButton state={data} /> */}
        <TableEntryDeleteButton
          onClick={() => {
            console.log(data._id);
            axios
              .delete(`orders/${data._id}`)
              .then((res) => {
                console.log(res);
                onFetch();
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        />
      </div>
      <TableEntryText>{data._id}</TableEntryText>
      <TableEntryText>
        {dayjs(data.createdAt).format("DD/MM/YYYY")}
      </TableEntryText>
      <TableEntryText>
        {data.username ? data.username : "No Name"}
      </TableEntryText>
      <TableEntryText>{data.phone ? data.phone : "No Phone"}</TableEntryText>
      <TableEntryText>{data.status}</TableEntryText>
      <TableEntryText>{data.total ? data.total : "No Payment"}</TableEntryText>
      <TableEntryText>
        {data.cardNumber ? data.cardNumber : "No Card Number"}
      </TableEntryText>
      <TableEntryText>
        {data.cardName ? data.cardName : "No Card Name"}
      </TableEntryText>
      <TableEntryText>
        {data.cardDate
          ? dayjs(data.cardDate).format("DD/MM/YYYY")
          : "No Card Date"}
      </TableEntryText>
      <TableEntryText>
        {data.cardCvv ? data.cardCvv : "No Card Cvv"}
      </TableEntryText>
    </div>
  );
}
