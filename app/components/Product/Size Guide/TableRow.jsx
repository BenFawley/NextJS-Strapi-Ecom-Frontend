const TableRow = ({ children, header }) => {
  return (
    <tr className={`${header ? "font-semibold uppercase" : ""}`}>{children}</tr>
  );
};

export default TableRow;
