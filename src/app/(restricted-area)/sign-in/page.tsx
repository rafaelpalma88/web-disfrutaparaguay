"use client"; // TODO: Apartar isso posteriormente

import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { useToast } from "@/components/ui/use-toast";

interface FormValues {
  email: string;
  password: string;
}

const signInForm = z.object({
  email: z.string().email(),
  password: z.string(),
});

type SignInForm = z.infer<typeof signInForm>;

export default function SignIn(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  // const { toast } = useToast();

  const handleSignIn: SubmitHandler<FormValues> = async (data: SignInForm) => {
    console.log("data", data);

    await new Promise((resolve) => setTimeout(resolve, 2000));
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
        <form
          onSubmit={handleSubmit(handleSignIn)}
          className="flex w-full flex-col justify-center"
        >
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
      </div>
    </div>
  );
}
