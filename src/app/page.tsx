import Image from "next/image";

import { Button } from "@/components/ui/button";

import { FooterHome } from "./components/FooterHome";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex w-full">
        <div
          className="h-screen w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/friends.jpg')",
            height: "calc(100vh - 110)",
          }}
        >
          <div
            className="mx-auto max-w-4xl "
            style={{ marginTop: "calc(50vh)" }}
          >
            <div className="mt-16 w-1/2">
              <span className="mb-5 inline-block bg-blue-800 px-2 py-2 text-3xl font-extrabold text-white antialiased">
                {/* 0038A8 */}
                Your group in Paraguay
              </span>
              <span className="mb-5 inline-block bg-red-600 px-2 py-2 font-semibold text-white antialiased">
                {/* D52B1E */}
                If you're an expatriate looking to get involved in philanthropic
                work, to explore what the country offers, or to make new
                friends, you've found your group!
              </span>
              <Button className="">Join us!</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-4xl pb-20 pt-20">
        <div className="w-3/5 pr-8">
          <p className="mb-4 text-2xl font-bold">How everything started</p>
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
        <div>
          <Image
            src="/descobrindosaopaulo.jpeg"
            width={500}
            height={500}
            alt="Descobrindo São Paulo"
            // style={{ width: "70%" }}
          />
        </div>
      </div>
      <FooterHome />
    </div>
  );
}
