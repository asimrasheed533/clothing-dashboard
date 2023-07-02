import { Plus } from "react-feather";
import { Widget } from "react-cloudinary-upload-widget";

export default function UploadImage({
  label,
  error,
  value,
  onChange,
  multiple,
  ...props
}) {
  return (
    <div
      className="container__main__content__details__main__input"
      style={{ width: "fit-content", marginRight: 20 }}
    >
      <label className="container__main__content__details__main__input__label">
        {label}
      </label>
      <Widget
        sources={["local", "url"]}
        resourceType="image"
        cloudName="dsxbqyjwo"
        uploadPreset="wlhpwksu"
        buttonText={
          value === "" ? (
            <div>
              <Plus size={20} color="black" />
            </div>
          ) : (
            <img
              loading="lazy"
              src={import.meta.env.VITE_CLOUDNAIRY_API_URL + value}
              style={{ width: "100%", height: "100%", borderRadius: 10 }}
            />
          )
        }
        style={{
          color: "black",
          width: "120px",
          backgroundColor: "#f5f6fa",
          border: "1px solid #f5f6fa",
          borderRadius: 10,
          fontSize: 50,
          height: "120px",
          cursor: "pointer",
          padding: 0,
        }}
        folder="Clothing"
        cropping={false}
        multiple={false}
        autoClose={false}
        onSuccess={(e) => {
          onChange(e.info.path);
          document.body.style.overflowY = "unset";
        }}
        onFailure={(e) => {
          console.error(e);
        }}
        logging={false}
        use_filename={false}
        destroy={true}
        apiKey={import.meta.env.CLOUDINARY_API_KEY}
        {...props}
      />
      {error && (
        <div className="container__main__content__details__main__input__error">
          {error}
        </div>
      )}
    </div>
  );
}
