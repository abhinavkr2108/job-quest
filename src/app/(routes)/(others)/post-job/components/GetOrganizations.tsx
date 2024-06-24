"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

export default function GetOrganizations({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useUser();
  const userId = user?.user?.id;

  //   console.log("USER DATA", org);
  //   const memberships = org
  //     ?.getOrganizationMemberships()
  //     .then((data) =>
  //       console.log(
  //         data.data.filter((m) => m.publicUserData.userId === user.user.id)
  //       )
  //     )
  //     .then((data) => console.log("FILTERED DATA", data));
  return <div>{children}</div>;
}
