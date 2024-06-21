"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Eye, EyeSlash } from "phosphor-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormValues {
  email: string;
  password: string;
}

const signInForm = z.object({
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

type SignInForm = z.infer<typeof signInForm>;

export default function SignIn(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  // const { saveUserInfos, saveUserToken } = useAuth();
  // const [authenticationError, setAuthenticationError] = useState<string | null>(
  //   null,
  // );

  const router = useRouter();

  const handleSignIn: SubmitHandler<FormValues> = async (data: SignInForm) => {
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
    //   setAuthenticationError(null);
    //         `${process.env.NEXT_PUBLIC_API_URL}/me`, // TODO: Ajustar esse .env para env.js
    //       if (error instanceof AxiosError && error.response?.data?.message) {
    //         // setSignUpError(error.response.data.message);
    //         console.log("error", error);
    //         // setSignUpError("Erro ao fazer o registro");
    //   } catch (error) {
    //     if (error instanceof AxiosError && error.response?.data?.message) {
    //       setAuthenticationError(error.response.data.message);
    //     } else {
    //       setAuthenticationError("Erro ao fazer login");
    //     }
    //     // TODO: Criar um tratamento de erros melhor
    //   }
  };

  function handleRedirectToForgotPassword() {
    const email = getValues("email");
    router.push(`/forgot-password?email=${encodeURIComponent(email)}`);
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-96 flex-col items-center justify-center rounded-lg p-8 sm:border sm:border-gray-300 sm:shadow-md">
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
          {/* {authenticationError && (
            <p style={{ color: "red" }}>{authenticationError}</p>
          )} */}
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
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              className="mb-4 rounded border border-gray-300 p-2 pr-10"
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-3"
            >
              {showPassword ? <Eye /> : <EyeSlash />}
            </button>
          </div>
          <button
            type="submit"
            className="mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            disabled={isSubmitting}
          >
            Sign In
          </button>
          <div className="flex justify-end">
            <p
              className="mt-2 cursor-pointer underline"
              onClick={handleRedirectToForgotPassword}
            >
              Forgot password ?
            </p>
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
