"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo } from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  // const router = useRouter();

  const menuItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      title: "Resume Builder",
      link: "/resume-builder",
    },
    {
      title: "Other Jobs",
      link: "/other-jobs",
    },
  ];

  useEffect(() => {
    console.log("activeIndex", activeIndex);
  }, [activeIndex]);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth="2xl">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>Job-Quest</NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <div className="flex gap-4 font-bold">
            {menuItems.map((item, index) => (
              <Link
                key={`${item}-${index}`}
                href={item.link}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer ${
                  activeIndex === index ? "text-primary" : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-2">
            <SignedOut>
              <Link href={"/sign-in"}>
                <Button color="primary">Login</Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <Link href={"/register"}>
              <Button color="primary" variant={"secondary"}>
                Post Job
              </Button>
            </Link>
          </div>
        </NavbarItem>
        <NavbarItem>
          <ModeToggle />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.link}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link href={"/"}>
            <Button color="primary">Login</Button>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href={"/register"}>
            <Button color="primary" variant={"secondary"}>
              Post Job
            </Button>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
