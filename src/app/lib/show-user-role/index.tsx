export function showUserRole(role: string) {
  if (role === "ADMIN") {
    return "Administrator";
  } else if (role === "MEMBER") {
    return "Member"; // Colocar Membro desde 4 de julho de 2024
  } else if (role === "NOT_APPROVED") {
    return "Not Approved";
  }
  return "";
}
