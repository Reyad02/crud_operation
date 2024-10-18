const Button = ({ text, onClick }) => {
  return (
    <div>
      <button
        className={`btn text-white ${
          text === "Delete" ? "bg-red-400" : 
          text === "Add Product" ? "bg-green-400" : // Add styling for the "Add" button
          "bg-blue-400" // Default styling for other buttons
        }`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
