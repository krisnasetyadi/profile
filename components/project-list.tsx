"use client";

import { useState } from "react";
import { ProjectRow } from "@/components/project-row";
import { AnimatedRowBorder } from "@/components/animated-row-border";
import type { Project } from "@/lib/projects";

export function ProjectList({ projects }: { projects: Project[] }) {
  const [openProject, setOpenProject] = useState<string | null>(null);

  function handleToggle(name: string) {
    setOpenProject((prev) => (prev === name ? null : name));
  }

  return (
    <div itemScope itemType="https://schema.org/CreativeWork" role="list">
      {projects.map((project) => (
        <div key={project.name} role="listitem" itemProp="workExample">
          <ProjectRow
            project={project}
            isOpen={openProject === project.name}
            onToggle={() => handleToggle(project.name)}
          />
        </div>
      ))}
      <AnimatedRowBorder />
    </div>
  );
}
