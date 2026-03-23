import logo from "../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-900 px-4">
        <footer className="bg-gray-900 w-full max-w-338 mx-auto text-white pt-8 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-28 rounded-tl-3xl rounded-tr-3xl overflow-hidden pb-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-12">
            <div className="lg:col-span-3 space-y-6">
              <div className="flex">
                <img className="w-8" src={logo} alt="" />
                <h1 className="ml-6 mt-1 font-semibold text-2xl">Hero Io</h1>
              </div>
              <p className="text-sm/6 text-neutral-300 max-w-96">
                Hero Io mobile apps are software applications designed to run on smartphones, tablets, and other mobile devices. Downloaded from Google Play or App Store.
              </p>
              <div className="flex gap-4 cursor-pointer">
                <FaFacebookF />
                <FaLinkedinIn />
                <FiGithub />
              </div>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-28 items-start">
              {/* Products */}
              <div>
                <h3 className="font-semibold text-xl mb-4">Products</h3>
                <ul className="space-y-3 text-sm text-neutral-300">
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Components
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Templates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Icons
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Store
                    </a>
                  </li>
                </ul>
              </div>
              {/* Resources */}
              <div>
                <h3 className="font-semibold text-xl mb-4">Resources</h3>
                <ul className="space-y-3 text-sm text-neutral-300">
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Hero Io
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Templates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Components
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>
              {/* Company */}
              <div className="col-span-2 md:col-span-1">
                <h3 className="font-semibold text-xl mb-4">Company</h3>
                <ul className="space-y-3 text-sm text-neutral-300">
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      About
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <a href="#" className="hover:text-neutral-400">
                      Careers
                    </a>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-green-950 border border-green-300 text-green-300">
                      HIRING
                    </span>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-neutral-700 flex justify-between items-center">
            <p className="text-neutral-400 text-sm">© 2026 Hero Io</p>
            <p className="text-sm text-neutral-400">All Right Reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
