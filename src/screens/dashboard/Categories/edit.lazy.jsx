import ImageUploaderSingle from "../../../components/ImageUploaderSingle";
import { Input } from "components";
import { Link } from "router";
import axios from "../../../utils/axios";
import { useBackLocation } from "global";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function CategorieEdit() {
  const { state } = useLocation();
  const [image, setImage] = useState(state.img);
  const [name, setName] = useState(state.name);
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <Input
          type="text"
          label="Name"
          placeholder="Enter Name Here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <ImageUploaderSingle
          label="Image"
          value={image}
          onChange={(e) => {
            setImage(e);
          }}
        />
      </div>

      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation}
          onClick={() => {
            axios.put("categories/" + state._id, {
              name,
              img: image,
            });
          }}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Edit
        </Link>
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__secondary"
        >
          Discard
        </Link>
      </div>
    </div>
  );
}
