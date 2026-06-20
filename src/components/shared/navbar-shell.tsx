"use client";

import { Suspense } from "react";
import { NavbarNewsNaviPress } from "./navbar-newsnavipress";

export function NavbarShell() {
  return (
    <Suspense fallback={null}>
      <NavbarNewsNaviPress />
    </Suspense>
  );
}
