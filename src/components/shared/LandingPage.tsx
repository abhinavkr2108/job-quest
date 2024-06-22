import {
  NoUserInfo,
  UserInfo,
} from "@workos-inc/authkit-nextjs/dist/cjs/interfaces";
import { Button } from "../ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="h-screen md:h-[60vh] w-full bg-[url('/grid.svg')]">
      <div className="h-full mx-auto  gap-12 text-gray-600 md:px-8">
        <div className="grid place-items-center h-full max-w-4xl mx-auto text-center">
          <div className="space-y-4">
            <h1 className="text-sm text-indigo-600 font-medium">
              Your Path to the Perfect Job Starts Here
            </h1>
            <h2 className="text-4xl text-secondary-foreground font-extrabold mx-auto md:text-5xl">
              Embark on Your Career Journey <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                with Job Quest
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-secondary-foreground font-medium">
              Embark on your career journey with Job Quest, the ultimate
              platform connecting job seekers with top employers.
            </p>
            <div className="w-full flex flex-col items-center justify-center gap-4 md:flex-row">
              <Link href="/dashboard">
                <Button className="w-full">Browse Jobs</Button>
              </Link>
              <Link href={"/resume-builder"}>
                <Button variant="secondary">Build Resume</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
