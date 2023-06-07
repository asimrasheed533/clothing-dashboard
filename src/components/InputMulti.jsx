import { Trash2 } from "react-feather";

export default function InputMulti({
  label,
  id,
  error,
  type,
  secure,
  options,
  setOptions,
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
      {options.map((option, index) => (
        <div
          className="container__main__content__details__main__input__field__wrapper__option"
          key={index}
        >
          <div className="container__main__content__details__main__input__field__wrapper__option__content">
            {option}
          </div>
          <button
            className="container__main__content__details__main__input__field__wrapper__option__button"
            onClick={() => {
              setOptions(options.filter((_, i) => i !== index));
            }}
          >
            <Trash2 size={20} color="currentColor" />
          </button>
        </div>
      ))}

      <div className="container__main__content__details__main__input__field__wrapper">
        <input
          type="text"
          id={id}
          name={id}
          className="container__main__content__details__main__input__field"
          {...props}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setOptions([...options, e.target.value]);
              e.target.value = "";
            }
          }}
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
