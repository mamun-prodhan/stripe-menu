import {
  IoIosArrowForward,
  IoMdArrowForward,
  IoMdArrowRoundForward,
} from "react-icons/io";
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

const ProductSubMenu = ({ activeProduct, handleHover, handleMouseLeave }) => {
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
    <div
      onMouseLeave={handleMouseLeave}
      className="absolute top-8 -left-28 transition group-hover:translate-y-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-300 ease-in-out group-hover:transform z-50 min-w-[900px] h-[900px] transform"
    >
      <div className="relative top-6 p-2 bg-[#EFF3F9] rounded-xl shadow-xl w-full">
        <nav className="grid gap-1 grid-cols-6 text-[#B7BFC7]">
          <div className="col-span-2">
            <SubMenuButton
              label="Global Payments"
              description="Accepts Payment online, in person or through your platform"
              isActive={activeProduct === "btn1"}
              handleHover={() => handleHover("btn1")}
            ></SubMenuButton>
            <SubMenuButton
              label="Revenue and Finance Automation"
              description="Grow Your Business with Automated revenue and finance."
              isActive={activeProduct === "btn2"}
              handleHover={() => handleHover("btn2")}
            ></SubMenuButton>
            <SubMenuButton
              label="Banking-as-a-Service"
              description="Embed financial services in your platform or product."
              isActive={activeProduct === "btn3"}
              handleHover={() => handleHover("btn3")}
            ></SubMenuButton>
          </div>
          {/* btn hover content */}
          <div className="col-span-4 p-4 bg-[#FFFFFF] rounded-lg">
            {activeProduct === "btn1" && (
              <div className="grid grid-cols-2 gap-4 ">
                {globalPayments.map((item, index) => (
                  <ProductSubMenus key={index} item={item} />
                ))}
              </div>
            )}
            {activeProduct === "btn2" && (
              <div>
                <div className="grid grid-cols-2 gap-4 ">
                  {revenueFinance.map((item, index) => (
                    <ProductSubMenus key={index} item={item} />
                  ))}
                </div>
                <div className="group/revenue flex items-center gap-10 mt-16 p-4 border rounded-lg text-gray-500 font-bold hover:text-gray-700">
                  <div>
                    <RiMenuSearchFill />
                  </div>
                  <div className="flex items-center gap-2">
                    <p>Automate revenue and finance on Stripe</p>
                    <span className="block group-hover/revenue:hidden hover:duration-300">
                      <IoIosArrowForward />
                    </span>
                    <span className="hidden group-hover/revenue:block hover:duration-300">
                      <IoMdArrowForward />
                    </span>
                  </div>
                </div>
              </div>
            )}
            {activeProduct === "btn3" && (
              <div className="grid grid-cols-2 gap-4 ">
                {bankingAsService.map((item, index) => (
                  <ProductSubMenus key={index} item={item} />
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ProductSubMenu;

// subMenuButton component
const SubMenuButton = ({ label, description, isActive, handleHover }) => {
  return (
    <div
      onMouseEnter={handleHover}
      className={`p-4 rounded-lg cursor-default hover:bg-[#FFFFFF] duration-500 ${
        isActive && "bg-[#FFFFFF]"
      }`}
    >
      <h4 className="font-bold text-gray-500">{label}</h4>
      <p className="font-normal text-gray-500">{description}</p>
    </div>
  );
};

// sub menus
const ProductSubMenus = ({ item }) => {
  return (
    <div className="flex items-center gap-4 group/item">
      <div>
        <img src={item.icon} alt="" />
      </div>
      <div>
        <p className=" font-bold text-gray-500 flex items-center gap-2">
          <span>{item.label}</span>
          <span className="hidden ms-1 group-hover/item:inline transition duration-300">
            <IoMdArrowRoundForward />
          </span>
        </p>
        <p className="font-normal text-gray-500 group-hover/item:text-gray-700">
          {item.details}
        </p>
      </div>
    </div>
  );
};
