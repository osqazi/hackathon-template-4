"use client";

import { ClerkProvider as RealClerkProvider } from "@clerk/nextjs";
import { useState, useEffect } from "react";

export default function ClerkProviderWrapper({ children }: { children: React.ReactNode }) {
  const [ClerkProvider, setClerkProvider] = useState<any>(null);

  useEffect(() => {
    (async () => {
      setClerkProvider(() => RealClerkProvider);
    })();
  }, []);

  if (!ClerkProvider) return null; // Prevents SSR errors

  return <ClerkProvider>{children}</ClerkProvider>;
}
