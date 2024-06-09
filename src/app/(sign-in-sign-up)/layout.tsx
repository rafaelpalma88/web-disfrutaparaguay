import "../globals.css";

export default function SignInSignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex-1">{children}</div>;
}
