"use client"; // TODO: Apartar isso posteriormente

import { Suspense, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormValues {
  email: string;
}

const signInForm = z.object({
  email: z.string().email(),
});

type ForgotPasswordForm = z.infer<typeof signInForm>;

function SignInForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(signInForm),
  });

  const searchParams = useSearchParams();

  useEffect(() => {
    const email = searchParams.get("email");
    if (email) {
      setValue("email", String(email));
    }
  }, [searchParams, setValue]);

  const handleSignIn: SubmitHandler<FormValues> = (
    data: ForgotPasswordForm,
  ) => {
    console.log("data", data);

    try {
      // Incluir aqui um serviço que faz o envio de e-mail para o cliente permitindo a alteraao da senha
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

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

        <form
          onSubmit={handleSubmit(handleSignIn)}
          className="flex w-full flex-col justify-center"
          method="POST"
        >
          <p style={{ marginBottom: 10 }}>
            Type your e-mail here to reset your password
          </p>
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

          <button
            type="submit"
            className="mb-4 rounded bg-blue-500 px-4 py-2 text-white"
            disabled={isSubmitting}
          >
            Reset Password
          </button>

          <div className="flex justify-end">
            <Link href="/sign-in">
              <p className="mt-2 underline">Come back to Sign-In</p>
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

export default function SignIn(): JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInForm />
    </Suspense>
  );
}
