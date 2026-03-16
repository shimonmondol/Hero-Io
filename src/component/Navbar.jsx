import React from "react";
import { FaGithub } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
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
              tabindex="-1"
              class="menu-sm dropdown-content cursor-pointer bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="hover:text-purple-600">
                <a>Home</a>
              </li>
              <li className="hover:text-purple-600">
                <a>Apps</a>
              </li>
              <li className="hover:text-purple-600">
                <a>Installation</a>
              </li>
            </ul>
          </div>

          <a class="btn btn-ghost text-md text-purple-700">
            <img className="w-8" src={Logo} alt="" />
            HERO.IO
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu-horizontal px-1 cursor-pointer gap-6">
            <li className="hover:text-purple-600">
              <a>Home</a>
            </li>
            <li className="hover:text-purple-600">
              <a>Apps</a>
            </li>
            <li className="hover:text-purple-600">
              <a>Installation</a>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn bg-purple-700 text-white">
            <FaGithub />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
