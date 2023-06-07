export default function DashboardStartEntry({ value, info }) {
  return (
    <div className="dashboard__container__left__entry__content__entry">
      <div className="dashboard__container__left__entry__content__entry__heading">
        {value}
      </div>
      <div className="dashboard__container__left__entry__content__entry__info">
        {info}
      </div>
    </div>
  );
}
