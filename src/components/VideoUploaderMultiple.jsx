import { Plus, X } from "react-feather";

export function VideoUploaderMultiple({
  id,
  label,
  error,
  images,
  setImages,
  ...props
}) {
  return (
    <div className="container__main__content__details__main__input">
      <label
        htmlFor={id}
        className="container__main__content__details__main__input__label"
      >
        {label}
      </label>
      <div className="container__main__content__details__main__input__field__wrapper__image__wrapper">
        {images.map((image, index) => (
          <div
            className="container__main__content__details__main__input__field__wrapper__image"
            key={index}
            style={{ marginRight: "1em", marginBottom: "1em" }}
          >
            <button
              className="container__main__content__details__main__input__field__wrapper__image__delete"
              onClick={() => setImages(images.filter((_img, i) => i !== index))}
            >
              <X size={20} color="currentColor" />
            </button>
            <video
              src={URL.createObjectURL(image)}
              alt={image?.name}
              controls
              className="container__main__content__details__main__input__field__wrapper__image__content__img"
            />
          </div>
        ))}
        <div className="container__main__content__details__main__input__field__wrapper__image">
          <input
            type="file"
            onChange={(e) => {
              setImages([...images, e.target.files[0]]);
            }}
            multiple={false}
            accept="video/*"
            className="container__main__content__details__main__input__field__wrapper__image__input"
            {...props}
          />

          <div className="container__main__content__details__main__input__field__wrapper__image__content">
            <Plus size={20} color="currentColor" />
          </div>
        </div>
      </div>
      {error && (
        <div className="container__main__content__details__main__input__error">
          {error}
        </div>
      )}
    </div>
  );
}
