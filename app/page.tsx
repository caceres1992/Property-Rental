import ScrollMandatoryComp from "./components/ScrollMandatoryComp";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Property from "./components/Property";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import ModalMap from "./components/ModalMap";
import { fetchingHomePage } from "./lib/fetchingData";
import Navbar from "./components/Navbar";
export default async function Home() {
  const homeData: IHomePage = await (await fetchingHomePage()).json();
  const { hero, about, services, property } = homeData;

  return (
    <>
      <Navbar />
      <Hero heroData={hero} />
      <About aboutData={about} />
      <Services serviceData={services} />
      <Property propertyData={property} />
      <Footer />
      <ContactModal />
      <ModalMap />
    </>
  );
}
