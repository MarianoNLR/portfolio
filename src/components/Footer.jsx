function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)]/70 py-8">
      <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="text-sm text-[var(--color-text-muted)]">
          © {year} Mariano Nehuén Lotero Rolón. Todos los derechos reservados.
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <li>
            <a
              href="mailto:marianonehuenlr@gmail.com"
              className="text-[var(--color-text)] transition hover:text-[var(--color-icon)]"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mariano-lotero-rolon/"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-text)] transition hover:text-[var(--color-icon)]"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MarianoNLR"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-text)] transition hover:text-[var(--color-icon)]"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
