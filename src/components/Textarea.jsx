export default function Textarea({ label, id, error, type, ...props }) {
  return (
    <div className="container__main__content__details__main__input">
      <label
        htmlFor={id}
        className="container__main__content__details__main__input__label"
      >
        {label}
      </label>
      <div className="container__main__content__details__main__input__field__wrapper container__main__content__details__main__input__field__wrapper__textarea">
        <textarea
          id={id}
          name={id}
          className="container__main__content__details__main__input__field"
          {...props}
        />
      </div>
      {error && (
        <div className="container__main__content__details__main__input__error">
          {error}
        </div>
      )}
    </div>
  );
}
