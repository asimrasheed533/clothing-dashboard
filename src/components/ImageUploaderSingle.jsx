import { Plus } from "react-feather";

export function ImageUploaderSingle({
  id,
  label,
  error,
  image,
  setImage,
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
      <div className="container__main__content__details__main__input__field__wrapper__image">
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
          accept="image/*"
          multiple={false}
          className="container__main__content__details__main__input__field__wrapper__image__input"
          {...props}
        />
        {image === null ? (
          <div className="container__main__content__details__main__input__field__wrapper__image__content">
            <Plus size={20} color="currentColor" />
          </div>
        ) : (
          <img
            src={URL.createObjectURL(image)}
            alt={image?.name}
            className="container__main__content__details__main__input__field__wrapper__image__content__img"
          />
        )}
      </div>
      {error && (
        <div className="container__main__content__details__main__input__error">
          {error}
        </div>
      )}
    </div>
  );
}
