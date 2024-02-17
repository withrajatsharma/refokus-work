import React from "react";
import Product from "./Product";

const Products = () => {
  const data = [
    {
      title: "Arqitel",
      desc: "Arqitel de prod sur les    products sur les products sur les ",
      live: true,
      case: false,
      clr:`from-violet-600 to-violet-400`
    },
    {
      title: "Cula",
      desc: "Arqitel de prod sur les    products sur les products sur les ",
      live: true,
      case: true,
      clr:`from-sky-500 to-sky-400`
    },
    {
      title: "TTR",
      desc: "Arqitel de prod sur les    products sur les products sur les ",
      live: true,
      case: false,
      clr:`from-emerald-500 to-emerald-400`
    },
    {
      title: "Maniv",
      desc: "Arqitel de prod sur les    products sur les products sur les ",
      live: true,
      case: true,
      clr:`from-orange-500 to-orange-400`
    },
    {
      title: "Rainfall",
      desc: "Arqitel de prod sur les    products sur les products sur les ",
      live: true,
      case: false,
      clr:`from-rose-500 to-rose-400`
    },
  ];

  return (
    <section>
      {data.map((product, i) => (
        <Product data={product} key={i} />
      ))}
    </section>
  );
};

export default Products;
