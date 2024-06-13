"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { FooterHome } from "./components/FooterHome";
import { Header } from "./components/Header";

export default function Home() {
  const router = useRouter();

  const handleJoinUsClick = () => {
    router.push("/sign-up");
  };

  return (
    <div>
      <Header />
      <div className="flex w-full">
        <div
          className="h-screen w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/friends.jpg')",
            backgroundPosition: "center",
            height: "calc(100vh - 110)",
          }}
        >
          <div
            className="mx-auto max-w-4xl "
            style={{ marginTop: "calc(50vh)" }}
          >
            <div className="mt-16 w-full p-5 sm:w-1/2 sm:p-0">
              <span className="mb-5 inline-block bg-blue-800 px-2 py-2  text-3xl font-extrabold text-white antialiased">
                {/* 0038A8 */}
                Your group in Paraguay
              </span>
              <span className="mb-5 inline-block bg-red-600 px-2 py-2 font-semibold text-white antialiased">
                {/* D52B1E */}
                If you&apos;re an expatriate looking to get involved in
                philanthropic work, to explore what the country offers, or to
                make new friends, you&apos;ve found your group!
              </span>
              <Button onClick={handleJoinUsClick}>Join us!</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5 pb-10 pt-10 sm:mx-auto sm:max-w-4xl sm:flex-row sm:p-0 sm:pb-20 sm:pt-20">
        <div className=" w-full sm:mt-0 sm:w-1/2 sm:pr-10 ">
          <p className="mb-4 text-2xl font-bold tracking-tighter">
            How everything started
          </p>
          <p>
            <strong>Disfruta Paraguay!</strong> is a group that aims to bring
            people together to discover the different places that Paraguay
            offers to promote integration, friendship and also philanthropic
            work. It is an extension of the success of the{" "}
            <strong>Descobrindo São Paulo</strong> group, co-founded by Rafael
            Palma, in 2018.
          </p>
          <p>
            The group had more than a thousand members with an active schedule
            of monthly meetings, including philanthropic activities.
          </p>
        </div>
        <div className="mt-16 w-full sm:mt-0 sm:w-1/2">
          <Image
            src="/descobrindosaopaulo.jpeg"
            width={500}
            height={500}
            alt="Descobrindo São Paulo"
          />
        </div>
      </div>
      <FooterHome />
    </div>
  );
}
