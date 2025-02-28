import { Menu } from "./components/Menu";
import { About } from "./sections/About";
import { Hero } from "./sections/Hero";
import Specials from "./sections/Specials";
import WhyUs from "./sections/WhyUs";


export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
<About />
<WhyUs />
<Menu />
<Specials />
      </main>
    </>
 

  );
}
