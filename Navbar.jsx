import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import hotelLogo from "../assets/Hoteels.jpg";

const links = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Prices", path: "/prices" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsOpen(false);
    window.location.href="/login";
  };

  return (
    <>
      <nav className="bg-black text-white px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={hotelLogo}
              alt="Hotel Logo"
              className="w-14 h-14 object-cover rounded-full"
            />
            <h1 className="text-xl italic font-bold">
              Hotel & Suite
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            {links.map((link)=>(
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-yellow-300 transition"
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={handleLogout}
              className="hover:text-red-400 transition"
            >
              Logout
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-60 mt-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-3">
            {links.map((link)=>(
              <Link
                key={link.name}
                to={link.path}
                onClick={()=>setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={handleLogout}
              className="text-left hover:text-red-400"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* spacing under fixed navbar */}
      <div className="pt-24"></div>
    </>
  );
}

export default Navbar;