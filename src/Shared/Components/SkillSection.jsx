import Card from "./Card";
import SkillCardIcon from "./SkillCardIcon";

function SkillSection() {
    return (
        <div className="p-4 lg:p-8">
            <div className="h-36 w-full flex items-center justify-center">
                <div className="font-semibold text-3xl">Skills</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <SkillCardIcon src={"fluent:javascript-16-regular"} text={"JavaScript"} />
                <SkillCardIcon src={"devicon:java-wordmark"} text={"Java"} />
                <SkillCardIcon src={"devicon:express"} text={"Express"} />
                <SkillCardIcon src={"logos:react"} text={"ReactJS"} />
                <SkillCardIcon src={"logos:nodejs"} text={"Node.JS"} />
                <SkillCardIcon src={"devicon:mongodb-wordmark"} text={"MongoDB"} />
                <SkillCardIcon src={"devicon:mysql"} text={"SQL"} />
                <SkillCardIcon src={"material-symbols-light:data-object"} text={"OOPS"} />
            </div>
        </div>
    );
}

export default SkillSection;
