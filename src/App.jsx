import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";

const App = () => {
  return (
    <main className="w-full bg-dark_grey font-[mainFont]">
      <Navbar />
      <Work/>
      <Stripes />
      <Products/>
    </main>
  );
};

export default App;
