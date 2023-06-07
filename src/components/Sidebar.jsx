import { Link, NavLink } from "router";
import { sidebarCategories, sidebarEnteries } from "global";

import { Fragment } from "react";
import { X } from "react-feather";
import { logo } from "assets";
import { useState } from "react";

export default function Sidebar({ setSidebarOpen }) {
  return (
    <div className="container__sidebar">
      <div className="container__sidebar__header">
        <Link to="/dashboard" className="container__sidebar__logo">
          <img
            src={logo}
            alt="logo"
            className="container__sidebar__logo__img"
          />
        </Link>
        <button
          className="container__sidebar__button"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={20} color="currentColor" />
        </button>
      </div>
      <div className="container__sidebar__content">
        {sidebarCategories.map((category) => (
          <Fragment key={category}>
            {category === "" ? (
              sidebarEnteries
                .filter((entry) => entry.category === category)
                .map((entry) => (
                  <NavLink
                    key={entry.path}
                    onClick={() => {
                      if (window.innerWidth < 820) {
                        setSidebarOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    end
                    to={entry.path}
                    className="container__sidebar__entry__content__entry"
                  >
                    {entry.icon}
                    {entry.name}
                  </NavLink>
                ))
            ) : (
              <SidebarEntry
                category={category}
                sidebarEnteries={sidebarEnteries}
                setSidebarOpen={setSidebarOpen}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function SidebarEntry({ category, sidebarEnteries, setSidebarOpen }) {
  const [collepse, setCollepse] = useState(true);
  return (
    <div className="container__sidebar__entry">
      <div
        className="container__sidebar__entry__label"
        onClick={() => {
          setCollepse(!collepse);
        }}
        style={!collepse ? { marginBottom: 0 } : null}
      >
        {category}
      </div>
      {collepse && (
        <div className="container__sidebar__entry__content">
          {sidebarEnteries
            .filter((entry) => entry.category === category)
            .map((entry) => (
              <NavLink
                key={entry.path}
                to={entry.path}
                onClick={() => {
                  if (window.innerWidth < 820) {
                    setSidebarOpen(false);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }
                }}
                className="container__sidebar__entry__content__entry"
              >
                {entry.icon}
                {entry.name}
              </NavLink>
            ))}
        </div>
      )}
    </div>
  );
}
