const TableCell = ({ children }) => {
  return (
    <td className="h-10 border-[1px] border-gray-200 px-2 py-1 text-center align-middle text-xs first:font-semibold">
      {children}
    </td>
  );
};

export default TableCell;
