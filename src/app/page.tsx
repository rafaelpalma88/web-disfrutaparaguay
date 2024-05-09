import { Button } from "@/components/ui/button";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="w-full flex">
        <div
          className="h-screen w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/friends.jpg')",
            height: "calc(100vh - 110)",
          }}
        >
          <div
            className="max-w-4xl mx-auto"
            style={{ marginTop: "calc(50vh)" }}
          >
            <h2 style={{ marginBottom: 10 }}>Lorem Ipsum Dolor sit Amet</h2>
            <p style={{ marginBottom: 10 }}>Lorem Ipsum Dolor sit amet </p>
            <Button>Peça já seu convite </Button>
          </div>
        </div>
      </div>
      <div style={{ height: 1000 }}></div>
    </div>
  );
}
