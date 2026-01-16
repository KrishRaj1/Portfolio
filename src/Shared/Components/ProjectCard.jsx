import { Icon } from "@iconify/react";

function ProjectCard({ title, description, tags = [], icon, repoUrl, liveUrl }) {
  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        {icon ? <Icon icon={icon} fontSize={28} /> : null}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 rounded-full border border-neutral-300 dark:border-neutral-700">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-3">
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium underline">Code</a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium underline">Live</a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;