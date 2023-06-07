import { Input, Select, Textarea } from "components";

import { Link } from "router";
import { useBackLocation } from "global";
import { useState } from "react";
import { ImageUploaderSingle } from "../../../components/ImageUploaderSingle";

export default function CategorieAdd() {
  const [image, setImage] = useState(null);
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <Input type="text" label="Name" placeholder="Enter name" />
        <Textarea label="Description" placeholder="Enter Description" />
        <Select
          label="Parent Category"
          isMulti
          placeholder="Enter Parent Category"
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
            { value: "5", label: "5" },
            { value: "6", label: "6" },
            { value: "7", label: "7" },
            { value: "8", label: "8" },
            { value: "9", label: "9" },
          ]}
        />
        <ImageUploaderSingle label="Image" image={image} setImage={setImage} />
      </div>

      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation}
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
