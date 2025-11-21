import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import GlobalSidebar from "./GlobalSidebar";
import { useDispatch, useSelector } from "react-redux"; 
import { toggleBar } from "../store/sideSlice";


const Header = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((store)=>store.app.isToggle);

  const handleClick = () => {
    dispatch(toggleBar()); // <-- must CALL the action
  };

  return (
    <div className="bg-gray-200 text-black flex justify-between items-center px-4 py-2">
      <div>Logo</div>

      <div onClick={handleClick} className="cursor-pointer">
        <Menu />
      </div>
      
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    <GlobalSidebar isOpen={isOpen} />
    </div>
  );
};

export default Header;
