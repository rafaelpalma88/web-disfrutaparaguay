"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { registerUser } from "@/api/register-user";
import { signIn } from "@/api/sign-in";
import saveCookieLogin from "@/app/lib/save-cookie-login";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const signUpForm = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export default function SignUp(): JSX.Element {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [nameUserCreated, setNameUserCreated] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const router = useRouter();

  const handleSignUp: SubmitHandler<FormValues> = async (data: SignUpForm) => {
    try {
      const { name, email, password } = data;

      const userCreated = await registerUser({ name, email, password });

      console.log("userCreated", userCreated);

      setNameUserCreated(userCreated?.data?.user?.name);

      const token = await signIn({ email, password });
      await saveCookieLogin(token.data.token);

      setIsFormSubmitted(true);
    } catch (error) {
      console.error("Error logging in:", error);
    }

    // await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  async function handleGoToDashboard() {
    await router.push("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-96 flex-col items-center justify-center rounded-lg border border-gray-300 p-8 shadow-md">
        <Link href={"/"} className="mb-4 w-3/4">
          <Image
            src="/logoDisfrutaParaguay.png"
            width={250}
            height={250}
            alt="Logo Disfruta Paraguay"
            style={{ width: "100%", height: "auto" }}
            priority={true}
          />
        </Link>
        {/* <Button
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
          }}
        >
          Show Toast
        </Button> */}
        {isFormSubmitted ? (
          <div className="flex w-full flex-col justify-center">
            <p>
              Welcome {nameUserCreated}! Now you are in the row to be a member
              of <strong>Disfruta Paraguay!</strong>
            </p>
            <p>Please wait our contact accepting your filiation!</p>
            <button
              style={{ marginTop: 20 }}
              type="submit"
              className="mb-4 rounded bg-blue-500 px-4 py-2 text-white"
              onClick={handleGoToDashboard}
            >
              Go to dashboard
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="flex w-full flex-col justify-center"
            method="POST"
          >
            <Label htmlFor="name" className="mb-2">
              Nome completo:
            </Label>
            <Input
              type="name"
              id="name"
              className="mb-4 rounded border border-gray-300 p-2"
              {...register("name")}
            />

            <Label htmlFor="username" className="mb-2">
              E-mail:
            </Label>
            <Input
              type="email"
              id="email"
              className="mb-4 rounded border border-gray-300 p-2"
              {...register("email")}
            />

            <Label htmlFor="password" className="mb-2">
              Password:
            </Label>
            <Input
              type="password"
              id="password"
              className="mb-4 rounded border border-gray-300 p-2"
              {...register("password")}
            />

            <button
              type="submit"
              className="mb-4 rounded bg-blue-500 px-4 py-2 text-white"
              disabled={isSubmitting}
            >
              Sign Up
            </button>

            <div className="flex justify-end">
              <Link href="/forgot-password">
                <p className="mt-2 underline">Forgot password ?</p>
              </Link>
            </div>

            <div className="mt-8 text-center">
              <p>Still have your account?</p>
              <Link href="/sign-in">
                <p className="font-bold underline">Come back to Sign-in page</p>
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
