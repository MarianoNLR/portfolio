const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mi', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

function Header() {
  return (
    <header className="sticky top-0 z-30">
      <div className="flex w-full items-center justify-between border-b border-[color-mix(in_oklab,var(--color-icon)_32%,var(--color-border))] bg-transparent px-4 py-6 shadow-[0_10px_28px_rgba(2,8,6,0.24)] backdrop-saturate-150 backdrop-blur-lg supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--color-bg)_26%,transparent)] md:px-6">
        <a
          href="#hero"
          className="hero-title text-sm font-semibold tracking-wide text-[var(--color-text-strong)] md:text-base"
        >
          Mariano Nehuén Lotero Rolón
        </a>

        <nav aria-label="Secciones principales">
          <ul className="flex items-center gap-2 md:gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-2 py-1 text-xs font-medium text-[var(--color-text)] transition hover:text-[var(--color-text-strong)] md:px-3 md:text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
