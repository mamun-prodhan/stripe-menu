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

export default SubMenuButton;
