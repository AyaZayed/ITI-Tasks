import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
   return (
      <>
         <Navbar />

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
         </Routes>

         <Footer />
      </>
   );
}

export default App;
