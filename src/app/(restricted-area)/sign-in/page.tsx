import Link from "next/link";
import Image from "next/image";

export default function SignIn(): JSX.Element {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center justify-center w-96 border border-gray-300 p-8 rounded-lg shadow-md">
        <Link href={"/"} className="w-3/4 mb-4">
          <Image
            src="/logoDisfrutaParaguay.png"
            width={500}
            height={500}
            alt="Logo Disfruta Paraguay"
          />
        </Link>
        <form className="flex flex-col justify-center w-full">
          <label htmlFor="username" className="mb-2">
            E-mail:
          </label>
          <input
            type="email"
            className="border border-gray-300 p-2 rounded mb-4"
          />

          <label htmlFor="password" className="mb-2">
            Password:
          </label>
          <input
            type="password"
            className="border border-gray-300 p-2 rounded mb-4"
          />

          <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
            Sign In
          </button>

          <div className="flex justify-end">
            <Link href="/forgot-password">
              <p className="mt-2 underline">Forgot password ?</p>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p>Still don't have your account?</p>
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
