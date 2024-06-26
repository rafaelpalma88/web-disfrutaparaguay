"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
}

export function NavLink({ children, ...props }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      data-current={pathname === props.href}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    >
      {children}
    </Link>
  );
}
