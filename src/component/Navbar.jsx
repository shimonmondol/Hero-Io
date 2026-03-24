import React from "react";
import { FaGithub } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div class="max-w-6xl mx-auto navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content cursor-pointer bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow"
            >
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-700 font-bold"
                      : "hover:text-purple-600"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/apps"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-700 font-bold"
                      : "hover:text-purple-600"
                  }
                >
                  Apps
                </NavLink>
                <NavLink
                  to="/installation"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-700 font-bold"
                      : "hover:text-purple-600"
                  }
                >
                  Installation
                </NavLink>
              </div>
            </ul>
          </div>
          <button
            onClick={() => navigate("/")}
            className="flex text-md text-purple-700 pl-3 cursor-pointer"
          >
            <img className="w-8" src={Logo} alt="" />
            <h1 className="pl-2 mt-1 font-semibold text-xl">HERO.IO</h1> 
          </button>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu-horizontal px-1 cursor-pointer gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700 underline font-bold"
                  : "hover:text-purple-600"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700 underline font-bold"
                  : "hover:text-purple-600"
              }
            >
              Apps
            </NavLink>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700 underline font-bold"
                  : "hover:text-purple-600"
              }
            >
              Installation
            </NavLink>
          </ul>
        </div>
        <div class="navbar-end">
          <a
            href="https://github.com/shimonmondol"
            target="_blank"
            className="btn bg-purple-700 text-white"
          >
            <FaGithub />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
