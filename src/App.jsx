import React, { useState } from "react";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import Programs from "./Components/Programs/programs";
import Title from "./Components/Title/title";
import About from "./Components/About/about";
import Campus from "./Components/Campus/campus";
import Testimonial from "./Components/Testimonials/testimonials";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/foote";

function App() {
  const [play, setPlay] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <Title subtitle="OUR PROGRAMS" heading="What we Offer" />
        <Programs />
        <About setPlay={setPlay} play={play} />
        <Title subtitle="GALLERY" heading="Campus Photos" />
        <Campus />
        <Title subtitle="TESTIMONIALS" heading="What Student Says" />
        <Testimonial />
        <Title subtitle="Contact Us" heading="Get in touch" />
        <Contact />
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default App;
