import ContactForm from './ContactForm.jsx'
import { Download } from 'lucide-react'

function Contact() {
  const cvUrl = `${import.meta.env.BASE_URL}Mariano_Nehu%C3%A9n_Lotero_Rol%C3%B3n_CV.pdf`

  return (
    <section
      id="contact"
      className="scroll-mt-24 flex min-h-[100dvh] flex-col justify-center bg-transparent p-6 py-12 md:p-8"
    >
      <div className="mb-8 text-center md:mb-10">
        <h2 className="hero-title text-4xl font-bold tracking-tight text-[var(--color-text-strong)] md:text-5xl">
          Contacto
        </h2>
      </div>

        <p className="mx-auto w-full text-center leading-relaxed text-[var(--color-text)]">
            Te gustaría que trabajemos juntos? Contáctame y conversemos.
        </p>
        <p className="mt-4 text-center text-sm text-[var(--color-text-muted)] md:text-base">
            También podes escribirme directamente a&nbsp;
            <a
            href="mailto:marianonehuenlr@gmail.com"
            className="font-semibold text-[var(--color-text-strong)] underline decoration-[color:var(--color-icon)]/70 underline-offset-4 transition hover:text-[var(--color-icon)]"
            >
            marianonehuenlr@gmail.com
            </a>
        </p>

      <ContactForm />

      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        {/* <a
          href="mailto:marianonehuenlr@gmail.com"
          className="rounded-xl bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-accent-foreground)] transition hover:bg-[var(--color-accent-hover)]"
        >
          Correo Electrónico
        </a> */}
        <a
          href="https://github.com/MarianoNLR"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-[var(--color-border)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--color-text-strong)] transition hover:border-[var(--color-icon)] hover:text-[var(--color-icon)]"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mariano-lotero-rolon/"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-[var(--color-border)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--color-text-strong)] transition hover:border-[var(--color-icon)] hover:text-[var(--color-icon)]"
        >
          LinkedIn
        </a>
        <a
          href={cvUrl}
          download="CV-Mariano-Lotero-Rolon.pdf"
          className="flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--color-text-strong)] transition hover:border-[var(--color-icon)] hover:text-[var(--color-icon)]"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Descargar CV
        </a>
      </div>
    </section>
  )
}

export default Contact
