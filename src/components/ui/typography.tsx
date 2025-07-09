export function TypographyH1({ text }: { text: string }) {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      {text}
    </h1>
  )
}

export function TypographyH2({ text }: { text: string }) {
  return (
    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-balance">
      {text}
    </h2>
  )
}

export function TypographyH3({ text }: { text: string }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-balance">
      {text}
    </h3>
  )
}

export function TypographyH4({ text }: { text: string }) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-balance">
      {text}
    </h4>
  )
}

export function TypographyH5({ text }: { text: string }) {
  return (
    <h5 className="scroll-m-20 text-lg font-semibold tracking-tight text-balance">
      {text}
    </h5>
  )
}

export function TypographyH6({ text }: { text: string }) {
  return (
    <h6 className="scroll-m-20 text-base font-semibold tracking-tight text-balance">
      {text}
    </h6>
  )
}

export function TypographyP({ text }: { text: string }) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {text}
    </p>
  )
}

export function TypographyBlockquote({ text }: { text: string }) {
  return (
    <blockquote className="mt-4 border-l-2 pl-6 italic">
      {text}
    </blockquote>
  )
}

