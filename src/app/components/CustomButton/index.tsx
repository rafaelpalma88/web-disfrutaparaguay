import Link from "next/link";
import { Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CustomButtonProps {
  title: string;
  type?: "DEFAULT" | "EDIT_PROFILE";
  direction?: string;
}

export function CustomButton({
  title,
  direction,
  type = "DEFAULT",
}: CustomButtonProps) {
  if (type === "DEFAULT") {
    return (
      <Link href={direction ? direction : ""}>
        <Button>{title}</Button>
      </Link>
    );
  } else if (type === "EDIT_PROFILE") {
    return (
      <Link
        className="flex h-12 items-center justify-center rounded-lg border border-green-500 bg-transparent px-6 font-bold text-green-500 no-underline transition transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white"
        href={direction ? direction : ""} // Colocar nesse botão um efeito hover
      >
        <Pencil size={15} className="mr-2" />
        Edit profile
      </Link>
    );
  }
}
