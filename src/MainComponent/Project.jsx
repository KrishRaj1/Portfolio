import ProjectCard from "../Shared/Components/ProjectCard";
import { projects } from "../Shared/Components/projects";

function Project() {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-10">
      <div className="h-20 w-full flex items-center justify-center">
        <h2 className="text-3xl font-semibold">Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}

export default Project;
