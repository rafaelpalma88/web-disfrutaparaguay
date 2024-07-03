import { customMetadata } from "@/app/lib/metadata";

import { SignUpForm } from "./SignUpForm";

export const metadata = customMetadata("Sign Up");

export default function SignUp(): JSX.Element {
  return (
    <div className="flex items-center justify-center sm:min-h-screen">
      <SignUpForm />
    </div>
  );
}
