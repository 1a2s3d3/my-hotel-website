function FormInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <div className="flex flex-col mb-4 w-full">
      {label && <label className="mb-1 font-semibold">{label}</label>}

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

export default FormInput;