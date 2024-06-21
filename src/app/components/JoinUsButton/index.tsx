"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export function JoinUsButton() {
  const router = useRouter();

  const handleJoinUsClick = () => {
    router.push("/sign-up");
  };

  return <Button onClick={handleJoinUsClick}>Join us!</Button>;
}
