"use client";
import { useUser } from "@clerk/nextjs";
import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React, { useCallback, useEffect, useState } from "react";

import { ArrowRight } from "lucide-react";

type Company = {
  id: string;
  name: string;
};
export default function DisplayCompanies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedColor, setSelectedColor] = React.useState("secondary");
  const { user } = useUser();

  const fetchCompanies = useCallback(async () => {
    if (user) {
      const response = await user.getOrganizationMemberships();
      const filteredCompanies = response.data.filter(
        (c) => c.publicUserData.userId === user?.id
      );
      const newCompanies = filteredCompanies.map((c) => ({
        id: c.organization.id,
        name: c.organization.name,
      }));

      setCompanies(newCompanies);
    }
  }, [user]);
  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  if (!user) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h1 className="heading">Companies Created By You</h1>
      <p className="paragraph mb-5">
        Click on any Company to create its Job Listing
      </p>
      <Table aria-label="Companies Table">
        <TableHeader>
          <TableColumn>Company Name</TableColumn>
        </TableHeader>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.id}>
              <TableCell className="flex items-center gap-2 cursor-pointer">
                {company.name} <ArrowRight />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
