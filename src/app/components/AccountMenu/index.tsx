"use client";

import { useRouter } from "next/navigation";
import { ChevronDown, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AccountMenu() {
  const router = useRouter();

  async function handleSignOut() {
    await router.push("/sign-in");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          Rafael Costa Palma
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span> Rafael Costa Palma</span>
          <span className="text-xs font-normal text-muted-foreground">
            rafaelcostapalma@protonmail.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem>
          <Building className="mr-2 h-4 w-4" />
          <span className="text-foreground">Perfil da loja</span>
        </DropdownMenuItem> */}
        <DropdownMenuItem
          className="text-rose-500 dark:text-rose-400"
          onClick={handleSignOut}
          style={{ cursor: "pointer" }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
