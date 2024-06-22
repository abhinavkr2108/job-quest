"use server";

import { clerkClient } from "@clerk/nextjs/server";

export const createOrganization = async (name: string, createdBy: string) => {
  const response = clerkClient.organizations.createOrganization({
    name,
    createdBy,
  });
};
