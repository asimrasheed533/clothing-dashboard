import { Input } from "components";

import { Link, useLocation } from "react-router-dom";
import { useBackLocation } from "global";
import { useEffect, useState } from "react";
import axios from "../../../utils/axios";

export default function CategorieEdit() {
  const { state } = useLocation();
  const backLocation = useBackLocation();
  const [name, setName] = useState("");

  useEffect(() => {
    if (state) {
      setName(state.name);
    }
  }, [state]);

  function handleSubmit(e) {
    axios
      .put("categories/" + state._id, {
        name,
      })
      .then((res) => {
        alert("Categorie edit  successfully");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <Input
          type="text"
          label="Categorie Name"
          placeholder="Enter Categorie Name Here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation}
          onClick={handleSubmit}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Save
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
