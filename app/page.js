import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar/>
      <Profile/>
      <Skills/>
    </main>
  );
}
