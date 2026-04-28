function PageWrapper({ title, children, titleClass = "" }) {
  return (
    <div className="p-4 md:p-6 bg-black mt-6 md:mt-10 min-h-[200px]">
      
      <h1 className={`text-2xl md:text-3xl italic text-yellow-300 font-bold mb-4 ${titleClass}`}>
        {title}
      </h1>

      <div className="text-yellow-300 italic max-w-5xl mx-auto">
        {children}
      </div>

    </div>
  );
}

export default PageWrapper;