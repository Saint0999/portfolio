export default function Hero() {
  return (
    <section className="pb-10 pt-16 sm:pb-10 sm:pt-20">
      <p
        className="hero-rise text-xs font-medium uppercase tracking-[0.2em] text-muted"
        style={{ "--hero-delay": "0ms" } as React.CSSProperties}
      >
        Engineering Student &middot; Developer
      </p>
      <h1
        className="hero-rise mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-6xl sm:leading-tight"
        style={{ "--hero-delay": "90ms" } as React.CSSProperties}
      >
        Abhinav
      </h1>
      <p
        className="hero-rise mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        style={{ "--hero-delay": "180ms" } as React.CSSProperties}
      >
        I am an engineering student and developer focused on modern web
        applications, Next.js, TypeScript, and React, with a goal of
        building in the Web3 space. Beyond software, I stay active in the
        gym and play football.
      </p>
    </section>
  );
}
