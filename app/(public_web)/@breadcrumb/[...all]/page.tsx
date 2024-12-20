import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/(public_web)/components/home/breadcrumb/breadcrumb";
import type { ReactElement } from "react";
import React from "react";

export default async function BreadcrumbSlot({
  params,
}: {
  params: Promise<{ all?: string[] }>;
}) {
  const { all } = await params;

  const breadcrumbItems: ReactElement[] = [];
  let breadcrumbPage: ReactElement = <></>;
  for (let i = 0; i < (all?.length || 0); i++) {
    const route = (all ?? [])[i];
    const href = `/${(all ?? [])[0]}/${route}`;

    if (i === (all?.length ?? 0) - 1) {
      breadcrumbPage = (
        <BreadcrumbItem>
          <BreadcrumbPage className="capitalize">{route}</BreadcrumbPage>
        </BreadcrumbItem>
      );
    } else {
      breadcrumbItems.push(
        <React.Fragment key={href}>
          <BreadcrumbItem>
            <BreadcrumbLink href={href} className="capitalize">
              {route}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </React.Fragment>
      );
    }
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbItems}
        <BreadcrumbSeparator />
        {breadcrumbPage}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
