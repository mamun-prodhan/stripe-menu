import { Link } from "react-router-dom";

const MenuWithIcon = ({ icon, label }) => {
  return (
    <Link to="/">
      <div className="flex items-center gap-2 group my-2">
        <span className="text-gray-400 group-hover:text-gray-800 duration-150">
          {icon}
        </span>
        <p className="text-gray-800 font-semibold">{label}</p>
      </div>
    </Link>
  );
};

export default MenuWithIcon;
