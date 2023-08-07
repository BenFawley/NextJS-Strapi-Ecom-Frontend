const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`min-w-[64px] rounded-md bg-royal px-8 py-3 text-base font-medium text-white ${className} transition-all duration-200 hover:opacity-80`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
