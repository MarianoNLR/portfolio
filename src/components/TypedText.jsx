import { useEffect, useState } from 'react'

function TypedText({ text, startDelay = 0, speed = 70 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let interval
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCount((current) => {
          if (current >= text.length) {
            clearInterval(interval)
            return current
          }
          return current + 1
        })
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, startDelay, speed])

  return (
    <>
      <span className="sr-only">{text}</span>
      {/* El texto completo siempre está en el layout (lo que falta escribir va invisible),
          así los saltos de línea quedan donde estarán al final y las palabras no se mueven */}
      <span aria-hidden="true">
        <span className="typed-text">{text.slice(0, count)}</span>
        <span className="invisible">{text.slice(count)}</span>
      </span>
    </>
  )
}

export default TypedText
