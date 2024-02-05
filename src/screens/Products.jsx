import React from "react";
// Sections
// import TopNavbar from "../components/Nav/TopNavbar";
// import Header from "../components/Sections/Header";
import Products from "../components/Sections/Products";
import Projects from "../components/Sections/Projects";
// import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
// import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function ProductsPage() {
  return (
    <>
      {/* <TopNavbar /> */}
      <Products />
      <Projects />
      <Pricing />
      <Footer />
    </>
  );
}


