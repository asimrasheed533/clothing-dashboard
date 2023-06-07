import { Eye, EyeOff } from "react-feather";

import { useState } from "react";

export default function DetailsEntry({ secure, label, children }) {
  const [isSecure, setIsSecure] = useState(true);

  function secureValue(value) {
    return value.replace(/./g, "*");
  }
  return (
    <div className="container__main__content__details__main__entry">
      <div className="container__main__content__details__main__entry__label">
        {label}
      </div>
      <div
        className="container__main__content__details__main__entry__value"
        style={secure ? { maxWidth: "fit-content" } : null}
      >
        {secure && isSecure ? secureValue(children) : children}
        {secure && (
          <button
            onClick={() => setIsSecure(!isSecure)}
            className="container__main__content__details__main__entry__value__secure"
          >
            {isSecure ? (
              <EyeOff size={20} color="currentColor" />
            ) : (
              <Eye size={20} color="currentColor" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
