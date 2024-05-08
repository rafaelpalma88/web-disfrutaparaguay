import "../globals.css";

export default function RestrictedAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex-1">{children}</div>

      <p>OI</p>

      <span>Oi</span>
    </>
  );
}
