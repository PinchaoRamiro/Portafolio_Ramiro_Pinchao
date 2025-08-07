import { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectType from "../utils/ProjectType";
import projectsJson from "../utils/Projects.json";

export default function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [hovering, setHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isMobile = () => window.innerWidth < 768;

  // 🔹 Fake paged fetch from JSON
  const fetchProjects = async () => {
    const newProjects: ProjectType[] = projectsJson.projects.slice(
      (page - 1) * 8,
      page * 8
    );
    if(isMobile()) return setProjects(newProjects);
    setProjects((prev) => [...prev, ...newProjects]);
    if (newProjects.length < 8) setHasMore(false);
  };

  // 🔹 Load projects on page change
  useEffect(() => {
    fetchProjects();
  }, [page]);

  useEffect(() => {
    if (isMobile()) return; // ⛔ No auto-scroll en móvil

    const container = containerRef.current;
    if (!container) return;

    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = container.scrollWidth / 4;
    }

    const scrollSpeed = 0.5;
    let animationFrameId: number;

    const autoScroll = () => {
      if (!hovering) {
        container.scrollLeft += scrollSpeed;

        const nearEnd =
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 100;

        if (nearEnd && hasMore) {
          setPage((prev) => prev + 1);
        }

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hovering, hasMore]);

  // 🔁 Duplicar proyectos para que se vea "infinito"
  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="p-6 mt-0">
      <div
        ref={containerRef}
        className="
          flex flex-col md:flex-row
          overflow-y-auto md:overflow-x-auto
          px-2 p-5 gap-6
          scrollbar-hide scroll-smooth
          shadow-[0_0_15px_5px_rgba(0,0,0,0.15)] rounded-2xl
          max-h-[calc(100vh-10rem)] md:max-h-none
        "
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {
          isMobile()
            ?  projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))

            : duplicatedProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))
        }
      </div>
    </div>
  );

}
