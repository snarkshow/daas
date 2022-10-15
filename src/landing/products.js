import React from "react";
import { MdOutlineMarkEmailUnread, MdCoffee } from "react-icons/md";
import { ImSad, ImExit } from "react-icons/im";
const Products = () => {
  return (
    <section className="flex flex-wrap h-1/2 ">
      <div className="flex basis-1/2 md:basis-1/4 border justify-center items-center">
        <MdOutlineMarkEmailUnread size={72} />
      </div>
      <div className="flex basis-1/2 md:basis-1/4 border justify-center items-center">
        <MdCoffee size={72} />
      </div>
      <div className="flex basis-1/2 md:basis-1/4 border justify-center items-center">
        <ImExit size={72} />
      </div>
      <div className="flex basis-1/2 md:basis-1/4 border justify-center items-center">
        <ImSad size={72} />
      </div>
    </section>
  );
};

export default Products;
