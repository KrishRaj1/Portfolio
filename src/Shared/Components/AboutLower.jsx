import { Icon } from "@iconify/react";

function AboutLower({ icon, fontSize, style, text }) {
  return (
    <div className="w-full h-10 flex m-2 items-center">
      <div className="w-1/3 flex items-center justify-center">
        <Icon icon={icon} fontSize={fontSize} style={style} />
      </div>
      <div className="ml-2 md:ml-5 w-2/3 text-sm md:text-base lg:text-lg">
        {text}
      </div>
    </div>
  );
}

export default AboutLower;
