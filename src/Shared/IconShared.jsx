import { Icon } from "@iconify/react";

function IconShared({ icon, style, fontsize }) {
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer md:cursor-default">
      <Icon icon={icon} fontSize={fontsize} style={style} />
    </div>
  );
}

export default IconShared;
