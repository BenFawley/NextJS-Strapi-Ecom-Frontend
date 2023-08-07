"use client";

const Size = ({ size, onClick, selectedSize }) => {
  return (
    <button
      type="button"
      className={`${
        selectedSize !== null && selectedSize === size && "!border-royal"
      } my-3 w-12 border-2 border-slate-200 p-2 text-center text-sm uppercase transition-all duration-300 hover:cursor-pointer hover:border-royal active:!border-2 active:!border-royal`}
      onClick={onClick}
    >
      {size}
    </button>
  );
};

export default Size;
