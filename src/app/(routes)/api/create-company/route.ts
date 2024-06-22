import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

type organizationData = {
  name: string;
  createdBy: string;
};

export async function POST(req: Request, res: NextResponse) {
  try {
    const data: organizationData = await req.json();
    const response = await clerkClient.organizations.createOrganization({
      name: data.name,
      createdBy: data.createdBy,
    });
    return new Response(JSON.stringify(response));
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Could Not Create Company" },
      { status: 500 }
    );
  }
}
