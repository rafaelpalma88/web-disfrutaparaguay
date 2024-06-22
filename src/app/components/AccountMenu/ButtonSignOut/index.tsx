"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function ButtonLogout() {
  async function handleSignOut() {
    await signOut();
  }

  return (
    <DropdownMenuItem
      className="text-rose-500 dark:text-rose-400"
      onClick={handleSignOut}
      style={{ cursor: "pointer" }}
    >
      <LogOut className="mr-2 h-4 w-4" />
      <span>Sair</span>
    </DropdownMenuItem>
  );
}
