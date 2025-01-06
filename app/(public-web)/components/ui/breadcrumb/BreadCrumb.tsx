"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode, useMemo } from "react";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const NextBreadcrumb = ({
  homeElement,
  separator,
  containerClasses = "",
  listClasses = "",
  activeClasses = "",
}: TBreadCrumbProps) => {
  const paths = usePathname() || "/";
  const pathNames = useMemo(
    () => paths.split("/").filter((path) => path),
    [paths]
  );
  console.log("paths", paths);
  console.log("pathsN", pathNames);

  return (
    <nav aria-label="Breadcrumb" className={containerClasses}>
      <ul className="flex items-center space-x-2">
        <li className={listClasses}>
          <Link href="/">{homeElement}</Link>
        </li>
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const isActive = paths === href;
          return (
            <React.Fragment key={href}>
              {separator}
              <li
                className={isActive ? activeClasses : listClasses}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive ? (
                  <span>{link}</span>
                ) : (
                  <Link href={href}>{link}</Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default NextBreadcrumb;
