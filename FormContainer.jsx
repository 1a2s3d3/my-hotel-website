function FormContainer({ title, children, onSubmit }) {
  return (
    <div className="flex justify-center items-center bg-yellow-400 min-h-screen w-full m-0 p-0 overflow-hidden">
      <form onSubmit={onSubmit} className="bg-black p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4 text-center text-white">
          {title}
        </h2>

        {children}

        <button className="bg-blue-500 text-white w-full p-2 rounded mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormContainer;