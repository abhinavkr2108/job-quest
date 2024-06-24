import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import CreateCompany from "./components/CreateCompany";
import DisplayCompanies from "./components/DisplayCompanies";

export default async function PostJob() {
  return (
    <div>
      <h1 className="heading">Create a Company</h1>
      <p className="paragraph">
        To create a Job Listing, First you need to register a company
      </p>
      <CreateCompany />
      <DisplayCompanies />
    </div>
  );
}
