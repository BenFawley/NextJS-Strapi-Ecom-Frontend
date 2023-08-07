const OrderSummaryItem = ({ title, data }) => {
  return (
    <div>
      <p className="text-sm font-semibold text-teal-950">{data}</p>
      <span className="text-xs italic text-gray-700">{title}</span>
    </div>
  );
};

export default OrderSummaryItem;
