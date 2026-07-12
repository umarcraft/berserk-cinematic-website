import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Timeline from "./components/Timeline";
import Quotes from "./components/Quotes";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";

import "./App.css";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

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