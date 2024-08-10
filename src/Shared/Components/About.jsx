import AboutLower from "./AboutLower";

function About() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="font-semibold text-3xl md:text-3xl lg:text-3xl mb-4">About</div>
          <div className="text-lg md:text-xl lg:text-xl font-semibold text-center px-4 md:px-8">
          I am a recent BTech graduate in Computer Science, deeply passionate about web development. 
          With hands-on experience in creating dynamic and engaging web projects, I thrive on solving 
          complex programming challenges. My enthusiasm for learning new technologies drives me to continuously
           improve and adapt. I am currently seeking opportunities to apply my skills, contribute to innovative 
           projects, and advance my career in web development. Thank you for taking the time to explore my portfolio!
          </div>
        </div>
      </div>

      <div className="bg-black text-white flex justify-center items-center">
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center px-4">
          <div className="mt-6">
            <AboutLower icon={"logos:google-gmail"} text={"shivharekrishraj@gmail.com"} fontSize={15} />
          </div>
          <div className="mt-3 mb-3">
            <AboutLower icon={"noto:mobile-phone"} text={"7417167355"} fontSize={25} />
          </div>
          <div className="mb-6">
            <AboutLower icon={"logos:google-maps"} text={"Noida, UP"} fontSize={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
