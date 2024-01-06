import {
  IoIosArrowForward,
  IoMdArrowForward,
  IoMdArrowRoundForward,
} from "react-icons/io";
import { RiMenuSearchFill } from "react-icons/ri";

const ProductSubMenu = ({ activeProduct, handleHover, handleMouseLeave }) => {
  // products submenu global-payments data
  const globalPayments = [
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--Payments "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Payments</title>

          <path
            d="M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z"
            fill="url(#product-icon-payments-SiteMenu-a)"
          ></path>
          <path
            d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z"
            fill="#96F"
          ></path>
          <path
            d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z"
            fill="url(#product-icon-payments-SiteMenu-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-payments-SiteMenu-a"
              x1="20"
              y1="4.13"
              x2="20"
              y2="21.13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11EFE3"></stop>
              <stop offset="1" stopColor="#21CFE0"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-payments-SiteMenu-b"
              x1="35"
              y1="11.28"
              x2="35"
              y2="28.72"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0048E5"></stop>
              <stop offset="1" stopColor="#9B66FF"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Payments",
      details: "Online payments",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--Billing "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Billing</title>

          <path
            d="M26 2.46C26 1.1 24.9 0 23.53 0H2.47A2.47 2.47 0 0 0 0 2.46v30.08a2.46 2.46 0 0 0 3.47 2.25l10.2-4.53 10.86-4.83c.9-.4 1.47-1.27 1.47-2.25V2.46z"
            fill="url(#product-icon-billing-SiteMenu-a)"
          ></path>
          <path
            d="M26.5 39a13.5 13.5 0 1 0 0-27 13.5 13.5 0 0 0 0 27z"
            fill="#00D924"
          ></path>
          <path
            d="M26 12v11.18c0 .98-.57 1.86-1.47 2.25l-10.7 4.76A13.5 13.5 0 0 1 26 12z"
            fill="url(#product-icon-billing-SiteMenu-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-billing-SiteMenu-a"
              x1="13"
              y1="6.35"
              x2="13"
              y2="35.03"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD748"></stop>
              <stop offset="1" stopColor="#FFC148"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-billing-SiteMenu-b"
              x1="19.5"
              y1="12.01"
              x2="19.5"
              y2="30.19"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A600"></stop>
              <stop offset="1" stopColor="#00D924"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Billing",
      details: "Subscription management",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Checkout</title>

          <path
            d="M31.54 4h-19.7c-.84 0-1.63.43-2.09 1.14a2.52 2.52 0 0 0-.18 2.39l5.1 11.46c.3.64.3 1.38 0 2.02L8 36h23.54c.97 0 1.86-.58 2.26-1.48l5.98-13.5c.3-.65.3-1.39 0-2.04L33.8 5.48A2.48 2.48 0 0 0 31.54 4z"
            fill="#96F"
          ></path>
          <path
            d="M7.23 36a2.3 2.3 0 0 1-.98-.22h.04a2.43 2.43 0 0 1-1.23-1.23L.22 23.53a2.54 2.54 0 0 1 .17-2.38A2.45 2.45 0 0 1 2.46 20h19.5c.97 0 1.84.57 2.23 1.46l4.8 10.85.68 1.53c.1.22.23.42.38.6.49.64 1.2 1.3 1.98 1.51-.11.03-.3.05-.55.05H7.22z"
            fill="url(#product-icon-checkout-SiteMenu-a)"
          ></path>
          <path
            d="M21.97 20c.9 0 1.72.5 2.14 1.3l.08.16 4.8 10.85.68 1.53a4.43 4.43 0 0 0 2.3 2.01l.18.07c-.2.05-.4.08-.61.08H8L14.67 21c.15-.32.22-.66.22-1.01h7.08z"
            fill="url(#product-icon-checkout-SiteMenu-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-checkout-SiteMenu-a"
              x1="16.01"
              y1="35.59"
              x2="16.01"
              y2="21.16"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#21CFE0"></stop>
              <stop offset=".17" stopColor="#20D1E0"></stop>
              <stop offset=".38" stopColor="#18E2E2"></stop>
              <stop offset=".61" stopColor="#13ECE3"></stop>
              <stop offset="1" stopColor="#11EFE3"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-checkout-SiteMenu-b"
              x1="21.07"
              y1="43"
              x2="21.07"
              y2="14.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0048E5"></stop>
              <stop offset="1" stopColor="#9B66FF"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Chekout",
      details: "Prebuilt payment form",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--Invoicing "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Invoicing</title>

          <path
            d="M12.5001 1C11.1194 1 10.0001 2.11929 10.0001 3.5V36.3314C10.0001 37.4628 9.24028 38.4532 8.14746 38.7462L36.1472 31.24C37.2401 30.9472 38.0001 29.9567 38.0001 28.8252V3.5C38.0001 2.11929 36.8808 1 35.5001 1H12.5001Z"
            fill="#00D924"
          ></path>
          <path
            d="M1.25338 24.5476C0.0575759 25.238 -0.352092 26.7668 0.338338 27.9626L5.81522 37.449C6.38097 38.4289 7.53438 38.9067 8.62734 38.6138L34.7744 31.6076L24.5869 13.9626C23.8969 12.7668 22.3676 12.3571 21.1718 13.0476L1.25338 24.5476Z"
            fill="url(#product-icon-invoicing-SiteMenu-a)"
          ></path>
          <path
            d="M8.40173 38.6633C8.4771 38.6504 8.55237 38.6339 8.62737 38.6138L34.7744 31.6076L24.5869 13.9626C23.897 12.7668 22.3677 12.3571 21.1719 13.0476L10.0002 19.4976V36.3314C10.0002 37.3728 9.35638 38.2947 8.40173 38.6633Z"
            fill="url(#product-icon-invoicing-SiteMenu-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-invoicing-SiteMenu-a"
              x1="17.3897"
              y1="20.25"
              x2="17.3893"
              y2="38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD748"></stop>
              <stop offset="1" stopColor="#FFC148"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-invoicing-SiteMenu-b"
              x1="21.5889"
              y1="12.7122"
              x2="21.5881"
              y2="38.6633"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A600"></stop>
              <stop offset="1" stopColor="#00D924"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "invoicing",
      details: "Online invoices",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Elements</title>

          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 10.02c0-.95.5-1.83 1.33-2.3L16.08.36a2.66 2.66 0 0 1 2.66 0l12.75 7.36a2.66 2.66 0 0 1 1.33 2.3v6l-5-2.89a2.66 2.66 0 0 0-2.66 0l-9.51 5.48a2.66 2.66 0 0 0-1.34 2.3v10.95c0 .9.45 1.72 1.19 2.21L3.33 27.05A2.66 2.66 0 0 1 2 24.75V10.02z"
            fill="url(#product-icon-elements-SiteMenu-a)"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5 34.07l.58.34c.82.48 1.84.48 2.66 0l12.75-7.36a2.66 2.66 0 0 0 1.33-2.3v-8.72l4.47 2.58a2.66 2.66 0 0 1 1.33 2.3v10.95c0 .95-.5 1.83-1.33 2.3l-9.48 5.48c-.82.48-1.83.48-2.65 0l-9.51-5.47-.15-.1z"
            fill="#96F"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.82 16.03l-5-2.9a2.66 2.66 0 0 0-2.66 0l-9.51 5.48a2.66 2.66 0 0 0-1.34 2.3v10.95c0 .9.45 1.72 1.19 2.21l.58.34c.82.48 1.84.48 2.66 0l12.75-7.36a2.66 2.66 0 0 0 1.33-2.3v-8.72z"
            fill="url(#product-icon-elements-SiteMenu-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-elements-SiteMenu-a"
              x1="17.41"
              y1="2.24"
              x2="17"
              y2="32.18"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11EFE3"></stop>
              <stop offset=".33" stopColor="#15E8E2"></stop>
              <stop offset=".74" stopColor="#1FD3E0"></stop>
              <stop offset="1" stopColor="#21CFE0"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-elements-SiteMenu-b"
              x1="21.95"
              y1="40.81"
              x2="30.59"
              y2="9.56"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0048E5"></stop>
              <stop offset=".64" stopColor="#625AF5"></stop>
              <stop offset="1" stopColor="#8A62FC"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Elements",
      details: "Online invoices",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--Terminal "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Terminal</title>

          <path
            d="M36.98 14.05l-6.31 1.36L9.33 20l-7.35 1.58A2.52 2.52 0 0 0 0 24.05v13.42C0 38.87 1.12 40 2.5 40h35c1.38 0 2.5-1.13 2.5-2.53V16.53c0-.77-.34-1.49-.93-1.97a2.48 2.48 0 0 0-2.09-.5z"
            fill="#9B66FF"
          ></path>
          <path
            d="M28.59 0H11.58A2.54 2.54 0 0 0 9 2.5v25c0 1.38 1.15 2.5 2.58 2.5h16.84A2.54 2.54 0 0 0 31 27.5v-25A2.5 2.5 0 0 0 28.59 0z"
            fill="url(#product-icon-terminal-SiteMenu-a)"
          ></path>
          <path
            d="M31 15.34V27.5c0 1.38-1.15 2.5-2.58 2.5H11.58A2.54 2.54 0 0 1 9 27.5v-7.43l.33-.07 21.34-4.59.33-.07z"
            fill="url(#product-icon-terminal-SiteMenu-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-terminal-SiteMenu-a"
              x1="20"
              y1="1.97"
              x2="20"
              y2="17.6"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11EFE3"></stop>
              <stop offset=".33" stopColor="#15E8E2"></stop>
              <stop offset=".74" stopColor="#1FD3E0"></stop>
              <stop offset="1" stopColor="#21CFE0"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-terminal-SiteMenu-b"
              x1="31"
              y1="22.67"
              x2="5.34"
              y2="22.67"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0048E5"></stop>
              <stop offset=".64" stopColor="#625AF5"></stop>
              <stop offset="1" stopColor="#8A62FC"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Terminal",
      details: "In-person payments",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--PaymentLinks "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5603 16.2116c-.3287-.8362.2877-1.7409 1.1862-1.7409h15.7828c0 .3165-.059.633-.1768.9327l-3.5077 8.9217c-.3834.9751-1.3244 1.6163-2.3722 1.6163h-7.1818c0-.1582-.0295-.3165-.0884-.4663l-3.6421-9.2635Z"
            fill="url(#product-icon-payment-links-SiteMenu-a)"
          ></path>
          <path
            d="M.0896108 4.74087C-.239137 3.90471.377287 3 1.27575 3H14.6995c.0185 0 .0369.00039.0552.00117.0258-.00078.0517-.00117.0777-.00117h7.6402c1.0478 0 1.9889.6412 2.3723 1.61636l3.5076 8.92164c.1179.2998.1768.6162.1768.9327H12.7465c-.8985 0-1.5149.9047-1.1862 1.7409l3.6421 9.2635c.0589.1498.0884.3081.0884.4663H1.27575c-.898464 0-1.514886-.9047-1.1861386-1.7408L3.73167 14.9371c.11784-.2998.11784-.633 0-.9327L.0896108 4.74087Z"
            fill="url(#product-icon-payment-links-SiteMenu-b)"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.2908 25.9414c0 .1583-.0295.3165-.0884.4664l-3.6421 9.2635c-.3287.8361.2877 1.7408 1.1862 1.7408h21.1968c1.0478 0 1.9889-.6412 2.3723-1.6163l3.5076-8.9217c.2357-.5995.2357-1.2659 0-1.8654l-3.5076-8.9216c-.3834-.9752-1.3245-1.6164-2.3723-1.6164h-5.414c0 .3165-.059.633-.1768.9327l-3.5077 8.9217c-.3834.9751-1.3244 1.6163-2.3722 1.6163h-7.1818Z"
            fill="#96F"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-payment-links-SiteMenu-a"
              x1="14.0622"
              y1="24.6669"
              x2="29.3565"
              y2="12.5589"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0048E5"></stop>
              <stop offset=".63979" stopColor="#625AF5"></stop>
              <stop offset="1" stopColor="#8A62FC"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-payment-links-SiteMenu-b"
              x1="14.2646"
              y1="4.50656"
              x2="14.0622"
              y2="24.6669"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11EFE3"></stop>
              <stop offset=".33" stopColor="#15E8E2"></stop>
              <stop offset=".74" stopColor="#1FD3E0"></stop>
              <stop offset="1" stopColor="#21CFE0"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Payment Links",
      details: "No-code payments",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0001 9.66675 27.57 18.3579c.8197.9412.8197 2.3428 0 3.2839l-7.5699 8.6912-7.5699-8.6912c-.8197-.9411-.8197-2.3427 0-3.2839l7.5699-8.69115Z"
            fill="url(#product-icon-financial-connections-SiteMenu-a)"
          ></path>
          <path
            d="m20 30.3331 4.1884 4.8089c.4748.5451 1.1623.858 1.8852.858H34.5c1.3807 0 2.5-1.1193 2.5-2.5v-27C37 5.11929 35.8807 4 34.5 4h-8.4264c-.7229 0-1.4104.31291-1.8852.85803L20 9.66688l7.5699 8.69112c.8197.9412.8197 2.3428 0 3.284L20 30.3331Z"
            fill="#00D924"
          ></path>
          <path
            d="M20 9.66688 12.4301 18.358c-.8197.9412-.8197 2.3428 0 3.284L20 30.3331l-4.1884 4.8089c-.4748.5451-1.1623.858-1.8852.858H5.5C4.11929 36 3 34.8807 3 33.5v-27C3 5.11929 4.11929 4 5.5 4h8.4264c.7229 0 1.4104.31291 1.8852.85803L20 9.66688Z"
            fill="url(#product-icon-financial-connections-SiteMenu-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-financial-connections-SiteMenu-a"
              x1="4.00012"
              y1="19.4999"
              x2="41.0001"
              y2="19.4999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D924"></stop>
              <stop offset="1" stopColor="#00A600"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-financial-connections-SiteMenu-b"
              x1="27.5"
              y1="20"
              x2=".010181"
              y2="19.4718"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11EFE3"></stop>
              <stop offset="1" stopColor="#21CFE0"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Financial Connections",
      details: "Linked financial account data",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--Radar "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Radar</title>

          <path
            d="M24.87 4.46a1.26 1.26 0 0 0-1.8.2l-4.6 5.82L3.42 29.45c.27.22.54.45.78.7a9.42 9.42 0 0 1 1.13 1.32l.1.13a9.15 9.15 0 0 1 .8 1.43c.29.62.5 1.28.65 1.95a2.5 2.5 0 0 0 2.45 1.93H38.7a1.27 1.27 0 0 0 1.27-1.3 42.43 42.43 0 0 0-15.1-31.15z"
            fill="#9A66FF"
          ></path>
          <path
            d="M27.8 21.98A33.82 33.82 0 0 0 5.95 4.28a1.29 1.29 0 0 0-1.56.98L.1 25.4a2.54 2.54 0 0 0 1.4 2.88 9.48 9.48 0 0 1 2.72 1.87l.17.17c.35.36.67.74.96 1.15l.1.13a9.15 9.15 0 0 1 .8 1.43l20.94-9.31a1.29 1.29 0 0 0 .62-1.74z"
            fill="url(#product-icon-radar-SiteMenu-a)"
          ></path>
          <path
            d="M18.46 10.48l.47.38a33.82 33.82 0 0 1 8.87 11.12 1.29 1.29 0 0 1-.62 1.74L6.25 33.03a9.15 9.15 0 0 0-.8-1.43l-.1-.13-.23-.3c-.23-.3-.47-.58-.74-.85a9.7 9.7 0 0 0-.95-.86l15.03-18.98z"
            fill="url(#product-icon-radar-SiteMenu-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-radar-SiteMenu-a"
              x1="13.98"
              y1="4.24"
              x2="13.98"
              y2="33.03"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".26" stopColor="#FF5091"></stop>
              <stop offset=".91" stopColor="#E03071"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-radar-SiteMenu-b"
              x1="15.68"
              y1="10.48"
              x2="15.68"
              y2="33.03"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6E00F5"></stop>
              <stop offset="1" stopColor="#9860FE"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Radar",
      details: "Fraud & risk management",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Identity</title>

          <path
            d="M13.9 5.93A3.87 3.87 0 0 1 17.54 3h19.99c1.66 0 2.72 1.31 2.38 2.93l-6.2 29.11A2.58 2.58 0 0 1 31.3 37H7.32L13.9 5.93z"
            fill="url(#product-icon-identity-SiteMenu-a)"
          ></path>
          <path
            d="M.1 21.93C-.24 20.31.82 19 2.48 19h19.99a3.87 3.87 0 0 1 3.62 2.93l2.79 13.11A2.58 2.58 0 0 0 31.29 37H5.31c-1.1 0-2.19-.88-2.42-1.96L.1 21.94z"
            fill="#9A66FF"
          ></path>
          <path
            d="M31.3 37c-1.11 0-2.2-.88-2.42-1.96l-2.79-13.1A3.87 3.87 0 0 0 22.47 19H11.14L7.33 37h23.96z"
            fill="url(#product-icon-identity-SiteMenu-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-identity-SiteMenu-a"
              x1="23.65"
              y1="2.99"
              x2="23.65"
              y2="37"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF5091"></stop>
              <stop offset="1" stopColor="#E03071"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-identity-SiteMenu-b"
              x1="19.31"
              y1="19"
              x2="19.31"
              y2="37"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6E00F5"></stop>
              <stop offset="1" stopColor="#9860FE"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Identity",
      details: "Online Identity verification",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--Connect "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Connect</title>

          <path
            d="M12.47.01a13.01 13.01 0 0 0 .5 25.99h10.55c1.37 0 2.48-1.1 2.48-2.48V13.01a12.99 12.99 0 0 0-13.53-13z"
            fill="url(#product-icon-connect-SiteMenu-a)"
          ></path>
          <path
            d="M27.53 39.99a13.01 13.01 0 0 0-.5-25.99H16.48A2.48 2.48 0 0 0 14 16.48v10.51a12.99 12.99 0 0 0 13.53 13z"
            fill="#0073E6"
          ></path>
          <path
            d="M26 14v9.52A2.48 2.48 0 0 1 23.52 26H14v-9.52A2.48 2.48 0 0 1 16.32 14l.16-.01H26z"
            fill="url(#product-icon-connect-SiteMenu-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-connect-SiteMenu-a"
              x1="13"
              y1="1.71"
              x2="13"
              y2="15.25"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11EFE3"></stop>
              <stop offset=".33" stopColor="#15E8E2"></stop>
              <stop offset=".74" stopColor="#1FD3E0"></stop>
              <stop offset="1" stopColor="#21CFE0"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-connect-SiteMenu-b"
              x1="20"
              y1="15.72"
              x2="20"
              y2="27.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00299C"></stop>
              <stop offset="1" stopColor="#0073E6"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Connect",
      details: "Payments for platforms",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--Climate "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Climate</title>

          <path
            d="M33.24 21.09c-4.28 0-9.09-2.96-13.24-5.81-4.4-3.04-9.24-7.05-13.24-7.05C2.68 8.23 0 11.96 0 15.28v.28a20 20 0 1 0 40 0c-.13 2.68-2.03 5.53-6.76 5.53z"
            fill="url(#product-icon-climate-SiteMenu-a)"
          ></path>
          <path
            d="M33.24 8.24c-4 0-8.84 4-13.24 7.04-4.15 2.85-8.96 5.8-13.24 5.8-4.73 0-6.63-2.84-6.76-5.52a20 20 0 1 0 40 0v-.28c0-3.32-2.67-7.05-6.76-7.04z"
            fill="url(#product-icon-climate-SiteMenu-b)"
          ></path>
          <path
            d="M20 15.28c4.15 2.85 8.96 5.8 13.24 5.8 4.73 0 6.63-2.84 6.76-5.52a20 20 0 1 1-40 0c.13 2.68 2.03 5.53 6.76 5.53 4.28 0 9.09-2.96 13.24-5.81z"
            fill="url(#product-icon-climate-SiteMenu-c)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-climate-SiteMenu-a"
              x1="20"
              y1="20.63"
              x2="20"
              y2="9.57"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD748"></stop>
              <stop offset=".21" stopColor="#FFD644"></stop>
              <stop offset=".33" stopColor="#FFD438"></stop>
              <stop offset=".45" stopColor="#FFD024"></stop>
              <stop offset=".57" stopColor="#FFCB09"></stop>
              <stop offset="1" stopColor="#FFC900"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-climate-SiteMenu-b"
              x1="20"
              y1="9.56"
              x2="20"
              y2="21.9"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#009C00"></stop>
              <stop offset="1" stopColor="#00BA18"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-climate-SiteMenu-c"
              x1="20"
              y1="35.28"
              x2="20"
              y2="15.28"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".13" stopColor="#00CB1B"></stop>
              <stop offset="1" stopColor="#00D924"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Climate",
      details: "Carbon removal",
      route: "/",
    },
  ];
  // products submenu revenue-and-finance data
  const revenueFinance = [
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--Billing "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Billing</title>

          <path
            d="M26 2.46C26 1.1 24.9 0 23.53 0H2.47A2.47 2.47 0 0 0 0 2.46v30.08a2.46 2.46 0 0 0 3.47 2.25l10.2-4.53 10.86-4.83c.9-.4 1.47-1.27 1.47-2.25V2.46z"
            fill="url(#product-icon-billing-SiteMenu-a)"
          ></path>
          <path
            d="M26.5 39a13.5 13.5 0 1 0 0-27 13.5 13.5 0 0 0 0 27z"
            fill="#00D924"
          ></path>
          <path
            d="M26 12v11.18c0 .98-.57 1.86-1.47 2.25l-10.7 4.76A13.5 13.5 0 0 1 26 12z"
            fill="url(#product-icon-billing-SiteMenu-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-billing-SiteMenu-a"
              x1="13"
              y1="6.35"
              x2="13"
              y2="35.03"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD748"></stop>
              <stop offset="1" stopColor="#FFC148"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-billing-SiteMenu-b"
              x1="19.5"
              y1="12.01"
              x2="19.5"
              y2="30.19"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A600"></stop>
              <stop offset="1" stopColor="#00D924"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Billing",
      details: "Subscription management",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--Sigma "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Sigma</title>

          <path
            d="M5 35V7a3 3 0 0 1 5.48-1.69L21.2 21 9.32 38H8a3 3 0 0 1-3-3z"
            fill="url(#product-icon-sigma-SiteMenu-a)"
          ></path>
          <path
            d="M8.06 4h25.16a1.5 1.5 0 0 1 1.1 2.51L21.15 21 5.84 4.92A3 3 0 0 1 8.05 4z"
            fill="url(#product-icon-sigma-SiteMenu-b)"
          ></path>
          <path
            d="M7.88 38H33.2a1.5 1.5 0 0 0 1.11-2.51L21.11 21 7.14 36.33A1 1 0 0 0 7.88 38z"
            fill="#9A66FF"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-sigma-SiteMenu-a"
              x1="13.1"
              y1="38"
              x2="13.1"
              y2="12.99"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9860FE"></stop>
              <stop offset="1" stopColor="#6E00F5"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-sigma-SiteMenu-b"
              x1="20.28"
              y1="8.42"
              x2="20.28"
              y2="19.47"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF5091"></stop>
              <stop offset="1" stopColor="#E03071"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Sigma",
      details: "Custom reports",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--Invoicing "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Invoicing</title>

          <path
            d="M12.5001 1C11.1194 1 10.0001 2.11929 10.0001 3.5V36.3314C10.0001 37.4628 9.24028 38.4532 8.14746 38.7462L36.1472 31.24C37.2401 30.9472 38.0001 29.9567 38.0001 28.8252V3.5C38.0001 2.11929 36.8808 1 35.5001 1H12.5001Z"
            fill="#00D924"
          ></path>
          <path
            d="M1.25338 24.5476C0.0575759 25.238 -0.352092 26.7668 0.338338 27.9626L5.81522 37.449C6.38097 38.4289 7.53438 38.9067 8.62734 38.6138L34.7744 31.6076L24.5869 13.9626C23.8969 12.7668 22.3676 12.3571 21.1718 13.0476L1.25338 24.5476Z"
            fill="url(#product-icon-invoicing-SiteMenu-a)"
          ></path>
          <path
            d="M8.40173 38.6633C8.4771 38.6504 8.55237 38.6339 8.62737 38.6138L34.7744 31.6076L24.5869 13.9626C23.897 12.7668 22.3677 12.3571 21.1719 13.0476L10.0002 19.4976V36.3314C10.0002 37.3728 9.35638 38.2947 8.40173 38.6633Z"
            fill="url(#product-icon-invoicing-SiteMenu-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-invoicing-SiteMenu-a"
              x1="17.3897"
              y1="20.25"
              x2="17.3893"
              y2="38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD748"></stop>
              <stop offset="1" stopColor="#FFC148"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-invoicing-SiteMenu-b"
              x1="21.5889"
              y1="12.7122"
              x2="21.5881"
              y2="38.6633"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A600"></stop>
              <stop offset="1" stopColor="#00D924"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "invoicing",
      details: "Online invoices",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--DataPipeline "
          width="40"
          height="40"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.375 10.813h-.938C3.75 10.813 0 14.957 0 19.718c0 4.761 3.75 8.906 8.438 8.906H18.75c1.035 0 1.875-.84 1.875-1.875v-6.563H11.25a1.875 1.875 0 0 1-1.875-1.875v-7.5Z"
            fill="url(#product-icon-data-pipeline-SiteMenu-a)"
          ></path>
          <path
            d="M20.625 12.688c0-1.036-.84-1.876-1.875-1.876H9.375v7.5c0 1.036.84 1.875 1.875 1.875h9.375v-7.5Z"
            fill="url(#product-icon-data-pipeline-SiteMenu-b)"
          ></path>
          <path
            d="M9.375 4.25c0-1.036.84-1.875 1.875-1.875h10.313C26.25 2.375 30 6.52 30 11.281c0 4.762-3.75 8.906-8.438 8.906h-.937v-7.5c0-1.035-.84-1.874-1.875-1.874H9.375V4.25Z"
            fill="#9A66FF"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-data-pipeline-SiteMenu-a"
              x1="9.375"
              y1="11.75"
              x2="4.875"
              y2="29"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E03071"></stop>
              <stop offset="1" stopColor="#FF5091"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-data-pipeline-SiteMenu-b"
              x1="12.375"
              y1="20"
              x2="15.078"
              y2="9.056"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9860FE"></stop>
              <stop offset="1" stopColor="#6E00F5"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Data Pipeline",
      details: "Data warehouse sync",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--Tax "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Tax</title>

          <path
            d="M19.049.00995851C22.4341.325767 25.7367 1.28014 28.7794 2.83046c3.0426 1.55031 5.756 3.66123 8.0012 6.2142.9142 1.03954.6576 2.61624-.4624 3.42994L20.5259 23.9483c-1.6569 1.2039-3.98.0202-3.98-2.0279V2.40011c0-1.38439 1.1247-2.518749 2.5031-2.39015149z"
            fill="url(#product-icon-tax-SiteMenu-a)"
          ></path>
          <circle
            cx="17.6666"
            cy="24.3334"
            transform="rotate(-90 17.6666 24.3334)"
            fill="#96F"
            r="15.6666"
          ></circle>
          <path
            d="M31.099 16.2665l-10.5731 7.6818c-1.6569 1.2038-3.98.0201-3.98-2.028V8.70618c.37-.02614.7436-.03943 1.1202-.03943 5.7019 0 10.6924 3.04605 13.4329 7.59975z"
            fill="url(#product-icon-tax-SiteMenu-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-tax-SiteMenu-a"
              x1="27.6927"
              y1="-.106484"
              x2="27.6927"
              y2="20.5734"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".23665" stopColor="#FF5191"></stop>
              <stop offset="1" stopColor="#E03071"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-tax-SiteMenu-b"
              x1="23.3061"
              y1="24.96"
              x2="18.8407"
              y2="7.43349"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6E00F5"></stop>
              <stop offset="1" stopColor="#9860FE"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Tax",
      details: "Sales tax & VAT automation",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--Atlas "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Atlas</title>

          <g clipPath="url(#product-icon-atlas-SiteMenu-a)">
            <path
              d="M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42 8.65 17.31a2.64 2.64 0 0 1-1.65 3.73l-.17.04c-.12.03-.24.04-.36.05h-.18L20.5 35.99 9.94 18.19l8.2-16.42A2.64 2.64 0 0 1 20.52.3z"
              fill="#FB0"
            ></path>
            <path
              d="M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42L20.5 35.98 3.65 39.33a2.64 2.64 0 0 1-2.37-3.83l8.66-17.3 8.2-16.43A2.64 2.64 0 0 1 20.52.3z"
              fill="url(#product-icon-atlas-SiteMenu-b)"
            ></path>
            <path
              d="M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42L20.5 35.98 9.94 18.19l8.2-16.42A2.64 2.64 0 0 1 20.34.3h.18z"
              fill="url(#product-icon-atlas-SiteMenu-c)"
            ></path>
          </g>
          <defs>
            <linearGradient
              id="product-icon-atlas-SiteMenu-b"
              x1="16.03"
              y1="18.01"
              x2="15.94"
              y2="39.33"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD748"></stop>
              <stop offset=".54" stopColor="#FFCD48"></stop>
              <stop offset="1" stopColor="#FFCB48"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-atlas-SiteMenu-c"
              x1="20.51"
              y1="34.72"
              x2="20.51"
              y2="15.01"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFAD00"></stop>
              <stop offset="1" stopColor="#FF7600"></stop>
            </linearGradient>
            <clipPath id="product-icon-atlas-SiteMenu-a">
              <path fill="#fff" d="M0 0h40v40H0z"></path>
            </clipPath>
          </defs>
        </svg>
      ),
      label: "Atlas",
      details: "Startup incorporation",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--RevRec "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Revenue Recognition</title>

          <path
            d="M24.4531 3.37679c.0004-.4707-.1391-.9309-.4008-1.32216-.2616-.39126-.6337-.69594-1.0689-.87535-.4351-.179408-.9138-.225461-1.3752-.1323-.4614.09315-.8847.32131-1.2161.65551L3.57784 18.493c-.33493.3321-.56335.7565-.65614 1.219-.09278.4626-.04573.9422.13515 1.3779.18089.4356.48742.8076.88051 1.0683.39309.2608.85494.3986 1.32665.3958h4.74979L24.4531 8.12657V3.37679z"
            fill="url(#product-icon-revrec-SiteMenu-a)"
          ></path>
          <path
            d="M33.7627 8.12634h-9.3096V20.1789c0 .6299-.2502 1.2339-.6956 1.6793-.4453.4454-1.0494.6956-1.6793.6956H10.0138V36.625c0 .6299.2502 1.234.6956 1.6793.4454.4454 1.0494.6956 1.6793.6956h21.374c.6299 0 1.2339-.2502 1.6793-.6956.4454-.4453.6956-1.0494.6956-1.6793V10.5012c0-.62983-.2502-1.23389-.6956-1.67927-.4454-.44538-1.0494-.69559-1.6793-.69559z"
            fill="#9A66FF"
          ></path>
          <path
            d="M24.4531 20.1789V8.12634L10.0138 22.5538h12.0644c.6299 0 1.234-.2502 1.6793-.6956.4454-.4454.6956-1.0494.6956-1.6793z"
            fill="url(#product-icon-revrec-SiteMenu-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-revrec-SiteMenu-a"
              x1="13.7647"
              y1="1"
              x2="13.7647"
              y2="22.3532"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".270725" stopColor="#FF5091"></stop>
              <stop offset="1" stopColor="#E03071"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-revrec-SiteMenu-b"
              x1="16.0302"
              y1="22.3652"
              x2="24.2719"
              y2="6.84356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6E00F5"></stop>
              <stop offset="1" stopColor="#9860FE"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Revenue Recognition",
      details: "Accounting automation",
      route: "/",
    },
  ];
  // products submenu banking-as-service data
  const bankingAsService = [
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--Connect "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Connect</title>

          <path
            d="M12.47.01a13.01 13.01 0 0 0 .5 25.99h10.55c1.37 0 2.48-1.1 2.48-2.48V13.01a12.99 12.99 0 0 0-13.53-13z"
            fill="url(#product-icon-connect-SiteMenu-a)"
          ></path>
          <path
            d="M27.53 39.99a13.01 13.01 0 0 0-.5-25.99H16.48A2.48 2.48 0 0 0 14 16.48v10.51a12.99 12.99 0 0 0 13.53 13z"
            fill="#0073E6"
          ></path>
          <path
            d="M26 14v9.52A2.48 2.48 0 0 1 23.52 26H14v-9.52A2.48 2.48 0 0 1 16.32 14l.16-.01H26z"
            fill="url(#product-icon-connect-SiteMenu-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-connect-SiteMenu-a"
              x1="13"
              y1="1.71"
              x2="13"
              y2="15.25"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11EFE3"></stop>
              <stop offset=".33" stopColor="#15E8E2"></stop>
              <stop offset=".74" stopColor="#1FD3E0"></stop>
              <stop offset="1" stopColor="#21CFE0"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-connect-SiteMenu-b"
              x1="20"
              y1="15.72"
              x2="20"
              y2="27.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00299C"></stop>
              <stop offset="1" stopColor="#0073E6"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Connect",
      details: "Payments for platforms",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--Issuing "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Issuing</title>

          <path
            d="M7.62 26.48l-.02-.03a2.44 2.44 0 0 1-.7-1.48 2.49 2.49 0 0 1 .11-1.05c.05-.28.13-.54.24-.77l.08-.17L14.67 10h21.85A2.52 2.52 0 0 1 39 12.37l.01.16v22.92A2.52 2.52 0 0 1 36.67 38l-.16.01H19a2.5 2.5 0 0 0 .64-1.97c-.07-.66-.43-1.09-.95-1.47l-.15-.1-10.62-7.73-.14-.1v-.01l.14.1a2.52 2.52 0 0 1-.27-.21l-.03-.03z"
            fill="url(#product-icon-issuing-SiteMenu-a)"
          ></path>
          <path
            d="M22.05 2.1c.7-.15 1.41 0 1.99.41l6.56 4.72a2.5 2.5 0 0 1 .92 2.8V10l-8.5 26-.05.2-.03.08-.03.09-.15.32-.02.04-.19.29-.03.04a2.9 2.9 0 0 1-.23.25l-.03.02a2.24 2.24 0 0 1-.58.4l-.03.03c-.1.05-.2.1-.31.13h-.05l-.33.08h-.05a2.3 2.3 0 0 1-.36.03H3.53A2.53 2.53 0 0 1 1 35.45v-22.9C1 11.14 2.13 10 3.53 10H16.6l3.8-6.7a2.5 2.5 0 0 1 1.46-1.15l.18-.05z"
            fill="#0073E6"
          ></path>
          <path
            d="M31.38 10l-8.37 26-.02.1-.02.1-.03.08-.03.09-.07.16-.08.16-.02.04-.1.15-.09.14-.03.04-.11.13-.12.12-.03.02c-.08.09-.17.16-.26.23l-.15.1-.17.08-.03.02-.15.07-.16.06h-.05l-.16.05-.1.01.1-.1c.4-.51.59-1.17.51-1.82-.07-.66-.43-1.09-.95-1.47l-.15-.1-10.62-7.73-.14-.1a2.54 2.54 0 0 1-.26-.26l-.04-.05a2.48 2.48 0 0 1-.12-.14l-.02-.04-.03-.04a2.43 2.43 0 0 1-.17-.3l-.03-.06a2.5 2.5 0 0 1-.15-.42l-.01-.07-.02-.1-.01-.06a2.51 2.51 0 0 1 .05-1.01l.02-.09a2.5 2.5 0 0 1 .04-.1c.03-.25.1-.5.21-.74l.1-.17L16.66 10h14.71z"
            fill="url(#product-icon-issuing-SiteMenu-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-issuing-SiteMenu-a"
              x1="22.92"
              y1="11.68"
              x2="22.92"
              y2="39.68"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".1" stopColor="#FF80FF"></stop>
              <stop offset=".39" stopColor="#FF7BF9"></stop>
              <stop offset=".77" stopColor="#FF6EEA"></stop>
              <stop offset="1" stopColor="#FF62DC"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-issuing-SiteMenu-b"
              x1="31.38"
              y1="27.93"
              x2="11.62"
              y2="27.93"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0073E6"></stop>
              <stop offset="1" stopColor="#00299C"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Issuing",
      details: "Card creation",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--Capital "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Capital</title>

          <path
            d="M23.95 14.05l-9.74 2.12-12.18 2.52A2.59 2.59 0 0 0 0 21.22v16.26A2.5 2.5 0 0 0 2.54 40H27V16.57a2.55 2.55 0 0 0-3.05-2.52z"
            fill="url(#product-icon-capital-SiteMenu-a)"
          ></path>
          <path
            d="M36.85.05l-21.82 4.6A2.57 2.57 0 0 0 13 7.15V40h24.46c1.42-.2 2.54-1.3 2.54-2.7V2.55c0-1.6-1.52-2.8-3.15-2.5z"
            fill="url(#product-icon-capital-SiteMenu-b)"
          ></path>
          <path
            d="M23.95 14.05c1.63-.3 3.05.9 3.05 2.52V40H13V16.42l1.21-.25 9.74-2.12z"
            fill="url(#product-icon-capital-SiteMenu-c)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-capital-SiteMenu-a"
              x1="13.52"
              y1="36.35"
              x2="13.52"
              y2="18.21"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D0E1"></stop>
              <stop offset="1" stopColor="#00F5E7"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-capital-SiteMenu-b"
              x1="26.46"
              x2="26.46"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D924"></stop>
              <stop offset="1" stopColor="#00D924"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-capital-SiteMenu-c"
              x1="19.93"
              y1="40"
              x2="19.93"
              y2="14"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D722"></stop>
              <stop offset=".85" stopColor="#00BD01"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      label: "Capital",
      details: "Business financing",
      route: "/",
    },
    {
      icon: (
        <svg
          className="ProductIcon ProductIcon--Banking "
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Treasury</title>

          <path
            d="M29 14.5c0-.36-.07-.71-.22-1.04l-3.92-8.94A2.52 2.52 0 0 0 22.56 3H2.52A2.54 2.54 0 0 0 0 5.56v17.88A2.54 2.54 0 0 0 2.52 26h20.04c1 0 1.9-.6 2.3-1.52l3.92-8.94c.15-.33.22-.68.22-1.04z"
            fill="url(#product-icon-banking-SiteMenu-a)"
          ></path>
          <path
            d="M11 25.5c0 .36.07.71.22 1.04l3.92 8.94c.4.93 1.3 1.52 2.3 1.52h20.04c1.4 0 2.52-1.14 2.52-2.56V16.56A2.54 2.54 0 0 0 37.48 14H17.44c-1 0-1.9.6-2.3 1.52l-3.92 8.94c-.15.33-.22.68-.22 1.04z"
            fill="#00D924"
          ></path>
          <path
            d="M28.95 14a2.59 2.59 0 0 1-.17 1.54l-3.92 8.94c-.4.93-1.3 1.52-2.3 1.52H11.05a2.59 2.59 0 0 1 .17-1.54l3.92-8.94c.4-.93 1.3-1.52 2.3-1.52h11.51z"
            fill="url(#product-icon-banking-SiteMenu-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-banking-SiteMenu-a"
              x1="14.5"
              y1="6.13"
              x2="14.5"
              y2="28.22"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11EFE3"></stop>
              <stop offset=".35" stopColor="#14E8E2"></stop>
              <stop offset=".86" stopColor="#1ED6E1"></stop>
              <stop offset="1" stopColor="#21CFE0"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-banking-SiteMenu-b"
              x1="25.31"
              y1="29.5"
              x2="25.31"
              y2="9"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D924"></stop>
              <stop offset="1" stopColor="#00A600"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
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
      <div>{item.icon}</div>
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
