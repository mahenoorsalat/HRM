import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Settings,
  HelpCircle,
  Home,
  Users,
  Receipt,
  FileText,
  Briefcase,
  Folder,
  Menu,
  UserPlus,
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 1024); // Open by default on large screens
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseOnOutsideClick = () => {
    if (windowWidth < 1024) setIsOpen(false);
  };

  const navItems = [
    { icon: <Home className="w-6 h-6" />, label: "Dashboard", path: "/dashboard" },
    { icon: <Users className="w-6 h-6" />, label: "Employees", path: "/employees" },
    { icon: <Briefcase className="w-6 h-6" />, label: "Recruiting", path: "/recruiting" },
    { icon: <Receipt className="w-6 h-6" />, label: "Payroll", path: "/payroll" },
    { icon: <FileText className="w-6 h-6" />, label: "Benefits", path: "/benefits" },
    { icon: <Folder className="w-6 h-6" />, label: "Attendance", path: "/attendance" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setIsOpen(true); // Always open on large screens
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Menu Button */}
      {windowWidth < 1024 && (
        <button
          onClick={handleToggle}
          className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-full transition-all duration-300"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Sidebar */}
      <aside
  className={`bg-white h-screen transition-all duration-300 shadow-lg flex flex-col z-40 
    fixed top-0 ${isOpen ? "w-64 left-0" : "w-0 -left-64"} 
    lg:relative lg:w-64 lg:left-0`}
>



        {/* Sidebar Header */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/log.png" alt="Logo" className="h-8 w-8" />
            <span className="text-sm font-semibold text-black">Sky Bayan HRMS</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 mt-4 px-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                navigate(item.path);
                handleCloseOnOutsideClick();
              }}
              className="flex items-center space-x-4 text-gray-700 hover:bg-gray-200 p-3 rounded-lg w-full transition-colors"
            >
              {item.icon}
              <span className="text-base">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* "New Hire" Button */}
        <div className="p-3">
          <button
            onClick={() => {
              navigate("/new");
              handleCloseOnOutsideClick();
            }}
            className="flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-white w-full py-3 rounded-lg transition duration-200"
          >
            <UserPlus className="w-5 h-5" />
            <span className="ml-2">New Hire</span>
          </button>
        </div>

        {/* Bottom Icons */}
        <div className="p-3">
          <button
            onClick={() => {
              navigate("/setting");
              handleCloseOnOutsideClick();
            }}
            className="flex items-center space-x-4 text-gray-700 hover:bg-gray-200 p-3 rounded-lg w-full"
          >
            <Settings className="w-6 h-6" />
            <span>Settings</span>
          </button>

          <button
            onClick={() => {
              navigate("/help");
              handleCloseOnOutsideClick();
            }}
            className="flex items-center space-x-4 text-gray-700 hover:bg-gray-200 p-3 rounded-lg w-full"
          >
            <HelpCircle className="w-6 h-6" />
            <span>Help & Feedback</span>
          </button>
        </div>

        {/* Profile Section */}
        <div
          onClick={() => {
            navigate("/profile");
            handleCloseOnOutsideClick();
          }}
          className="p-3 flex items-center space-x-3 cursor-pointer hover:bg-gray-200 rounded-lg"
        >
          <img src="/girl1.jpg" alt="Profile" className="h-10 w-10 rounded-full" />
          <span className="text-gray-800 font-medium">Profile</span>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && windowWidth < 1024 && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden md:hidden"
          onClick={handleToggle}
        />
      )}
    </>
  );
};

export default Sidebar;
