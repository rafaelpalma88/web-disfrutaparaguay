import { getServerSession } from "next-auth";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { nextAuthOptions } from "@/utils/authOptions";

import { ButtonLogout } from "./ButtonSignOut";

export async function AccountMenu() {
  const session = await getServerSession(nextAuthOptions);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          {session?.user?.name && session?.user?.name}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>{session?.user?.name && session?.user?.name}</span>
          <span className="text-xs font-normal text-muted-foreground">
            {session?.user?.name && session?.user?.name}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem>
          <Building className="mr-2 h-4 w-4" />
          <span className="text-foreground">Perfil da loja</span>
        </DropdownMenuItem> */}
        <ButtonLogout />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
