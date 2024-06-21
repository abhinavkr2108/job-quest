import Features from "@/components/shared/Features";
import Header from "@/components/shared/Header";
import LandingPage from "@/components/shared/LandingPage";
import Image from "next/image";
import React from "react";
import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
  signOut,
} from "@workos-inc/authkit-nextjs";

export default async function Home() {
  // Retrieves the user from the session or returns `null` if no user is signed in
  const { user } = await getUser();

  // Get the URL to redirect the user to AuthKit to sign in
  const signInUrl = await getSignInUrl();

  // Get the URL to redirect the user to AuthKit to sign up
  const signUpUrl = await getSignUpUrl();
  return (
    <React.Fragment>
      <Header />
      <LandingPage />
      <Features />
    </React.Fragment>
  );
}
