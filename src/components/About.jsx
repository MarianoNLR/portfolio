function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 flex min-h-[100dvh] items-center rounded-2xl p-6 md:p-8"
    >
      <div className="w-full">
        <div className="mb-8 text-start md:mb-10">
          <h2 className="hero-title text-4xl font-bold tracking-tight text-[var(--color-text-strong)] md:text-5xl">
            Sobre mi
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="mx-auto max-w-xl space-y-4">
            <p className="leading-relaxed text-[var(--color-text)] md:text-lg">
              Me gradué de la Tecnicatura Universitaria en Programación en la Universidad
              Tecnológica Nacional, donde consolidé los fundamentos de desarrollo de software y el
              trabajo en equipo para resolver problemas reales.
            </p>
            <p className="leading-relaxed text-[var(--color-text)] md:text-lg">
              Además, realicé cursos complementarios para ampliar mi perfil profesional y seguir
              creciendo como desarrollador FullStack.
            </p>
          </div>

          <div className="mx-auto w-full max-w-xl rounded-xl bg-transparent p-4 md:p-5">
            <p className="text-lg font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
              Tecnologías y frameworks
            </p>

            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg-elevated)_72%,transparent)] p-4">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                  Frontend
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {['HTML5', 'CSS3', 'JavaScript ES6+', 'React', 'Responsive Design'].map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-[var(--color-border-strong)]/70 px-3 py-1 text-sm text-[var(--color-text-strong)]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg-elevated)_72%,transparent)] p-4">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                  Backend
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'Mongoose', 'Sequelize', 'RESTful APIs'].map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-[var(--color-border-strong)]/70 px-3 py-1 text-sm text-[var(--color-text-strong)]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg-elevated)_72%,transparent)] p-4">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                  Bases de datos
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {['MongoDB', 'MySQL', 'SQL Server'].map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-[var(--color-border-strong)]/70 px-3 py-1 text-sm text-[var(--color-text-strong)]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg-elevated)_72%,transparent)] p-4">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                  Versión y colaboración
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {['Git', 'GitHub'].map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-[var(--color-border-strong)]/70 px-3 py-1 text-sm text-[var(--color-text-strong)]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
