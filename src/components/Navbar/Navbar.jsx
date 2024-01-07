import { Link } from "react-router-dom";
import { IoIosArrowForward, IoMdArrowForward } from "react-icons/io";
import { useState } from "react";
import ProductSubMenu from "../ProductSubMenu/ProductSubMenu";
import SolutionSubMenu from "../SolutionSubMenu/SolutionSubMenu";
import ResourcesSubMenu from "../ResourcesSubMenu/ResourcesSubMenu";
import DevelopersSubMenu from "../DevelopersSubMenu/DevelopersSubMenu";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ProductSubMenuMobile from "../ProductSubMenuMobile/ProductSubMenuMobile";
import SolutionSubMenuMobile from "../SolutionSubMenuMobile/SolutionSubMenuMobile";
import DeveloperSubMenuMobile from "../DeveloperSubMenuMobile/DeveloperSubMenuMobile";
import ResourcesSubMenuMobile from "../ResourcesSubMenuMobile/ResourcesSubMenuMobile";

const Navbar = () => {
  const [activeProduct, setActiveProduct] = useState("btn1");
  const [activeProductMobile, setActiveProductMobile] = useState("");
  const [open, setOpen] = useState(false);

  const handleHover = (btn) => {
    setActiveProduct(btn);
  };

  const handleClick = (btn) => {
    setActiveProductMobile(btn);
  };

  const handleMouseLeave = () => {
    setActiveProduct("btn1");
  };
  return (
    <header>
      {/* header container */}
      <div className="container relative mx-auto px-6 py-8 lg:py-6 flex items-center justify-between gap-8">
        {/* logo */}
        <div>
          <Link
            to="/"
            className="text-2xl lg:text-3xl font-bold text-white hover:opacity-50 duration-300"
          >
            stripe
          </Link>
        </div>
        {/* menu for desktop screen */}
        <div className="lg:flex  items-center justify-between w-full hidden">
          {/* drop down buttons */}
          <nav>
            <ul className="flex items-center justify-center gap-8">
              <li className="relative group px-4 py-2 rounded-full">
                <button className="font-semibold hover:opacity-50 duration-300">
                  Products
                </button>
                <ProductSubMenu
                  activeProduct={activeProduct}
                  handleHover={handleHover}
                  handleMouseLeave={handleMouseLeave}
                ></ProductSubMenu>
              </li>
              <li className="relative group/solutions px-4 py-2 rounded-full">
                <button className="font-semibold hover:opacity-50 duration-300">
                  Solutions
                </button>
                <SolutionSubMenu></SolutionSubMenu>
              </li>
              <li className="relative group/developers px-4 py-2 rounded-full">
                <button className="font-semibold hover:opacity-50 duration-300">
                  Developers
                </button>
                <DevelopersSubMenu></DevelopersSubMenu>
              </li>
              <li className="relative group/resources px-4 py-2 rounded-full">
                <button className="font-semibold hover:opacity-50 duration-300">
                  Resources
                </button>
                <ResourcesSubMenu></ResourcesSubMenu>
              </li>
              <li className="font-semibold">
                <button className="font-semibold hover:opacity-50 duration-300">
                  Pricing
                </button>
              </li>
            </ul>
          </nav>
          {/* sign in links*/}
          <nav>
            <ul className="flex items-center gap-2">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 px-4 py-2 group font-semibold text-white hover:text-opacity-50 duration-300"
                >
                  <span>Contact Sales</span>
                  <span className="block group-hover:hidden hover:duration-300">
                    <IoIosArrowForward />
                  </span>
                  <span className="hidden group-hover:block hover:duration-300">
                    <IoMdArrowForward />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 px-4 py-2 group font-semibold rounded-full bg-white bg-opacity-10 hover:bg-opacity-30 duration-300"
                >
                  <span>Sign in</span>
                  <span className="block group-hover:hidden hover:duration-300">
                    <IoIosArrowForward />
                  </span>
                  <span className="hidden group-hover:block hover:duration-300">
                    <IoMdArrowForward />
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* menu for mobile screen */}
        <div className="block lg:hidden">
          {/* menu toggle button */}
          <div onClick={() => setOpen(!open)} className="">
            {!open && (
              <span className="block text-base rounded-full font-bold text-white bg-white bg-opacity-10 hover:bg-opacity-30 duration-300 px-4 py-2 ">
                <AiOutlineMenu></AiOutlineMenu>
              </span>
            )}
          </div>
          {/* all menu data */}
          {open && (
            <div className="">
              <div className="w-[90%] top-5 right-[5%] rounded-lg bg-white absolute">
                <div className="relative p-4">
                  <div className="">
                    <Link
                      to="/"
                      className="text-2xl lg:text-3xl font-bold text-indigo-500 hover:opacity-50 duration-300"
                    >
                      stripe
                    </Link>
                    <AiOutlineClose
                      onClick={() => setOpen(false)}
                      className="text-2xl lg:text-3xl font-bold text-gray-800 hover:opacity-50 duration-300 absolute top-4 right-4 z-[1000]"
                    ></AiOutlineClose>
                  </div>
                  {/* products menu div */}
                  <div>
                    <p className="text-gray-800 font-bold pt-6 pb-3 border-b-2 border-dotted">
                      Products
                    </p>
                    <ProductSubMenuMobile
                      activeProductMobile={activeProductMobile}
                      handleClick={handleClick}
                    ></ProductSubMenuMobile>
                  </div>
                  {/* solutions */}
                  <div>
                    <SolutionSubMenuMobile
                      activeProductMobile={activeProductMobile}
                      handleClick={handleClick}
                    ></SolutionSubMenuMobile>
                  </div>
                  {/* developers */}
                  <div>
                    <DeveloperSubMenuMobile
                      activeProductMobile={activeProductMobile}
                      handleClick={handleClick}
                    ></DeveloperSubMenuMobile>
                  </div>
                  {/* resources */}
                  <div>
                    <ResourcesSubMenuMobile
                      activeProductMobile={activeProductMobile}
                      handleClick={handleClick}
                    ></ResourcesSubMenuMobile>
                  </div>
                  <Link to="/" className="py-3 block">
                    <h4 className="text-gray-600 font-bold group-hover:text-gray-500">
                      Contact Sales
                    </h4>
                  </Link>
                  <Link to="/" className="py-3 block">
                    <h4 className="text-gray-600 font-bold group-hover:text-gray-500">
                      Pricing
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
