import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { Testmonials } from "./_components/testmonials";

export default function Home() {

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testmonials />
    </main>
  )
}