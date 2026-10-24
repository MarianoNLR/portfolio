import {
  LucideHatGlasses,
  ClipboardCheck,
  ShoppingCart,
  Gamepad2,
  Link,
} from "lucide-react";
import Reveal from "./Reveal.jsx";

const projectItems = [
  {
    title: "E-commerce para portfolio",
    description:
      "Proyecto web de e-commerce orientado a catalogo, detalle de productos y flujo de compra dentro de un portfolio tecnico.",
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "HTML5",
      "CSS3",
    ],
    Icon: ShoppingCart,
    githubUrl: "https://github.com/MarianoNLR/e-commerce-api",
    deployUrl: "https://e-commerce-react-live.vercel.app/",
  },
  {
    title: "Juego de palabras estilo Impostor",
    description:
      "Juego web multijugador de palabras inspirado en la dinamica de Impostor, con foco en logica de juego e interaccion en tiempo real.",
    technologies: [
      "React",
      "Socket.IO",
      "Tailwind CSS",
      "HTML5",
      "Node.js",
      "Typescript",
    ],
    Icon: LucideHatGlasses,
    githubUrl: "https://github.com/MarianoNLR/impostor-game",
    deployUrl: "https://impostor-game-gamma-seven.vercel.app/",
  },
  {
    title: "Herramienta administrativa de escritorio",
    description:
      "Aplicacion de escritorio desarrollada durante la practica profesional de la tecnicatura para agilizar tareas administrativas dentro de la empresa. Sin repositorio publico por ser un proyecto interno.",
    technologies: ["Python", "PyQt", "Pandas"],
    Icon: ClipboardCheck,
    githubUrl: "",
    deployUrl: "",
  },
  {
    title: "Recomendador de juegos de Steam por etiquetas",
    description:
      "Aplicación web que analiza las etiquetas de los juegos preferidos por los miembros de un grupo y encuentra juegos de Steam con mayor afinidad, aplicando filtros como presupuesto y compatibilidad multijugador.",
    technologies: ["NestJS", "React", "PostgreSQL"],
    Icon: Gamepad2,
    githubUrl: "",
    deployUrl: "https://game-recommender.marianonehuenlr.workers.dev/",
  },
  {
    title: "Link in Bio",
    description:
      "Aplicación full-stack para crear y administrar un perfil público con links personalizados, autenticación, reordenamiento drag and drop, avatar y seguimiento de clics.",
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "TanStack Query",
      "Tailwind CSS",
    ],
    Icon: Link,
    githubUrl: "https://github.com/MarianoNLR/link_in_bio",
    deployUrl: "https://link-in-bio.marianonehuenlr.workers.dev/",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 flex min-h-dvh flex-col justify-center py-12"
    >
      <Reveal className="mb-8 text-center md:mb-10">
        <h2 className="hero-title text-4xl font-bold tracking-tight text-(--color-text-strong) md:text-5xl">
          Proyectos
        </h2>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {projectItems.map((project, index) => {
          const Icon = project.Icon;

          return (
            <Reveal key={project.title} delay={(index % 3) * 120} className="h-full">
            <article
              className="group flex h-full flex-col rounded-2xl border border-(--color-border) bg-(--color-bg-elevated) p-4 transition duration-300 hover:-translate-y-1.5 hover:border-(--color-icon) hover:shadow-[0_14px_40px_-14px_color-mix(in_oklab,var(--color-icon)_55%,transparent)] md:p-5"
            >
              <div className="mb-4 aspect-video w-full rounded-xl border border-(--color-border) bg-[color-mix(in_oklab,var(--color-bg)_76%,transparent)]">
                <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-(--color-border-strong)/60">
                  <Icon
                    aria-hidden="true"
                    className="h-14 w-14 text-(--color-icon) transition duration-300 group-hover:scale-110 group-hover:-rotate-6 md:h-16 md:w-16"
                    strokeWidth={1.8}
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-(--color-text-strong)">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-(--color-text)">
                {project.description}
              </p>

              <div className="mt-auto pt-5">
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md border border-(--color-border-strong)/70 px-2.5 py-1 text-xs text-(--color-text-strong) transition duration-200 hover:-translate-y-0.5 hover:border-(--color-icon) hover:text-(--color-icon)"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 min-h-11.5">
                  {project.githubUrl || project.deployUrl ? (
                    <div className="flex flex-wrap justify-center gap-3">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-shine inline-flex min-w-27.5 items-center justify-center rounded-xl border border-(--color-border-strong) bg-[color-mix(in_oklab,var(--color-icon)_16%,transparent)] px-4 py-2.5 text-sm font-semibold text-(--color-text-strong) transition hover:-translate-y-0.5 hover:border-(--color-icon) hover:bg-[color-mix(in_oklab,var(--color-icon)_24%,transparent)]"
                        >
                          GitHub
                        </a>
                      ) : null}

                      {project.deployUrl ? (
                        <a
                          href={project.deployUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-shine inline-flex min-w-27.5 items-center justify-center rounded-xl bg-(--color-accent) px-4 py-2.5 text-sm font-semibold text-(--color-accent-foreground) transition hover:-translate-y-0.5 hover:bg-(--color-accent-hover)"
                        >
                          Deploy
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
