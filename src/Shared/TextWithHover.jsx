function TextWithHover({ text }) {
  return (
    <div className="flex items-center cursor-pointer">
      <div className="font-semibold text-base md:text-lg lg:text-xl">
        {text}
      </div>
    </div>
  );
}

export default TextWithHover;
