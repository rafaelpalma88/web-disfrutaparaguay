"use client";

import { useAuth } from "@/app/context/AuthContext";

export function ShowStatusFiliation() {
  const { user } = useAuth();

  return (
    <div>
      {user?.role === "NOT_APPROVED" && (
        <p>Sua filiação ainda não foi aprovada. Aguarde.</p>
      )}
    </div>
  );
}
