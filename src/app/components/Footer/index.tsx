import Link from "next/link";

export function Footer() {
  return (
    <ul className="flex justify-center">
      <li>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </li>
      <li className="mx-2">|</li>
      <li>
        <Link href="/terms-of-use">Terms & Use</Link>
      </li>
      <li className="mx-2">|</li>
      <li>
        <Link href="/contact-us">Contact Us</Link>
      </li>
    </ul>
  );
}
