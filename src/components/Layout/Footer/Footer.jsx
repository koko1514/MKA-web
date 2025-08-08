import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="font-lato bg-bgsec text-black text-sm mt-auto">
      {/* Bar Atas */}
      <div className="bg-primary text-center py-1 px-4">
        Visit us. Our office is open Monday - Friday 8:00 a.m. - 4:00 p.m.
      </div>

      {/* Konten Utama */}
      <div className="flex flex-col items-center justify-center text-center py-6 px-4 space-y-4">
        {/* Media Sosial */}

        <div className="flex space-x-4">
          <button className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#3b5998] shadow-md hover:bg-gray-200 transition">
            <FaFacebookF />
          </button>
          <button className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:bg-gray-200 transition">
            <FaXTwitter />
          </button>
          <button className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0e76a8] shadow-md hover:bg-gray-200 transition">
            <FaLinkedinIn />
          </button>
        </div>

        {/* Alamat + Kontak */}
        <div>
          <p className="max-w-md mx-auto">
            Jl. Raya Jabon No. 6, Jabonotoyo, Jabon, Kec. Mojoanyar, Kabupaten
            Mojokerto - Jawa Timur 61364 - Indonesia
          </p>
          <div className="flex justify-center items-center gap-7 mt-2">
            <span className="flex items-center gap-3">
              <FaPhone className="text-sm" />
              <a href="#" className="text-primary hover:text-secondary">
                0812 2222 8943
              </a>
            </span>
            <span className="flex items-center gap-3">
              <FaEnvelope className="text-sm" />
              <a href="#" className="text-primary hover:text-secondary">
                info@ptmka.com
              </a>
            </span>
          </div>
        </div>

        {/* Logo Tengah */}
        <div>
          <Link to="/">
            <img
              src="/assets/LogoMKA.svg"
              alt="Logo MKA"
              className="cursor-pointer mt-5 h-15"
            />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-400 text-xs py-2 px-4 flex justify-between items-center">
        <span>
          Copyright © 2025 CV Mandiri Karja Abadi. All rights reserved.
        </span>
        <span>
          Powered by <span className="font-semibold">NETHER.</span> - From the
          Depths, Comes Power
        </span>
      </div>
    </footer>
  );
};

export default Footer;
