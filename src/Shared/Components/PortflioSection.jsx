import { Icon } from "@iconify/react";
import IconShared from "../IconShared";

function PortfolioSection() {
  return (
    <div className="h-auto bg-white p-4 md:p-6 lg:p-8">
      <div className="min-h-20 bg-white flex justify-center items-center font-semibold text-2xl md:text-3xl lg:text-4xl">
        <div className="w-full text-center md:w-2/3 lg:w-1/3">Portfolio</div>
      </div>
      <div className="h-4"></div>
      <div className="h-auto bg-neutral-400 flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 h-auto flex justify-center items-center bg-white p-4">
          <Icon icon="logos:spotify-icon" fontSize={100} />
        </div>
        <div className="w-full md:w-2/3 h-auto bg-white flex flex-col p-4 md:p-6 lg:p-8">
          <div className="font-ooohbaby text-3xl md:text-4xl lg:text-5xl mb-4">
            Spotify Clone
          </div>
          <div className="font-mulish text-base md:text-lg lg:text-xl mb-4">
            This project is a fully functional clone of the popular music streaming service,
            Spotify. Developed with a focus on providing a seamless and intuitive user
            experience, it allows users to browse, search, and play their favorite music
            tracks just like the original platform.
          </div>
          <div className="font-semibold text-lg md:text-xl lg:text-2xl mb-4">Technologies Used:</div>
          <div className="font-semibold text-base md:text-lg lg:text-xl space-y-2">
            <div>Frontend: HTML, CSS, JavaScript</div>
            <div>Backend: Node.js, Express.js</div>
            <div>Database: SQL</div>
            <div>Authentication: JWT (JSON Web Tokens)</div>
            <div>Version Control: Git and GitHub</div>
          </div>
          <div className="flex flex-col items-start md:items-center mt-4">
            <a href="https://github.com/KrishRaj1" className="w-full max-w-xs rounded-full h-10 border-2 border-gray-400 flex items-center justify-center text-zinc-800 font-semibold mb-4 text-center">Visit</a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSection;
