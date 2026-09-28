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
    <span
      className="material-symbols-outlined text-[18px] leading-none"
      aria-hidden="true"
    >
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
    <div className="relative flex h-dvh flex-col overflow-hidden bg-[#f6f9fc] font-sans text-[#0a2540] antialiased">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[340px] w-[1000px] -translate-x-1/2 bg-gradient-to-r from-[#635bff]/[.07] via-[#00daf3]/[.05] to-[#635bff]/[.05] blur-[100px]"
      />
      <header className="relative z-20 flex h-11 shrink-0 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur-md max-[600px]:px-2">
        <div className="flex min-w-0 items-center gap-3.5 max-[600px]:gap-2">
          <button
            className="flex size-7 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
            type="button"
            onClick={() => setSidebarOpen(open => !open)}
            aria-label="Toggle sidebar"
            title="Toggle sidebar (Ctrl+B)"
          >
            <Icon name="dock_to_left" />
          </button>
          <Link
            to="/"
            className="whitespace-nowrap text-sm font-semibold tracking-tight text-slate-800 no-underline"
          >
            transform <span className="font-normal text-[#635bff]">tools</span>
          </Link>
          <span className="font-mono text-slate-300 max-[600px]:hidden">/</span>
          <button
            className="flex h-[25px] items-center gap-[7px] whitespace-nowrap rounded-md border border-slate-200 bg-slate-100 px-2 font-mono text-[11px] text-slate-500 hover:bg-slate-200"
            type="button"
            onClick={() => setPaletteOpen(true)}
            aria-label="Switch transformer"
          >
            <strong className="font-semibold text-slate-700">
              {active?.category || "SVG"}
            </strong>
            <span>→</span>
            <strong className="font-semibold text-[#635bff]">
              {active?.label?.replace(/^to /, "") || "JSX"}
            </strong>
            <Icon name="expand_more" />
            <kbd className="rounded border border-slate-200 bg-white px-1 py-0.5 font-mono text-[10px] text-slate-400 max-[600px]:hidden">
              ⌘K
            </kbd>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <a
            className="flex size-7 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
            href="https://github.com/ritz078/transform"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg
              className="size-[15px]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </header>
      <div className="relative z-10 flex min-h-0 min-w-0 flex-1">
        {sidebarOpen && <Navigator />}
        <main className="flex min-h-0 min-w-0 flex-1 bg-white" key={pathname}>
          <Outlet />
        </main>
      </div>
      {paletteOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/30 px-4 pt-24 max-[600px]:pt-15"
          onMouseDown={() => setPaletteOpen(false)}
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Switch transformer"
            onMouseDown={event => event.stopPropagation()}
          >
            <div className="flex h-[50px] items-center gap-3 border-b border-slate-200 bg-[#fafbfc] px-4">
              <Icon name="search" />
              <input
                className="min-w-0 flex-1 border-0 bg-transparent text-[13px] text-[#0a2540] outline-none placeholder:text-slate-400"
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
              <kbd className="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-slate-500">
                ESC
              </kbd>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              <div className="px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                {query ? "Results" : "Featured transformers"}
              </div>
              {matches.slice(0, 12).map(route => (
                <button
                  type="button"
                  key={route.path}
                  className={`flex w-full items-center gap-2.5 rounded-lg border px-3 py-2 text-left text-xs transition-colors hover:bg-slate-50 ${
                    pathname === route.path
                      ? "border-[#d8dcee] bg-[#eff2ff] text-[#635bff]"
                      : "border-transparent bg-white text-[#425466]"
                  }`}
                  onClick={() => {
                    navigate({ to: route.path });
                    setPaletteOpen(false);
                  }}
                >
                  <Icon name="polyline" />
                  <span>{route.searchTerm}</span>
                  <small className="ml-auto font-mono text-[10px] text-slate-400">
                    {route.category}
                  </small>
                </button>
              ))}
              {matches.length === 0 && (
                <p className="p-3 text-xs text-slate-500">
                  No matching converters
                </p>
              )}
            </div>
            <div className="flex justify-between border-t border-slate-200 bg-[#fafbfc] px-4 py-2.5 font-mono text-[10px] text-slate-500">
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
