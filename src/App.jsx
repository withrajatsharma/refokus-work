import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";

const App = () => {
  return (
    <main className="w-full bg-dark_grey font-[mainFont]">
      <Navbar />
      <Work/>
      <Stripes />
      <Products/>
      <Marquees />
      <Cards />
    </main>
  );
};

export default App;
