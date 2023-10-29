const Footer = () => {
  return (
    <footer className="footer text-white py-10 text-center bg-black">
      <p className="text-lg">
        &copy; {new Date().getFullYear()} Employee Management. All rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;
