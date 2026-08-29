export default function Hero() {
  return (
    <section className="flex min-h-[88svh] flex-col items-center justify-center py-24 text-center">
      <p
        className="hero-rise font-sans text-xs font-medium uppercase tracking-[0.28em] text-muted sm:text-sm sm:tracking-[0.34em]"
        style={{ "--hero-delay": "0ms" } as React.CSSProperties}
      >
        Engineering student &middot; Developer
      </p>

      <h1
        className="hero-rise mt-7 font-display text-6xl leading-[0.95] tracking-tight text-signal sm:text-8xl"
        style={{ "--hero-delay": "110ms" } as React.CSSProperties}
      >
        abhinav.
      </h1>

      <p
        className="hero-rise mt-8 max-w-xl font-display text-xl leading-relaxed text-paper sm:text-2xl sm:leading-relaxed"
        style={{ "--hero-delay": "220ms" } as React.CSSProperties}
      >
        I build for the web. Modern applications in Next.js, TypeScript, and
        React, with my sights set on Web3. I care about interfaces that feel
        considered rather than assembled. Away from the editor, I&apos;m in the
        gym or on a football pitch.
      </p>
    </section>
  );
}
