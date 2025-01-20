import { Hero } from "@/components/hero";
import { Pets } from "@/components/pets";
import { Footer } from "@/components/footer";
import { Adoption } from "@/components/adoption";
import { Services } from "@/components/services";
import { Newsletter } from "@/components/newsletter";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto overflow-hidden">
      <Hero />
      <Pets />
      <Services />
      <Adoption />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
