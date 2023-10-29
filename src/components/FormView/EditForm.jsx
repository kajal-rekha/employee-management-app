import { useState } from "react";
import Swal from "sweetalert2";
import { employeesData } from "../../Data/data";

const EditForm = ({
  seleceteEmployee,
  setEditing,
  employees,
  setEmployees,
}) => {
  const { id } = seleceteEmployee;

  const [employeeData, setEmployeeData] = useState({
    firstName: seleceteEmployee.firstName,
    lastName: seleceteEmployee.lastName,
    email: seleceteEmployee.email,
    salary: seleceteEmployee.salary,
    date: seleceteEmployee.date,
  });

  const { firstName, lastName, email, salary, date } = employeeData;

  const inputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required",
        showCancelButton: true,
      });
    }

    const updatedEmployees = employees.map((employee) =>
      employee.id === id ? { id, ...employeeData } : employee
    );
    console.log(updatedEmployees);
    setEmployees(updatedEmployees);
    setEditing(false);
    Swal.fire({
      icon: "success",
      title: "udpated",
      text: `${firstName} ${lastName} has been updated`,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-10">Add Employee</h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-[60%] p-10 mb-20 bg-black/95 text-white rounded-md"
      >
        <div className="flex flex-col mt-7">
          <label htmlFor="first-name" className="text-lg font-medium">
            FirstName
          </label>
          <input
            onChange={inputChange}
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
            onChange={inputChange}
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
            onChange={inputChange}
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
            onChange={inputChange}
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
            onChange={inputChange}
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

export default EditForm;
