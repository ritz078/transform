import React, { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { categorizedRoutes, routes } from "@utils/routes";

export default function Navigator() {
  const pathname = useRouterState({ select: state => state.location.pathname });
  const [filter, setFilter] = useState("");
  return (
    <aside
      className="flex w-60 shrink-0 flex-col border-r border-slate-200 bg-[#fafbfc] max-[800px]:w-[190px] max-[600px]:absolute max-[600px]:inset-y-0 max-[600px]:left-0 max-[600px]:z-20 max-[600px]:w-60 max-[600px]:shadow-xl"
      aria-label="Transformers"
    >
      <div className="relative border-b border-slate-200 p-2.5">
        <span
          className="material-symbols-outlined pointer-events-none absolute top-[17px] left-[18px] text-base text-slate-400"
          aria-hidden="true"
        >
          search
        </span>
        <input
          className="h-[29px] w-full rounded-md border border-slate-200 bg-white pr-2 pl-7 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#635bff]"
          value={filter}
          onChange={event => setFilter(event.target.value)}
          placeholder="Filter transformers..."
          aria-label="Filter transformers"
        />
      </div>
      <nav className="min-h-0 flex-1 overflow-y-auto p-2">
        {categorizedRoutes.map(group => {
          const items = group.content.filter(item =>
            `${group.category} ${item.label}`
              .toLowerCase()
              .includes(filter.toLowerCase())
          );
          if (!items.length) return null;
          return (
            <div className="mb-3" key={group.category}>
              <div className="flex items-center justify-between px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                <span>{group.category}</span>
                <span>{items.length}</span>
              </div>
              <div className="grid gap-0.5">
                {items.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    preload={false}
                    className={`flex min-h-7 items-center overflow-hidden rounded-md border px-2 py-1 text-[11px] whitespace-nowrap no-underline ${
                      pathname === item.path
                        ? "border-[#d8dcee] bg-[#eff2ff] font-semibold text-[#635bff]"
                        : "border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                    }`}
                  >
                    <span
                      className={`mr-[7px] size-1.5 shrink-0 rounded-full ${
                        pathname === item.path
                          ? "bg-[#635bff]"
                          : "bg-transparent"
                      }`}
                    />
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
      <div className="flex justify-between border-t border-slate-200 bg-[#f6f9fc] px-3 py-2 font-mono text-[10px] text-slate-400">
        <span>{routes.length} Converters</span>
        <span>v2.0.2</span>
      </div>
    </aside>
  );
}
