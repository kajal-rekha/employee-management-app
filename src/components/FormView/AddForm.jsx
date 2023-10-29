import { useState } from "react";
import Swal from "sweetalert2";

const AddForm = ({ employees, setEmployees, setAdding }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All field's are required",
        showConfirmButton: true,
      });
    }
    const id = employees.length + 1;
    const addUser = {
      firstName,
      lastName,
      email,
      salary,
      date,
      id,
    };
    setEmployees([...employees, addUser]);
    setAdding(false);
    Swal.fire({
      icon: "success",
      title: "added",
      text: "Data has been added!",
      timer: 1500,
    });
  };

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-10">Add Employee</h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-[70%] p-10 mb-20 bg-black/95 text-white rounded-md"
      >
        <div className="flex flex-col mt-7">
          <label htmlFor="first-name" className="text-lg font-medium">
            FirstName
          </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            className="py-2 px-4 bg-transparent border border-gray-400 rounded-md outline-none focus:border-white focus:border-[1px]"
          />
        </div>
        <div className="flex flex-col mt-7">
          <label htmlFor="last-name" className="text-lg font-medium">
            LastName
          </label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            className="py-2 px-4 bg-transparent border border-gray-400 rounded-md outline-none focus:border-white focus:border-[1px]"
          />
        </div>
        <div className="flex flex-col mt-7">
          <label htmlFor="email" className="text-lg font-medium">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="email"
            name="email"
            value={email}
            className="py-2 px-4 bg-transparent border border-gray-400 rounded-md outline-none focus:border-white focus:border-[1px]"
          />
        </div>
        <div className="flex flex-col mt-7">
          <label htmlFor="salary" className="text-lg font-medium">
            Salary
          </label>
          <input
            onChange={(e) => setSalary(e.target.value)}
            type="number"
            id="salary"
            name="salary"
            value={salary}
            className="py-2 px-4 bg-transparent border border-gray-400 rounded-md outline-none focus:border-white focus:border-[1px]"
          />
        </div>

        <div className="flex flex-col mt-7">
          <label htmlFor="date" className="text-lg font-medium">
            Date
          </label>
          <input
            onChange={(e) => setDate(e.target.value)}
            type="date"
            name="date"
            id="date"
            value={date}
            className="py-2 px-4 bg-transparent border border-gray-400 rounded-md outline-none focus:border-white focus:border-[1px]"
          />
        </div>
        <div className="btn flex gap-3 mt-14">
          <button
            type="submit"
            className="py-2 px-5 rounded-md font-medium bg-white text-black hover:bg-white/80 duration-300"
          >
            Add
          </button>
          <button
            type="submit"
            className="py-2 px-5 rounded-md font-medium bg-white text-black hover:bg-white/80  duration-300 "
          >
            Cancle
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
