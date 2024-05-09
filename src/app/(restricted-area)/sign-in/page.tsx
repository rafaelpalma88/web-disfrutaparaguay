"use client";

import {
  BoxLogin,
  Container,
  CustomButton,
  CustomInput,
  Label,
} from "./page.styled";
import Image from "next/image";
import Link from "next/link";

export default function SignIn(): JSX.Element {
  return (
    <Container>
      <BoxLogin>
        <Link href={"/"} style={{ width: "70%", marginBottom: 20 }}>
          <Image
            src="/logoDisfrutaParaguay.png"
            width={500}
            height={500}
            alt="Logo Disfruta Paraguay"
          />
        </Link>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Label htmlFor="username">E-mail:</Label>
          <CustomInput />

          <Label htmlFor="password">Password:</Label>

          <CustomInput type="password" />

          <CustomButton variant="default">Sign In</CustomButton>

          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <Link href="/forgot-password">
              <p style={{ marginTop: 7, textDecoration: "underline" }}>
                Forgot password ?
              </p>
            </Link>
          </div>

          <div style={{ marginTop: 40, textAlign: "center" }}>
            <p>Still don't have your account?</p>
            <Link href="/sign-up">
              <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
                Create a new one
              </p>
            </Link>
          </div>
        </form>
      </BoxLogin>
    </Container>
  );
}

// TODO: Colocar um check-box Remember Me
