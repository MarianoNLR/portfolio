import { LucideHatGlasses, ClipboardCheck, ShoppingCart } from 'lucide-react'

const projectItems = [
  {
    title: 'E-commerce para portfolio',
    description:
      'Proyecto web de e-commerce orientado a catalogo, detalle de productos y flujo de compra dentro de un portfolio tecnico.',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'HTML5', 'CSS3'],
    Icon: ShoppingCart,
    githubUrl: 'https://github.com/MarianoNLR/e-commerce-api',
    deployUrl: 'https://e-commerce-react-live.vercel.app/',
  },
  {
    title: 'Juego de palabras estilo Impostor',
    description:
      'Juego web multijugador de palabras inspirado en la dinamica de Impostor, con foco en logica de juego e interaccion en tiempo real.',
    technologies: ['React', 'Socket.IO', 'Tailwind CSS', 'HTML5', "Node.js", 'Typescript'],
    Icon: LucideHatGlasses,
    githubUrl: 'https://github.com/MarianoNLR/impostor-game',
    deployUrl: 'https://impostor-game-gamma-seven.vercel.app/',
  },
  {
    title: 'Herramienta administrativa de escritorio',
    description:
      'Aplicacion de escritorio desarrollada durante la practica profesional de la tecnicatura para agilizar tareas administrativas dentro de la empresa. Sin repositorio publico por ser un proyecto interno.',
    technologies: ['Python', 'PyQt', 'Pandas'],
    Icon: ClipboardCheck,
    githubUrl: '',
    deployUrl: '',
  },
]

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 flex min-h-[100dvh] flex-col justify-center py-12">
      <div className="mb-8 text-center md:mb-10">
        <h2 className="hero-title text-4xl font-bold tracking-tight text-[var(--color-text-strong)] md:text-5xl">
          Proyectos
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {projectItems.map((project) => {
          const Icon = project.Icon

          return (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-4 transition hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] md:p-5"
            >
            <div className="mb-4 aspect-video w-full rounded-xl border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg)_76%,transparent)]">
              <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-[var(--color-border-strong)]/60">
                <Icon
                  aria-hidden="true"
                  className="h-14 w-14 text-[var(--color-icon)] md:h-16 md:w-16"
                  strokeWidth={1.8}
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold text-[var(--color-text-strong)]">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text)]">
              {project.description}
            </p>

            <div className="mt-auto pt-5">
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md border border-[var(--color-border-strong)]/70 px-2.5 py-1 text-xs text-[var(--color-text-strong)]"
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              <div className="mt-5 min-h-[46px]">
                {project.githubUrl || project.deployUrl ? (
                  <div className="flex flex-wrap justify-center gap-3">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-w-[110px] items-center justify-center rounded-xl border border-[var(--color-border-strong)] bg-[color-mix(in_oklab,var(--color-icon)_16%,transparent)] px-4 py-2.5 text-sm font-semibold text-[var(--color-text-strong)] transition hover:-translate-y-0.5 hover:border-[var(--color-icon)] hover:bg-[color-mix(in_oklab,var(--color-icon)_24%,transparent)]"
                      >
                        GitHub
                      </a>
                    ) : null}

                    {project.deployUrl ? (
                      <a
                        href={project.deployUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-w-[110px] items-center justify-center rounded-xl bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-[var(--color-accent-foreground)] transition hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)]"
                      >
                        Deploy
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
