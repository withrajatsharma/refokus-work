import React from "react";
import logo from "../assets/refokus logo.svg";
import Button from "./Button.jsx";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-dark_grey z-[10]">
      
    <nav className="flex  justify-between items-center max-w-screen-xl mx-auto  h-10 border-b border-[#3e3e46] py-10">
      <div className="flex items-center ">
        <img className="mr-24" src={logo} alt="logo" />

        <div className="text-white flex items-center text-sm gap-20">
          {["Home", "Work", "Careers", "", "News"].map((link, index) => {
            if (link === "")
            return (
          <div
          key={index}
          className=" w-[1.5px] h-5 -mx-10 bg-[#3e3e46]"
          ></div>
          );
          else {
            return (
              <a
              key={index}
              className="flex hover:font-bold duration-150 items-center"
              href="#"
              >
                  {link == "Work" && (
                    <span
                    style={{ boxShadow: "0 0 .5em #00FF19" }}
                    className="inline-block mr-1 w-2 h-2 blur-[1px] rounded-full bg-[#00FF19]"
                    ></span>
                    )}

                  {link}
                </a>
              );
            }
          })}
        </div>
      </div>

      <Button>Start a Project</Button>
    </nav>
          </nav>
  );
};

export default Navbar;
