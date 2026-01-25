function CodeSnippet({ code, language }) {
  return (
    <div className="text-sm google-sans-code flex gap-3 bg-[#1F2937] p-4 rounded-xl">
      <p className="text-white">{code}</p>
      <p className="text-green-300">{language}</p>
    </div>
  );
}

export default CodeSnippet;
