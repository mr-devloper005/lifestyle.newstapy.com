"use client";

import { Suspense } from "react";
import { Navbar } from "@/components/shared/navbar";
import { NavbarNewsNaviPress } from "@/components/shared/navbar-newsnavipress";

export function NavbarShell() {
  return (
    <Suspense fallback={null}>
      <NavbarNewsNaviPress />
    </Suspense>
  );
}
