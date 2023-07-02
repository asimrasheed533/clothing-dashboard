import { Input, Select, Textarea } from "components";

import ImageUploaderSingle from "../../../components/ImageUploaderSingle";
import { Link } from "router";
import axios from "../../../utils/axios";
import { useBackLocation } from "global";
import { useState } from "react";

export default function CategorieAdd() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <Input
          type="text"
          label="Name"
          placeholder="Enter name"
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
            axios.post("categories", {
              name,
              img: image,
            });
          }}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Add
        </Link>
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__secondary"
        >
          Delect
        </Link>
      </div>
    </div>
  );
}
