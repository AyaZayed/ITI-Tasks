import "./App.css";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
   return (
      <>
         <Navbar />
         <Hero />
         <Cards />
         <Footer />
      </>
   );
}

export default App;
