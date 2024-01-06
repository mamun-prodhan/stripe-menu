import { Link } from "react-router-dom";
import { IoIosArrowForward, IoMdArrowForward } from "react-icons/io";
import { useState } from "react";
import ProductSubMenu from "../ProductSubMenu/ProductSubMenu";
import SolutionSubMenu from "../SolutionSubMenu/SolutionSubMenu";

const Navbar = () => {
  const [activeProduct, setActiveProduct] = useState("btn1");

  const handleHover = (btn) => {
    setActiveProduct(btn);
  };

  const handleMouseLeave = () => {
    setActiveProduct("btn1");
  };
  return (
    <header>
      {/* header container */}
      <div className="container mx-auto px-4 py-6 flex items-center gap-8">
        {/* logo */}
        <div>
          <Link
            to="/"
            className="text-3xl font-bold text-white hover:opacity-50 duration-300"
          >
            stripe
          </Link>
        </div>
        {/* menu */}
        <div className="lg:flex items-center justify-between w-full hidden">
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
              <li className="font-semibold">
                <button>Developers</button>
              </li>
              <li className="font-semibold">
                <button>Resources</button>
              </li>
              <li className="font-semibold">
                <button>Pricing</button>
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
      </div>
    </header>
  );
};

export default Navbar;
