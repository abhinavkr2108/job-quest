import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import CreateCompany from "./components/CreateCompany";

export default function PostJob() {
  return (
    <div>
      <h1 className="heading">Create a Company</h1>
      <p className="paragraph">
        To create a Job Listing, First you need to register a company
      </p>
      <CreateCompany />
    </div>
  );
}
