import Avatar from "./Avatar";

export default function TableEntryImage({ children, ...props }) {
  return (
    <div
      className="container__main__content__listing__table__content__list__entry"
      {...props}
    >
      {children ? (
        children
      ) : (
        <Avatar
          {...props}
          className="container__main__content__listing__table__content__list__entry__img"
        />
      )}
    </div>
  );
}
