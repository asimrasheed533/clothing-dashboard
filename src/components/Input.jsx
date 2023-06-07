import { Eye, EyeOff } from "react-feather";

import { useState } from "react";

export default function Input({ label, id, error, type, secure, ...props }) {
  const [isSecure, setIsSecure] = useState(true);
  return (
    <div className="container__main__content__details__main__input">
      <label
        htmlFor={id}
        className="container__main__content__details__main__input__label"
      >
        {label}
      </label>
      <div className="container__main__content__details__main__input__field__wrapper">
        <input
          type={isSecure ? type : "text"}
          id={id}
          name={id}
          className="container__main__content__details__main__input__field"
          {...props}
        />
        {secure && (
          <button
            className="container__main__content__details__main__input__button"
            onClick={() => setIsSecure(!isSecure)}
          >
            {isSecure ? (
              <EyeOff size={20} color="currentColor" />
            ) : (
              <Eye size={20} color="currentColor" />
            )}
          </button>
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
