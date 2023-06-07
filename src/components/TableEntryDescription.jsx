export default function TableEntryDescription({ children }) {
  return (
    <div className="container__main__content__listing__table__content__list__entry">
      {children?.length > 50 ? (
        <div className="container__main__content__listing__table__content__list__entry__details">
          <button className="container__main__content__listing__table__content__list__entry__details__button">
            View Details
          </button>
          <div className="container__main__content__listing__table__content__list__entry__details__content">
            {children}
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
