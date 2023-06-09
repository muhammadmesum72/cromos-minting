import React from "react";
import { Link } from "react-router-dom";
import { navLinks, socialLinks } from "../Data/data";
import Logo from "../Data/logo.png";
import PartnershipPdf from "../Data/Partnerships.pdf";

const Footer = () => {
  const handleOpenPdf = () => {
    window.open(PartnershipPdf, "_blank");
  };
  return (
    <div className="bg-primaryDark bg-opacity-70 px-6 py-6">
      <div className=" grid grid-cols-1 md:grid-cols-4 py-6 md:py-0 w-full mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-24" />
          </Link>
        </div>
        {/* Nav Links */}
        <div>
          <h1 className="text-xl font-bold border-b w-fit pb-2 my-3">
            Crazzy Monsters sitemap
          </h1>
          {navLinks.map((link) => (
            <div key={link.id}>
              <Link to={link.path}>
                <h2 className="hover:text-primary w-fit">{link.name}</h2>
              </Link>
            </div>
          ))}
        </div>
        {/* Social Links */}
        <div>
          <h1 className="text-xl font-bold border-b w-fit pb-2 my-3">
            Social Links
          </h1>
          {socialLinks.map((link) => (
            <Link key={link.id} to={link.path} target="_blank">
              <h2 className="hover:text-primary w-fit">{link.name}</h2>
            </Link>
          ))}
        </div>
        {/* Contact */}
        <div>
          <h1 className="text-xl font-bold border-b w-fit pb-2 my-3">
            Contact
          </h1>
          <div>
            <Link>
              <h2 className="hover:text-primary w-fit" onClick={handleOpenPdf}>
                Partnerships
              </h2>
            </Link>
            <Link>
              <h2 className="hover:text-primary w-fit">Email</h2>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center py-4">&#169; 2023 Crazzy Monsters NFTs</div>
    </div>
  );
};

export default Footer;
