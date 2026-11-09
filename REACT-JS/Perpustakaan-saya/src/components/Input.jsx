function Input({ label, type, placeholder, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block mb-1.5 text-sm font-semibold text-gray-700">
        {label}
      </label>
      <input 
        type={type} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full px-3.5 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
      />
    </div>
  );
}

export default Input;
