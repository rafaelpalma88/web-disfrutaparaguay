"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { registerUser } from "@/api/register-user";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const signUpForm = z.object({
  name: z
    .string()
    .min(2, "O nome precisa ter no mínimo 2 caracteres")
    .max(30, "O nome não pode ter mais de 30 caracteres"),
  email: z
    .string()
    .email()
    .min(2, "O nome precisa ter no mínimo 2 caracteres")
    .max(50, "O nome não pode ter mais de 50 caracteres"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(10, "Password must be until 10 characters long"),
});

type SignUpForm = z.infer<typeof signUpForm>;

export default function SignUp(): JSX.Element {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [nameUserCreated, setNameUserCreated] = useState<string>("");
  const [signUpError, setSignUpError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const router = useRouter();

  const handleSignUp: SubmitHandler<FormValues> = async (data: SignUpForm) => {
    setSignUpError(null);

    try {
      const { name, email, password } = data;

      const userCreated = await registerUser({ name, email, password });

      setNameUserCreated(userCreated?.data?.user?.name);

      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        console.log("result", result.error);
        return;
      }

      await router.replace("/dashboard");

      setIsFormSubmitted(true);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        setSignUpError(error.response.data.message);
      } else {
        setSignUpError("Erro ao fazer o registro");
      }
    }
  };

  async function handleGoToDashboard() {
    await router.push("/dashboard");
  }

  return (
    <div className="flex items-center justify-center sm:min-h-screen">
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
            {signUpError && <p style={{ color: "red" }}>{signUpError}</p>}
            <Label htmlFor="name" className="mb-2">
              Nome completo:
            </Label>
            {errors.name && (
              <p style={{ color: "red" }}>{errors.name.message}</p>
            )}
            <Input
              type="name"
              id="name"
              className="mb-4 rounded border border-gray-300 p-2"
              {...register("name")}
            />

            <Label htmlFor="username" className="mb-2">
              E-mail:
            </Label>
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
            <Input
              type="email"
              id="email"
              className="mb-4 rounded border border-gray-300 p-2"
              {...register("email")}
            />

            <Label htmlFor="password" className="mb-2">
              Password:
            </Label>
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
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
