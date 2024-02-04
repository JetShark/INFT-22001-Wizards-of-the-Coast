import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Screens
import Landing from "./screens/Landing.jsx";
import TopNavbar from "./components/Nav/TopNavbar.jsx";
import AboutPage from "./screens/About.jsx";
import ContactPage from "./screens/Contact.jsx";  
import ProductsPage from "./screens/Products.jsx";


export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <TopNavbar />
      <Router>
              <Routes>
                  <Route exact path="/" element={<Landing />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route
                      path="/contact"
                      element={<ContactPage />}
                  />
                  <Route path="/products" element={<ProductsPage />} />
            </Routes>
        </Router>
    </>
  );
}

