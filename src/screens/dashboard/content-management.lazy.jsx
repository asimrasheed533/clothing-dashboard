import { Input, Select, Textarea } from "components";

import { ImageBanner } from "../../components/ImageBanner";
import { ImageUploaderSingle } from "../../components/ImageUploaderSingle";
import { Link } from "router";
import { useBackLocation } from "global";
import { useState } from "react";

export default function ContentManagement() {
  const [banner, setBanner] = useState(null);
  const [image, setImage] = useState(null);
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div className="container__main__content__details__main__row">
          <Input type="text" label="Heading" placeholder="Enter heading" />
        </div>
        <ImageBanner setImage={setBanner} image={banner} />
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "14",
            padding: "4px 12px",
            width: "fit-content",
            borderRadius: "30px",
            margin: "12px 0px",
          }}
        >
          How Lookrunner works
        </div>
        <Input type="text" label="Heading 1" placeholder="Enter Heading 1" />
        <Textarea label="Description" placeholder="Enter Description" />
        <div
          style={{
            width: "100%",
            border: "1px solid var(--backgroundColor)",
            margin: "2em 0em",
          }}
        />
        <Input type="text" label="Heading 2" placeholder="Enter Heading 2" />
        <Textarea label="Description" placeholder="Enter Description" />
        <div
          style={{
            width: "100%",
            border: "1px solid var(--backgroundColor)",
            margin: "2em 0em",
          }}
        />
        <Input type="text" label="Heading 3" placeholder="Enter Heading 3" />
        <Textarea label="Description" placeholder="Enter Description" />
        <div
          style={{
            width: "100%",
            border: "1px solid var(--backgroundColor)",
            margin: "2em 0em",
          }}
        />
        <Select
          label="Select Products"
          placeholder="select "
          isMulti
          options={[
            { value: "Active", label: "Active" },
            { value: "Deactive", label: "Deactive" },
          ]}
        />
        <div className="container__main__content__details__main__row__wraper">
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: "14",
              padding: "4px 12px",
              width: "fit-content",
              borderRadius: "30px",
              margin: "12px 0px",
            }}
            className="container__main__content__details__main__row__left"
          >
            Add Testimoinial
          </div>
          <div
            style={{
              backgroundColor: "var(--primary)",
              color: "white",
              fontSize: "16",
              padding: "10px 20px",
              width: "fit-content",
              borderRadius: "20px",
              margin: "12px 0px",
              cursor: "pointer",
            }}
            className="container__main__content__details__main__row__right"
          >
            Add
          </div>
        </div>
        <Input type="text" label="Heading" placeholder="abc" />
        <Textarea label="Description" placeholder="Enter Description" />
        <ImageUploaderSingle label="Image" image={image} setImage={setImage} />
        {/* <ImageUploaderMultiple
          label="Image"
          images={images}
          setImages={setImages}
        /> */}
      </div>
      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
