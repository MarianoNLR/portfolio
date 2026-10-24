import profileImage from '../assets/yo1.jpeg'
import TypedText from './TypedText.jsx'

function HeroSection() {
  const cvUrl = `${import.meta.env.BASE_URL}Mariano_Nehu%C3%A9n_Lotero_Rol%C3%B3n_CV.pdf`

  return (
    <section id="hero" className="scroll-mt-24 flex min-h-[100dvh] items-center py-12">
      <div className="grid w-full max-w-5xl items-center gap-10 md:grid-cols-[1fr_minmax(220px,300px)] md:gap-14">
        <div className="order-2 text-center md:order-1 md:text-left">
          <h1 className="hero-title hero-in max-w-4xl text-balance text-4xl leading-tight font-semibold tracking-tight text-[var(--color-text-strong)] md:text-6xl">
            <span>Hola! <br />Soy </span>
            <span className="hero-name text-[var(--color-icon)]">Mariano Nehuén Lotero Rolón</span>
            <span>.</span>
          </h1>

          <p
            className="hero-role hero-in mt-4 text-xl font-semibold uppercase text-[var(--color-text-strong)] lg:text-3xl"
            style={{ animationDelay: '250ms' }}
          >
            <TypedText text="Desarrollador FullStack" startDelay={600} />
          </p>

          <a
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
            style={{ animationDelay: '450ms' }}
            className="hero-in btn-shine mt-10 inline-flex rounded-lg border border-[color-mix(in_oklab,var(--color-icon)_60%,var(--color-border))] bg-transparent px-8 py-3 text-sm font-semibold text-[var(--color-text-strong)] transition hover:border-[var(--color-icon)] hover:bg-[color-mix(in_oklab,var(--color-icon)_18%,transparent)]"
          >
            Ver CV
          </a>
        </div>

        <div className="hero-pop order-1 mx-auto aspect-square w-full max-w-[280px] md:order-2">
          <div className="avatar-float h-full w-full">
            <div className="avatar-glow" aria-hidden="true" />
            <img
              src={profileImage}
              alt="Foto de Mariano Nehuen Lotero Rolon"
              className="relative h-full w-full rounded-full border border-[var(--color-border-strong)]/70 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
