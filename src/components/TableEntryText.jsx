export default function TableEntryText({ children, ...props }) {
  return (
    <div
      className="container__main__content__listing__table__content__list__entry"
      {...props}
    >
      {children}
    </div>
  );
}
