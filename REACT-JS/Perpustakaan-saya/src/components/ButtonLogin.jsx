function Button({ type, disabled, text }) {
  return (
    <button 
      type={type} 
      disabled={disabled}
      className={`w-full py-2.5 px-4 mt-2 font-bold text-white rounded-lg shadow-md transition-all duration-200 
        ${disabled 
          ? 'bg-emerald-400 cursor-not-allowed opacity-75' 
          : 'bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98]'
        }`}
    >
      {text}
    </button>
  );
}

export default Button;
