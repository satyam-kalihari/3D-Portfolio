import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Info from "../components/Info";
import MyProject from "@/components/MyProject"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Info />
      <MyProject />
    </main>
  );
}
