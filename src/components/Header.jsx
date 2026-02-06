import React from "react";

function Header() {
  return (
    <div>
      <header className="h-16 bg-white border-b flex items-center justify-around px-6">
        <h1 className="text-lg text-blue-600 font-bold">App</h1>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
          <a href="#" className="hover:text-blue-600">
            Contact
          </a>
        </nav>

        <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
          Logout
        </button>
      </header>
    </div>
  );
}

export default Header;
