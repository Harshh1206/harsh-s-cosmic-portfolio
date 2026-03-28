import { Suspense, lazy } from 'react';
import FadeInSection from './FadeInSection';

const ParticleBackground = lazy(() => import('./ParticleBackground'));

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      <div className="section-container text-center relative z-10">
        <FadeInSection>
          <p className="font-mono text-sm text-neon-blue mb-4 tracking-widest uppercase">
            Backend Developer · AI/ML Enthusiast
          </p>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text neon-text">Harsh Konde</span>
          </h1>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-10">
            Building scalable backend systems and intelligent AI-powered applications with Java, Spring Boot & modern ML tools.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity neon-glow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-glass-border text-foreground font-medium hover:bg-muted/50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </FadeInSection>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
