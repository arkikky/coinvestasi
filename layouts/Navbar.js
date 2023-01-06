import { useState, useCallback } from "react";

import Image from "next/legacy/image";
import Link from "next/link";

const Navbar = () => {
  // Toggle
  const [menu, setMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);

  return (
    <>
      <nav
        id="primaryNavbar"
        className={`bg-white fixed top-0 inset-x-0 bottom-auto ${
          menu ? "active" : ""
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between py-6 px-0">
            <Link className="flex relative" href="/">
              <Image
                alt="Coinvestasi (LOGO)"
                src="/assets/images/coinvestasi-primary.svg"
                height={24}
                width={146}
              />
            </Link>
            <ul className="menu menu-row">
              <li className="menu-item">
                <Link href="/">{`Home`}</Link>
              </li>
              <li className="menu-item">
                <Link href="/berita">{`Berita`}</Link>
              </li>
              <li className="menu-item">
                <Link href="/components">{`Components`}</Link>
              </li>
            </ul>
            <div>Searcj</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
