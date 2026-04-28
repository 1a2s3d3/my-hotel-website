function NewPage({ title, children, titleClass = "" }) {
  return (
    <div className="p-4 md:p-6 mt-6 md:mt-10 min-h-[200px]">
      
      <h1 className={`text-3xl md:text-5xl italic text-yellow-400 font-bold mb-4 ${titleClass}`}>
        {title}
      </h1>

      <div className="text-2xl md:text-3xl text-yellow-400 italic max-w-5xl mx-auto font-bold">
        {children}
      </div>

    </div>
  );
}

export default NewPage;