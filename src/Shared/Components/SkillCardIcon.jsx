import { Icon } from "@iconify/react";

function SkillCardIcon({ text, src }) {
    return (
        <div className="m-4 lg:m-6">
            <div className="h-60 w-40 bg-black border-black border-2 rounded-md flex flex-col items-center p-4">
                <div className="h-36 w-36 flex items-center justify-center">
                    <Icon
                        icon={src}
                        style={{
                            width: "100px",
                            height: "120px",
                            background: "white",
                            borderRadius: "5px",
                            margin: "5px",
                        }}
                        fontSize={40}
                    />
                </div>
                <div className="h-10 w-full flex items-center justify-center">
                    <div className="font-semibold text-xl text-white">{text}</div>
                </div>
            </div>
        </div>
    );
}

export default SkillCardIcon;
