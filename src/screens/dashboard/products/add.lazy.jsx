import { Input, Select, Textarea } from "components";
import ImageUploaderSingle from "../../../components/ImageUploaderSingle";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../utils/axios";
import { useBackLocation } from "global";
import { useState } from "react";
import { categories } from "../../../utils/constants";

export default function ProductAdd() {
  const navigate = useNavigate();
  const backLocation = useBackLocation();

  const [name, setName] = useState("");

  const [brand, setBrand] = useState("");

  const [description, setDescription] = useState("");

  const [price, setPrice] = useState("");

  const [stock, setStock] = useState("");

  const [category, setCategory] = useState({});

  const [image, setImage] = useState("");

  function handleSubmit(e) {
    axios
      .post("products", {
        name,
        brand,
        description,
        price,
        stock,
        category: category.value,
        img: image,
      })
      .then((res) => {
        alert("Product added successfully");
        navigate(backLocation);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="product__form">
      <div className="product__form__col">
        <div className="product__form__col__panel">
          <Input
            type="text"
            label="Name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            label="Brand"
            placeholder="Enter Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <Textarea
            label="Description"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="product__form__col__panel">
          <div className="product__form__col__panel__heading">Pricing</div>
          <Input
            type="number"
            label="Selling Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter selling price"
          />
          <Input
            type="number"
            label="Enter Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="Enter stock"
          />
        </div>
        <div className="product__form__col__panel">
          <div className="product__form__col__panel__heading">Image</div>
          <ImageUploaderSingle
            label="Image"
            value={image}
            onChange={(e) => setImage(e)}
          />
        </div>
      </div>
      <div className="product__form__col">
        <div
          className="product__form__col__panel"
          style={{
            padding: "2em",
          }}
        >
          <button
            onClick={handleSubmit}
            className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
          >
            Add New Product
          </button>
          <Link
            to={backLocation}
            className="container__main__content__details__buttons__button container__main__content__details__buttons__secondary"
          >
            Discard Changes
          </Link>
        </div>
        <div className="product__form__col__panel">
          <Select
            label="Product Category"
            options={categories}
            value={category}
            onChange={(e) => setCategory(e)}
          />
        </div>
      </div>
    </div>
  );
}
