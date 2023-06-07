import { Chart, DashboardOrderEntry, DashboardStartEntry } from "components";

export default function Dashboard() {
  return (
    <div className="dashboard__container">
      <div className="dashboard__container__left">
        <div className="dashboard__container__left__entry">
          <div className="dashboard__container__left__main">
            <div className="dashboard__container__left__main__header">
              Daily Sales
            </div>
            <div className="dashboard__container__left__main__content">
              <Chart />
            </div>
          </div>
        </div>

        <div className="dashboard__container__left__entry">
          <div className="dashboard__container__left__entry__title">Orders</div>
          <div className="dashboard__container__left__entry__content">
            <DashboardStartEntry
              value="651.343"
              info="Total Articles in Return"
            />
            <DashboardStartEntry value="121.343" info="Total Articles Sold" />
            <DashboardStartEntry value="121.343" info="Total No. of Booking" />
            <DashboardStartEntry
              value="121.343"
              info="Total Articles Damaged"
            />
            <DashboardStartEntry
              value="121.343"
              info="Total No. of articles in Marketing"
            />
            <DashboardStartEntry
              value="231.343"
              info="Total Current Returns scheduled with pickup dates"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
