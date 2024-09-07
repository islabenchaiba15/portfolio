import ContactForm from "@/components/ContactForm";
import { DockDemo } from "@/components/Floaten";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import PortfolioShowcase from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/ui/timeline";
import Work from "@/components/Work";
import BentoGrid from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden scrollbar-track-pink-50 scrollbar-thumb-blue-950 scrollbar  scroll-smooth snap-mandatory snap-y h-screen overflow-y-scroll">
      <div className="snap-center">
        <DockDemo />
      </div>
      <div className="snap-center">
        <Navbar />
      </div>
      <div className="snap-center">
        <Profile />
      </div>
      {/* <div className="snap-center">
        <Work />
      </div> */}
      <div className="snap-start">
        <div className=" pt-3 pb-8">
          <Skills />
        </div>
        <div className=" py-4">
          <Timeline />
        </div>
        <div className=" py-2">
          <PortfolioShowcase />
        </div>
        <div className=" pt-4 pb-24">
          <ContactForm />
        </div>
      </div>
      {/* <Work/> */}
    </main>
  );
}
