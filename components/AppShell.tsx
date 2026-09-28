import React, { useEffect, useRef, useState } from "react";
import {
  Link,
  Outlet,
  useNavigate,
  useRouterState
} from "@tanstack/react-router";
import NProgress from "nprogress";
import Navigator from "@components/Navigator";
import { activeRouteData, routes } from "@utils/routes";
import "@styles/main.css";

function Icon({ name }: { name: string }) {
  return (
    <span className="material-symbols-outlined" aria-hidden="true">
      {name}
    </span>
  );
}

export default function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 601px)").matches
  );
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const isLoading = useRouterState({ select: state => state.isLoading });
  const pathname = useRouterState({ select: state => state.location.pathname });
  const active = activeRouteData(pathname);
  const matches = routes.filter(route =>
    route.searchTerm.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (!isLoading) {
      NProgress.done();
      return;
    }
    const timer = setTimeout(() => NProgress.start(), 300);
    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [isLoading]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen(open => !open);
      } else if (
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "b"
      ) {
        event.preventDefault();
        setSidebarOpen(open => !open);
      } else if (event.key === "Escape") setPaletteOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (paletteOpen) searchRef.current?.focus();
    else setQuery("");
  }, [paletteOpen]);

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-start">
          <button
            className="icon-button sidebar-toggle"
            type="button"
            onClick={() => setSidebarOpen(open => !open)}
            aria-label="Toggle sidebar"
            title="Toggle sidebar (Ctrl+B)"
          >
            <Icon name="dock_to_left" />
          </button>
          <Link to="/" className="brand">
            transform <span>tools</span>
          </Link>
          <span className="header-divider">/</span>
          <button
            className="route-switcher"
            type="button"
            onClick={() => setPaletteOpen(true)}
            aria-label="Switch transformer"
          >
            <strong>{active?.category || "SVG"}</strong>
            <span>→</span>
            <strong className="route-target">
              {active?.label?.replace(/^to /, "") || "JSX"}
            </strong>
            <Icon name="expand_more" />
            <kbd>⌘K</kbd>
          </button>
        </div>
        <div className="header-actions">
          <a
            className="icon-button"
            href="https://github.com/ritz078/transform"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </header>
      <div className="app-workspace">
        {sidebarOpen && <Navigator />}
        <main className="workspace-main" key={pathname}>
          <Outlet />
        </main>
      </div>
      {paletteOpen && (
        <div
          className="palette-backdrop"
          onMouseDown={() => setPaletteOpen(false)}
        >
          <div
            className="command-palette"
            role="dialog"
            aria-modal="true"
            aria-label="Switch transformer"
            onMouseDown={event => event.stopPropagation()}
          >
            <div className="palette-search">
              <Icon name="search" />
              <input
                ref={searchRef}
                value={query}
                onChange={event => setQuery(event.target.value)}
                onKeyDown={event => {
                  if (event.key === "Enter" && matches[0]) {
                    navigate({ to: matches[0].path });
                    setPaletteOpen(false);
                  }
                }}
                placeholder="Search converters (e.g. svg to jsx, json to typescript)..."
                aria-label="Search converters"
              />
              <kbd>ESC</kbd>
            </div>
            <div className="palette-results">
              <div className="palette-heading">
                {query ? "Results" : "Featured transformers"}
              </div>
              {matches.slice(0, 12).map(route => (
                <button
                  type="button"
                  key={route.path}
                  className={`palette-result ${
                    pathname === route.path ? "active" : ""
                  }`}
                  onClick={() => {
                    navigate({ to: route.path });
                    setPaletteOpen(false);
                  }}
                >
                  <Icon name="polyline" />
                  <span>{route.searchTerm}</span>
                  <small>{route.category}</small>
                </button>
              ))}
              {matches.length === 0 && (
                <p className="palette-empty">No matching converters</p>
              )}
            </div>
            <div className="palette-footer">
              <span>
                Press <kbd>↵</kbd> to open the first result
              </span>
              <span>{routes.length} developer tools</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
