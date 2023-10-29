import { useState } from "react";
import { employeesData } from "../Data/data";
import Header from "./Header/Header";
import TableView from "./TableView/TableView";
import AddForm from "./FormView/AddForm";
import EditForm from "./FormView/EditForm";
import Swal from "sweetalert2";

const Employees = () => {
  const [employees, setEmployees] = useState([...employeesData]);
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);
  const [seleceteEmployee, setSeleceteEmployee] = useState(null);

  const handleEdit = (id) => {
    const employee = employees.find((employee) => employee.id === id);
    setSeleceteEmployee(employee);
    setEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't able to revert it",
      showCancelButton: true,
      confirmButtonText: "yes, Delete it",
      cancelButtonText: "No, Cancel",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted",
          text: `"${employee.firstName} ${employee.lastName}" has been been deleted`,
          showConfirmButton: false,
          timer: 1500,
        });

        setEmployees(employees.filter((employee) => employee.id !== id));
        console.log(id);
      }
    });
  };
  return (
    <div>
      {!adding && !editing && (
        <div>
          <Header setAdding={setAdding} />
          <TableView
            employees={employees}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      )}
      <div>
        {adding && (
          <AddForm
            employees={employees}
            setEmployees={setEmployees}
            setAdding={setAdding}
          />
        )}

        {editing && (
          <EditForm
            seleceteEmployee={seleceteEmployee}
            setEditing={setEditing}
            employees={employees}
            setEmployees={setEmployees}
          />
        )}
      </div>
    </div>
  );
};

export default Employees;
