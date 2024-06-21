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
import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "../ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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
                onClickCapture={() => setActiveIndex(index)}
                className={`${activeIndex === index ? "text-primary" : ""}`}
                href={item.link}
                onClick={() => setIsActive(!isActive)}
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
            <Link href={"/"}>
              <Button color="primary">Login</Button>
            </Link>
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
