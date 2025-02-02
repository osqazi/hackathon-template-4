"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function ClerkAuthWrapper() {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
