"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { registerUser } from "@/api/register-user";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";

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
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const { mutateAsync: registerUserFn } = useMutation({
    mutationFn: registerUser,
  });

  const handleSignUp: SubmitHandler<FormValues> = async (data: SignUpForm) => {
    try {
      const { name, email, password } = data;

      const teste = await registerUserFn({ name, email, password });

      console.log("teste - ", teste);
      setIsFormSubmitted(true);
    } catch (error) {
      console.error("Error logging in:", error);
    }

    // await new Promise((resolve) => setTimeout(resolve, 2000));
  };

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
          <div>Submitted Form. Limpar</div>
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
        )}
      </div>
    </div>
  );
}
