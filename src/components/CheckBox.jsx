export default function CheckBox({
  onChange,
  value,
  checkedColor,
  unCheckedColor,
  iconColor,
  label,
  labelColor,
  style,
  ...props
}) {
  return (
    <div className="checkbox">
      <input
        class="checkbox__input"
        type="checkbox"
        value={value}
        onChange={onChange}
        {...props}
      />
      <div className="checkbox__content">
        <div
          className="checkbox__content__indicator"
          style={
            value
              ? { background: checkedColor, color: iconColor, ...style }
              : { background: unCheckedColor, ...style }
          }
        >
          {value ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="feather feather-check"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          ) : null}
        </div>
        <div className="checkbox__content__label" style={{ color: labelColor }}>
          {label}
        </div>
      </div>
    </div>
  );
}
