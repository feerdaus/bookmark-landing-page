import "./App.css";
import Footer1 from "./components/common/Footer1";
import Footer2 from "./components/common/Footer2";
import Header from "./components/common/Header";
import Extensions from "./components/Extensions";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Extensions />
      <Faq />
      <Footer1 />
      <Footer2 />
    </>
  );
}

export default App;
