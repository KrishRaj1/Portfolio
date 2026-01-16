function Section() {
  return (
    <header className="w-full bg-white dark:bg-neutral-950">
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4 md:px-8 py-12 gap-8">
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dohv9bd7g/image/upload/v1720705092/IMAGE_2024-07-07_22_41_42_touzv8.jpg"
            alt="Krish"
            className="rounded-full h-48 w-48 md:h-64 md:w-64 shadow-md object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-center items-center md:items-start">
          <h1 className="font-ooohbaby text-4xl md:text-6xl mb-2">Hi, I am Krish.</h1>
          <h2 className="font-mulish text-2xl md:text-4xl mb-4">Web Developer</h2>
          <p className="font-mulish text-base md:text-lg text-center md:text-left max-w-2xl">
            Frontend and backend developer focused on building performant, accessible, and delightful web experiences.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="mailto:shivharekrishraj@gmail.com" className="rounded-full border px-4 py-2 text-sm font-semibold">Contact Me</a>
            <a href="https://krishraj-resume.tiiny.site/" target="_blank" rel="noreferrer" className="rounded-full border px-4 py-2 text-sm font-semibold">Resume</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Section;
