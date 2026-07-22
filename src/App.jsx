import { useEffect, useState } from "react";
import { useLenis } from "./hooks/useLenis";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Story from "./components/sections/Story";
import Timeline from "./components/sections/Timeline";
import Quotes from "./components/sections/Quotes";
import Gallery from "./components/sections/Gallery";
import Footer from "./components/layout/Footer";
import Loader from "./components/ui/Loader";
import Cursor from "./components/ui/Cursor";

function App() {
  useLenis();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Story />
      <Timeline />
      <Quotes />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
