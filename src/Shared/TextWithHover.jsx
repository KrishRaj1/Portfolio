function TextWithHover({ text }) {
  return (
    <div className="flex items-center cursor-pointer">
      <div className="font-semibold text-base md:text-lg lg:text-xl hover:opacity-80 transition-opacity">
        {text}
      </div>
    </div>
  );
}

export default TextWithHover;
