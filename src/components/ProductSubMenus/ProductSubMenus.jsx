import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
const ProductSubMenus = ({ item }) => {
  const { icon, label, details, route } = item;
  return (
    <Link to={`${route}`} className="flex items-center gap-4 group/item">
      <div>
        <img src={icon} alt="" />
      </div>
      <div>
        <p className=" font-bold text-gray-500 flex items-center gap-2">
          <span>{label}</span>
          <span className="hidden ms-1 group-hover/item:inline transition duration-300">
            <IoMdArrowRoundForward />
          </span>
        </p>
        <p className="font-normal text-gray-500 group-hover/item:text-gray-700">
          {details}
        </p>
      </div>
    </Link>
  );
};

export default ProductSubMenus;
