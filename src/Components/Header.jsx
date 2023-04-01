import React from "react";
import { Link } from "react-router-dom";
import { FaDiscord, FaTwitter } from "react-icons/fa";
const Header = () => {
    const navLinks = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Royalities",
            path: "/royalities"
        },
        {
            name: "NFT viewer",
            path: "/nftviewer"
        },
    ]
  return (
    <div className="navbar fixed w-full shadow-xl">
      <div className="flex items-center justify-between py-5  text-white container mx-auto px-4 md:px-0">
        <div className="text-orange-500 uppercase font-bold text-xl">
          <Link to="/">Cromos</Link>
        </div>
        <div className="hidden md:flex  gap-12 items-center justify-between text-lg">
          <ul className="inline-flex items-center gap-6 lg:gap-12 font-bold  uppercase">
            {navLinks.map((link) => (
            <li className="hover:text-orange-400 transition ease-in-out">
              <Link to={link.path}>{link.name}</Link>
            </li>
            ))}
            {/* <li className="hover:text-orange-400 transition ease-in-out">
              <Link to="royalities">Royalities</Link>
            </li>
            <li  className="hover:text-orange-400 transition ease-in-out" >
              <Link to="nftviewer">NFT viewer</Link>
            </li> */}
            <li>
              <Link to="www.discord.com">
                <FaDiscord className="text-3xl hover:text-indigo-600 transition ease-in-out"  />
              </Link>
            </li>

            <li>
              <Link to="www.twitter.com">
                <FaTwitter  className="text-3xl hover:text-blue-600 transition ease-in-out" />
              </Link>
            </li>
          </ul>
          <div className="bg-orange-600 px-4 py-2 cursor-pointer text-sm rounded-xl font-bold ">
            Connect Wallet
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
