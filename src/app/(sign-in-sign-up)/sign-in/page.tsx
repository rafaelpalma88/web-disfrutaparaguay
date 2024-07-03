import { customMetadata } from "@/app/lib/metadata";

import SignInForm from "./SignInForm";

export const metadata = customMetadata("Sign In");

export default function SignIn(): JSX.Element {
  return (
    <div className="flex items-center justify-center sm:min-h-screen">
      <SignInForm />
    </div>
  );
}
