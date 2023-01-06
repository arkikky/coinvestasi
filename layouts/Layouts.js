import dynamic from "next/dynamic";

// Layouts - Components
const Navbar = dynamic(() => import("@layouts/Navbar"));
const Footer = dynamic(() => import("@layouts/Footer"));

const Layouts = ({ children }) => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {children}

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layouts;
