const Header = ({ setAdding }) => {
  return (
    <header className="p-10 ">
      <h1 className="text-3xl text-center font-bold text-black/95">
        Employee Management Software
      </h1>
      <div className="mt-5 text-center">
        <button
          onClick={() => setAdding(true)}
          className="btn bg-black hover:bg-black/95 py-2 px-5 rounded-md text-white font-medium duration-300"
        >
          Add Employee
        </button>
      </div>
    </header>
  );
};

export default Header;
