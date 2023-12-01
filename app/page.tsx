import About from "./components/About";
import NavBar from "./components/AnotherNav";
import BTWP from "./components/BetweenPages";
import Fleet from "./components/Fleet";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";


export default function Home() {
  return (
    <main className="p-[15px] md:p-[30px] lg:p-[60px]">
      {/* <Navbar />
      <Fleet />
    <Services /> */}
      <NavBar />
      <BTWP />
      <Hero />
      <BTWP />
      <About />
    </main>
  );
}
