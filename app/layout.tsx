"use client";

import "tailwindcss/tailwind.css";
import { Disclosure } from "@headlessui/react";
import classNames from "classnames";
import React from "react";
import CSSIcon from "../assets/icons/css.svg";
import HTMLIcon from "../assets/icons/html.svg";
import JSIcon from "../assets/icons/js.svg";
import TSIcon from "../assets/icons/typescript.svg";
import GraphQLIcon from "../assets/icons/graphql.svg";
import SVGIcon from "../assets/icons/svg.svg";
import JsonIcon from "../assets/icons/json.svg";
import JsonSchemaIcon from "../assets/icons/json-schema.svg";
import JsonLdIcon from "../assets/icons/json-ld.svg";
import FlowIcon from "../assets/icons/flow.svg";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "CSS", icon: CSSIcon, href: "#" },
  {
    name: "HTML",
    icon: HTMLIcon,
    children: [
      { name: "JSX", href: "/html-to-jsx" },
      { name: "Pug", href: "/html-to-pug" },
    ],
  },
  {
    name: "JavaScript",
    icon: JSIcon,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Flow",
    icon: FlowIcon,
    children: [],
  },
  {
    name: "GraphQL",
    icon: GraphQLIcon,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "TypeScript",
    icon: TSIcon,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "SVG",
    icon: SVGIcon,

    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "JSON",
    icon: JsonIcon,

    children: [
      { name: "Big Query Schema", href: "/json-to-big-query" },
      {
        name: "Flow",
        href: "/json-to-flow",
      },
    ],
  },
  {
    name: "JSON Schema",
    icon: JsonSchemaIcon,
    children: [],
  },
  {
    name: "JSON-LD",
    icon: JsonLdIcon,
    children: [],
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <section>
          <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <div className="mt-5 flex flex-grow flex-col">
              <nav
                className="flex-1 space-y-1 bg-white px-2"
                aria-label="Sidebar"
              >
                {navigation.map((item) => (
                  <Disclosure
                    as="div"
                    key={item.name}
                    defaultOpen={
                      !!item.children?.find(({ href }) => href === pathname)
                    }
                    className="space-y-1"
                  >
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={classNames(
                            open
                              ? "bg-gray-100 text-gray-900"
                              : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                            "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          )}
                        >
                          <item.icon
                            className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <span className="flex-1">
                            {item.name}{" "}
                            <span className="text-gray-400">to</span>
                          </span>
                          <svg
                            className={classNames(
                              open
                                ? "text-gray-400 rotate-90"
                                : "text-gray-300",
                              "ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400"
                            )}
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                          </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-1">
                          {item.children?.map((subItem) => (
                            <Disclosure.Button
                              key={subItem.name}
                              as="a"
                              href={subItem.href}
                              className="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            >
                              {subItem.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </nav>
            </div>
          </div>
          {children}
        </section>
      </body>
    </html>
  );
}
