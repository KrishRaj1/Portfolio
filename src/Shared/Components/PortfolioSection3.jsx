import { Icon } from "@iconify/react";
import IconShared from "../IconShared";
import { Link } from "react-router-dom";

function PortfolioSection3() {
    return (
        <>
            <div className="h-28 w-full"></div>
            <div className="h-auto bg-white flex flex-col lg:flex-row mx-4 lg:mx-16 mb-10">
                <div className="w-full lg:w-1/3 h-auto flex justify-center items-center bg-white p-4 lg:p-6">
                    <Icon icon="dashicons:portfolio" fontSize={100} className="lg:fontSize-120" />
                </div>
                <div className="w-full lg:w-2/3 bg-white flex flex-col p-4 lg:p-6">
                    <div className="font-ooohbaby text-3xl lg:text-4xl mb-4">
                        Portfolio
                    </div>
                    <div className="font-mulish text-base lg:text-lg mb-4">
                        Welcome to my personal portfolio website, a comprehensive showcase
                        of my skills, projects, and professional journey. Designed with a focus on clarity and creativity,
                        this website serves as a platform to highlight my expertise in web development and my passion for 
                        creating dynamic and user-friendly web applications.
                    </div>
                    <div className="font-semibold text-lg lg:text-xl mb-4">Technologies Used:</div>
                    <div className="font-semibold text-base lg:text-lg space-y-2">
                        <div>Frontend: HTML, CSS, JavaScript</div>
                        <div>Backend: Node.js, Express.js</div>
                        <div>Version Control: Git and GitHub</div>
                    </div>
                </div>
            </div>
            <div className="h-auto w-full flex flex-col items-center p-4 lg:p-6 mt-10">
                <div className="font-semibold text-xl lg:text-2xl mb-4">For other Projects!</div>
                <Link to='https://github.com/KrishRaj1'>
                    <div className="border-2 border-gray-400 text-black h-10 w-40 lg:w-48 mt-5 font-semibold flex items-center justify-center rounded-full cursor-pointer">
                        Click Here
                    </div>
                </Link>
            </div>
        </>
    );
}

export default PortfolioSection3;
