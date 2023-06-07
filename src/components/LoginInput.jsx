export default function LoginInput({ label, id, error, ...rest }) {
  return (
    <div className="login__container__form__input">
      {label && (
        <label htmlFor={id} className="login__container__form__input__label">
          {label}
        </label>
      )}
      <input
        className="login__container__form__input__field"
        id={id}
        name={id}
        {...rest}
      />
      {error && (
        <div className="login__container__form__input__error">{error}</div>
      )}
    </div>
  );
}
