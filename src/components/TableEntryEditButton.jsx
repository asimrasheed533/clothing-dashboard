import { Edit2 } from "react-feather";
import { Link } from "router";

export default function TableEntryEditButton({ ...props }) {
  return (
    <Link
      {...props}
      to={location.pathname.toLowerCase() + "/edit"}
      className="container__main__content__listing__table__content__list__entry__button"
    >
      <Edit2 size={20} color="currentColor" />
    </Link>
  );
}
