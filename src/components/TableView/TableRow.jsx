const TableRow = ({ employee, index, handleDelete, handleEdit }) => {
  const { id, firstName, lastName, email, salary, date } = employee;
  return (
    <tr className="flex justify-between py-3 px-4 hover:bg-gray-300 duration-300 ">
      <td>{index + 1}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{salary}</td>
      <td>{date}</td>
      <div className="flex gap-5">
        <button
          onClick={() => handleEdit(id)}
          className="border  border-black/90 py-1 px-2 rounded-md font-medium text-black/80 hover:bg-black hover:text-white duration-300"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="border  border-black/90 py-1 px-2 rounded-md font-medium text-black/80 hover:bg-black hover:text-white duration-300"
        >
          Delete
        </button>
      </div>
    </tr>
  );
};

export default TableRow;
