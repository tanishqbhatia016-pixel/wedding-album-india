import Instagram from "./components/Instagram";
import ScrollProgress from "./components/ScrollProgress";
import MouseGlow from "./components/MouseGlow";
import LogoIntro from "./components/LogoIntro";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import VideoSection from "./components/VideoSection";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedProducts from "./components/FeaturedProducts";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/Whatsapp";
import MusicPlayer from "./components/MusicPlayer";
import FadeIn from "./components/FadeIn";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <>
      {/* Intro */}
      <LogoIntro />

      {/* Effects */}
      <MouseGlow />
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <HeroSlider />

      {/* Website */}
      <main className="bg-black">

        <FadeIn>
          <WhyChooseUs />
        </FadeIn>

        <FadeIn>
          <VideoSection />
        </FadeIn>

        <FadeIn>
          <FeaturedProducts />
        </FadeIn>

        <FadeIn>
          <Gallery />
        </FadeIn>

        <FadeIn>
          <About />
        </FadeIn>

        <FadeIn>
          <Stats />
        </FadeIn>

        <FadeIn>
          <Contact />
        </FadeIn>

        <FadeIn>
          <Footer />
        </FadeIn>

      </main>

      {/* Floating Buttons */}
      <WhatsAppButton />
      <Instagram />
      <BackToTop />

      {/* Background Music */}
      <MusicPlayer />
    </>
  );
}