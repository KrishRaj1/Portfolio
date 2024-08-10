import { Icon } from "@iconify/react";
import IconShared from "../IconShared";

function PortfolioSection2() {
  return (
    <div className="h-auto bg-white p-4 md:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row h-auto">
        <div className="w-full md:w-2/3 h-auto bg-white flex flex-col p-4 md:p-6 lg:p-8">
          <div className="font-ooohbaby text-3xl md:text-4xl lg:text-5xl mb-4">
            Sudko Solver
          </div>
          <div className="font-mulish text-base md:text-lg lg:text-xl mb-4">
            The 8x8 Sudoku Solver is a dynamic web application designed to solve 8x8 Sudoku puzzles quickly and accurately. Leveraging the power of RapidAPI, this project offers an efficient and user-friendly solution for Sudoku enthusiasts looking to solve puzzles effortlessly.
          </div>
          <div className="font-semibold text-lg md:text-xl lg:text-2xl mb-4">Technologies Used:</div>
          <div className="font-semibold text-base md:text-lg lg:text-xl space-y-2">
            <div>Frontend: HTML, CSS, JavaScript</div>
            <div>Backend: Node.js, Express.js</div>
            <div>API: Rapid API</div>
            <div>Version Control: Git and GitHub</div>
          </div>
          <div className="flex flex-col items-start md:items-center mt-4">
            <a href="https://github.com/KrishRaj1" className="w-full max-w-xs rounded-full h-10 border-2 border-gray-400 flex items-center justify-center text-zinc-800 font-semibold mb-4 text-center">Visit</a>
            
          </div>
        </div>
        <div className="w-full md:w-1/3 flex items-center justify-center p-4 md:p-6 lg:p-8">
          <Icon icon="arcticons:sudoku" fontSize={100} className="md:fontSize-120 lg:fontSize-160" />
        </div>
      </div>
    </div>
  );
}

export default PortfolioSection2;
