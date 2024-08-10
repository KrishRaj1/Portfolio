function Card({ text }) {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="h-auto w-full max-w-xs bg-black border-black border-2 rounded-md flex flex-col m-4 md:m-6 lg:m-8">
        <div className="h-36 w-full flex items-center justify-center p-4 md:p-5 lg:p-6">
          {/* Add content or image here if needed */}
        </div>
        <div className="h-10 w-full flex items-center">
          <div className="flex justify-center w-full font-semibold text-base md:text-lg lg:text-xl text-white px-4">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
