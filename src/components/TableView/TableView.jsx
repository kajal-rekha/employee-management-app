import TableRow from "../TableView/TableRow";

const TableView = ({ employees, handleDelete, handleEdit }) => {
  return (
    <table className="mx-auto w-[90%] mb-10 bg-gray/90">
      <thead className="bg-black text-white">
        <tr className="flex justify-between py-3 px-6 text-white/80 text-md text-start">
          <th>No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.length > 0 ? (
          employees.map((employee, index) => (
            <TableRow
              key={employee.id}
              employee={employee}
              index={index}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))
        ) : (
          <tr>
            <td>No Employee</td>
          </tr>
        )}
      </tbody>
      <tbody></tbody>
    </table>
  );
};

export default TableView;
