import FadeInSection from './FadeInSection';

export default function AboutSection() {
  return (
    <section id="about" className="section-container">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mb-8" />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <div className="glass-card p-6 sm:p-8 max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm a <span className="text-foreground font-medium">Backend Developer</span> based in Pune, India, specializing in
            building robust, scalable systems using <span className="text-foreground font-medium">Java and Spring Boot</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Beyond traditional backend development, I'm deeply interested in <span className="text-foreground font-medium">AI/ML</span> and
            building intelligent applications. I work with tools like <span className="text-foreground font-medium">LangChain, RAG pipelines, and vector databases</span> to
            create practical AI-powered solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My goal is to bridge the gap between clean backend architecture and cutting-edge AI — delivering systems
            that are both performant and intelligent.
          </p>
        </div>
      </FadeInSection>
    </section>
  );
}
