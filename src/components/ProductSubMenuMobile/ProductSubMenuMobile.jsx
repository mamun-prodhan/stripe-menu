import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { RiMenuSearchFill } from "react-icons/ri";
import payments from "../../assets/payments.svg";
import billing from "../../assets/billing.svg";
import checkout from "../../assets/checkout.svg";
import invoicing from "../../assets/invoicing.svg";
import elements from "../../assets/elements.svg";
import terminal from "../../assets/terminal.svg";
import paymentLinks from "../../assets/payment-links.svg";
import financialConnection from "../../assets/financial-connection.svg";
import radar from "../../assets/radar.svg";
import identity from "../../assets/identity.svg";
import connect from "../../assets/connect.svg";
import climate from "../../assets/climate.svg";
import sigma from "../../assets/sigma.svg";
import dataPipeline from "../../assets/data-pipeline.svg";
import tax from "../../assets/tax.svg";
import atlas from "../../assets/atlas.svg";
import revenueRecognition from "../../assets/revenue-recognition.svg";
import issuing from "../../assets/issuing.svg";
import capital from "../../assets/capital.svg";
import treasury from "../../assets/treasury.svg";
import ProductSubMenus from "../ProductSubMenus/ProductSubMenus";
import { Link } from "react-router-dom";

const ProductSubMenuMobile = ({ activeProductMobile, handleClick }) => {
  // products submenu global-payments data
  const globalPayments = [
    {
      icon: payments,
      label: "Payments",
      details: "Online payments",
      route: "/",
    },
    {
      icon: billing,
      label: "Billing",
      details: "Subscription management",
      route: "/",
    },
    {
      icon: checkout,
      label: "Chekout",
      details: "Prebuilt payment form",
      route: "/",
    },
    {
      icon: invoicing,
      label: "invoicing",
      details: "Online invoices",
      route: "/",
    },
    {
      icon: elements,
      label: "Elements",
      details: "Online invoices",
      route: "/",
    },
    {
      icon: terminal,
      label: "Terminal",
      details: "In-person payments",
      route: "/",
    },
    {
      icon: paymentLinks,
      label: "Payment Links",
      details: "No-code payments",
      route: "/",
    },
    {
      icon: financialConnection,
      label: "Financial Connections",
      details: "Linked financial account data",
      route: "/",
    },
    {
      icon: radar,
      label: "Radar",
      details: "Fraud & risk management",
      route: "/",
    },
    {
      icon: identity,
      label: "Identity",
      details: "Online Identity verification",
      route: "/",
    },
    {
      icon: connect,
      label: "Connect",
      details: "Payments for platforms",
      route: "/",
    },
    {
      icon: climate,
      label: "Climate",
      details: "Carbon removal",
      route: "/",
    },
  ];
  // products submenu revenue-and-finance data
  const revenueFinance = [
    {
      icon: billing,
      label: "Billing",
      details: "Subscription management",
      route: "/",
    },
    {
      icon: sigma,
      label: "Sigma",
      details: "Custom reports",
      route: "/",
    },
    {
      icon: invoicing,
      label: "invoicing",
      details: "Online invoices",
      route: "/",
    },
    {
      icon: dataPipeline,
      label: "Data Pipeline",
      details: "Data warehouse sync",
      route: "/",
    },
    {
      icon: tax,
      label: "Tax",
      details: "Sales tax & VAT automation",
      route: "/",
    },
    {
      icon: atlas,
      label: "Atlas",
      details: "Startup incorporation",
      route: "/",
    },
    {
      icon: revenueRecognition,
      label: "Revenue Recognition",
      details: "Accounting automation",
      route: "/",
    },
  ];
  // products submenu banking-as-service data
  const bankingAsService = [
    {
      icon: connect,
      label: "Connect",
      details: "Payments for platforms",
      route: "/",
    },
    {
      icon: issuing,
      label: "Issuing",
      details: "Card creation",
      route: "/",
    },
    {
      icon: capital,
      label: "Capital",
      details: "Business financing",
      route: "/",
    },
    {
      icon: treasury,
      label: "Treasury",
      details: "Banking-as-a-service",
      route: "/",
    },
  ];

  return (
    <div className="">
      <div>
        <ProductMobileButton
          label="Global Payments"
          description="Accept payments online, in person, or through your platform"
          isActive={activeProductMobile === "btn1"}
          handleClick={() => handleClick("btn1")}
        ></ProductMobileButton>
        <ProductMobileButton
          label="Revenue and Finance Automation"
          description="Grow Your Business with Automated revenue and finance."
          isActive={activeProductMobile === "btn2"}
          handleClick={() => handleClick("btn2")}
        ></ProductMobileButton>
        <ProductMobileButton
          label="Banking-as-a-Service"
          description="Embed financial services in your platform or product."
          isActive={activeProductMobile === "btn3"}
          handleClick={() => handleClick("btn3")}
        ></ProductMobileButton>
      </div>
      {/* data */}
      {activeProductMobile === "btn1" && (
        <div className=" w-[100%] top-0 right-0  rounded-lg p-4 bg-white absolute">
          <div>
            <button
              className="flex items-center gap-2 text-indigo-500"
              onClick={() => handleClick("")}
            >
              <IoIosArrowBack /> <span>Back</span>
            </button>
          </div>
          <h4 className="text-gray-500 font-semibold mt-10 mb-6 uppercase">
            Global Payments
          </h4>
          <div className="grid grid-cols-1 gap-4">
            {globalPayments.map((item, index) => (
              <ProductSubMenus key={index} item={item} />
            ))}
          </div>

          <div className="mt-20">
            <Link to="/">
              <button className="flex mx-auto items-center gap-2 text-sm ps-3 pe-2 py-1 group font-semibold rounded-full bg-indigo-600 hover:bg-black duration-300">
                <span>Sign in</span>
                <span className="block group-hover:hidden hover:duration-300">
                  <IoIosArrowForward />
                </span>
                <span className="hidden group-hover:block hover:duration-300">
                  <IoMdArrowForward />
                </span>
              </button>
            </Link>
          </div>
        </div>
      )}
      {activeProductMobile === "btn2" && (
        <div className=" w-[100%] top-0 right-0 rounded-lg p-4 bg-white absolute">
          <div>
            <button
              className="flex items-center gap-2 text-indigo-500"
              onClick={() => handleClick("")}
            >
              <IoIosArrowBack /> <span>Back</span>
            </button>
          </div>
          <h4 className="text-gray-500 font-semibold mt-10 mb-6 uppercase">
            Revenue and finance automation
          </h4>
          <div className="grid grid-cols-1 gap-4">
            {revenueFinance.map((item, index) => (
              <ProductSubMenus key={index} item={item} />
            ))}
          </div>
          <div className="mt-20">
            <Link to="/">
              <button className="flex mx-auto items-center gap-2 text-sm ps-3 pe-2 py-1 group font-semibold rounded-full bg-indigo-600 hover:bg-black duration-300">
                <span>Sign in</span>
                <span className="block group-hover:hidden hover:duration-300">
                  <IoIosArrowForward />
                </span>
                <span className="hidden group-hover:block hover:duration-300">
                  <IoMdArrowForward />
                </span>
              </button>
            </Link>
          </div>
        </div>
      )}
      {activeProductMobile === "btn3" && (
        <div className=" w-[100%] h-[600px] top-0 right-0 rounded-lg p-4 bg-white absolute">
          <div>
            <button
              className="flex items-center gap-2 text-indigo-500"
              onClick={() => handleClick("")}
            >
              <IoIosArrowBack /> <span>Back</span>
            </button>
          </div>
          <h4 className="text-gray-500 font-semibold mt-10 mb-6 uppercase">
            Banking-as-a-service
          </h4>
          <div className="grid grid-cols-1 gap-4">
            {bankingAsService.map((item, index) => (
              <ProductSubMenus key={index} item={item} />
            ))}
          </div>
          <div className="mt-48">
            <Link to="/">
              <button className="flex mx-auto items-center gap-2 text-sm ps-3 pe-2 py-1 group font-semibold rounded-full bg-indigo-600 hover:bg-black duration-300">
                <span>Sign in</span>
                <span className="block group-hover:hidden hover:duration-300">
                  <IoIosArrowForward />
                </span>
                <span className="hidden group-hover:block hover:duration-300">
                  <IoMdArrowForward />
                </span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSubMenuMobile;

const ProductMobileButton = ({ label, description, isActive, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-between group py-3"
    >
      <div>
        <h4 className="text-gray-600 font-bold group-hover:text-gray-500">
          {label}
        </h4>
        <p className="text-gray-500 group-hover:text-gray-400">{description}</p>
      </div>
      <div>
        <IoIosArrowForward className="text-xl text-gray-600 group-hover:text-gray-500" />
      </div>
    </div>
  );
};
