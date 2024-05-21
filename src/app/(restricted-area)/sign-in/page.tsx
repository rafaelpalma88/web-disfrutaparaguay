import Image from "next/image";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignIn(): JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-96 flex-col items-center justify-center rounded-lg border border-gray-300 p-8 shadow-md">
        <Link href={"/"} className="mb-4 w-3/4">
          <Image
            src="/logoDisfrutaParaguay.png"
            width={500}
            height={500}
            alt="Logo Disfruta Paraguay"
          />
        </Link>
        <form className="flex w-full flex-col justify-center">
          <Label htmlFor="username" className="mb-2">
            E-mail:
          </Label>
          <Input
            type="email"
            id="email"
            className="mb-4 rounded border border-gray-300 p-2"
          />

          <Label htmlFor="password" className="mb-2">
            Password:
          </Label>
          <Input
            type="password"
            id="password"
            className="mb-4 rounded border border-gray-300 p-2"
          />

          <button
            type="submit"
            className="mb-4 rounded bg-blue-500 px-4 py-2 text-white"
          >
            Sign In
          </button>

          <div className="flex justify-end">
            <Link href="/forgot-password">
              <p className="mt-2 underline">Forgot password ?</p>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p>Still don&apos;t have your account?</p>
            <Link href="/sign-up">
              <p className="font-bold underline">
                Would you like to create one now?
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
