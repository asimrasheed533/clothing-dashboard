import Select from "react-select";

export default function TableEntryStatus({ onChange, defaultValue, options }) {
  return (
    <div
      className="container__main__content__listing__header__left__filter"
      style={{ marginBottom: 0 }}
    >
      <Select
        placeholder="Active"
        options={options}
        defaultValue={defaultValue}
        onChange={onChange}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary75: "#2a5e59",
            primary25: "#2a5e595e",
            primary50: "#2a5e595e",
            primary: "#2a5e59",
          },
        })}
      />
    </div>
  );
}
