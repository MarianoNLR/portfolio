import { useState } from 'react'

function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setStatus('error')
      setFeedback('Hubo un error con el servicio de envío. Contactame por otro medio mientras soluciono esto.')
      return
    }

    setStatus('loading')
    setFeedback('Enviando mensaje...')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: formValues.name,
          name: formValues.name,
          email: formValues.email,
          message: formValues.message,
          subject: 'Nuevo mensaje desde portfolio',
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setFeedback('Mensaje enviado correctamente. Te respondere pronto.')
        setFormValues({ name: '', email: '', message: '' })
        return
      }

      setStatus('error')
      setFeedback('No se pudo enviar el mensaje. Intenta nuevamente en unos minutos.')
    } catch {
      setStatus('error')
      setFeedback('No se pudo conectar con el servicio de envio. Intenta nuevamente.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 w-full max-w-2xl rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg-elevated)_68%,transparent)] p-5 md:p-6"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-[var(--color-text)]">
          Nombre
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
            className="rounded-lg border border-[var(--color-border)] bg-transparent px-3 py-2 text-[var(--color-text-strong)] outline-none transition focus:border-[var(--color-icon)]"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-[var(--color-text)]">
          Email
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
            className="rounded-lg border border-[var(--color-border)] bg-transparent px-3 py-2 text-[var(--color-text-strong)] outline-none transition focus:border-[var(--color-icon)]"
          />
        </label>
      </div>

      <label className="mt-4 flex flex-col gap-2 text-sm text-[var(--color-text)]">
        Mensaje
        <textarea
          name="message"
          value={formValues.message}
          onChange={handleChange}
          required
          rows={5}
          className="rounded-lg border border-[var(--color-border)] bg-transparent px-3 py-2 text-[var(--color-text-strong)] outline-none transition focus:border-[var(--color-icon)]"
        />
      </label>

      <div className="mt-5 flex flex-wrap items-center gap-3 justify-center">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-lg w-full border border-[color-mix(in_oklab,var(--color-icon)_60%,var(--color-border))] bg-transparent px-6 py-2.5 text-sm font-semibold text-[var(--color-text-strong)] transition hover:border-[var(--color-icon)] hover:bg-[color-mix(in_oklab,var(--color-icon)_16%,transparent)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
        </button>

        {feedback ? (
          <p
            className={`text-sm ${
              status === 'success' ? 'text-[var(--color-icon)]' : 'text-[var(--color-text-muted)]'
            }`}
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  )
}

export default ContactForm
