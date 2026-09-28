import React, { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { categorizedRoutes, routes } from "@utils/routes";

export default function Navigator() {
  const pathname = useRouterState({ select: state => state.location.pathname });
  const [filter, setFilter] = useState("");
  return (
    <aside className="workbench-sidebar" aria-label="Transformers">
      <div className="sidebar-search">
        <span className="material-symbols-outlined" aria-hidden="true">
          search
        </span>
        <input
          value={filter}
          onChange={event => setFilter(event.target.value)}
          placeholder="Filter transformers..."
          aria-label="Filter transformers"
        />
      </div>
      <nav className="sidebar-list">
        {categorizedRoutes.map(group => {
          const items = group.content.filter(item =>
            `${group.category} ${item.label}`
              .toLowerCase()
              .includes(filter.toLowerCase())
          );
          if (!items.length) return null;
          return (
            <div className="sidebar-group" key={group.category}>
              <div className="sidebar-group-title">
                <span>{group.category}</span>
                <span>{items.length}</span>
              </div>
              <div className="sidebar-group-items">
                {items.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    preload={false}
                    className={`sidebar-link ${
                      pathname === item.path ? "active" : ""
                    }`}
                  >
                    <span className="sidebar-link-dot" />
                    {group.category === "Others"
                      ? item.label
                      : `${group.category} ${item.label}`}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </nav>
      <div className="sidebar-footer">
        <span>{routes.length} Converters</span>
        <span>v2.0.2</span>
      </div>
    </aside>
  );
}
