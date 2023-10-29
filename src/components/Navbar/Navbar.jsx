const Navbar = () => {
  return (
    <navbar className="">
      <nav className="flex justify-between items-center bg-black h-20 top-0 left-0 right-0 z[1000] text-white p-10 text-xl">
        <div className="logo">Employee Management</div>
        <div>
          <ul className="flex justify-between items-center gap-10">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </navbar>
  );
};

export default Navbar;
