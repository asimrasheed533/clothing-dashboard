import { Trash2 } from "react-feather";

export default function TableEntryDeleteButton({ ...props }) {
  return (
    <button
      {...props}
      className="container__main__content__listing__table__content__list__entry__button"
    >
      <Trash2 size={20} color="currentColor" />
    </button>
  );
}
