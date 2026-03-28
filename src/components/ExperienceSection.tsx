import FadeInSection from './FadeInSection';
import { Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-container">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mb-12" />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <div className="glass-card p-6 sm:p-8 max-w-3xl gradient-border">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-muted flex-shrink-0">
              <Briefcase size={20} className="text-neon-blue" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Backend Developer</h3>
              <p className="text-sm text-neon-blue font-mono mb-3">Miccupa</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-1.5 flex-shrink-0" />
                  Designed and developed RESTful APIs for scalable backend systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-1.5 flex-shrink-0" />
                  Debugged and optimized backend performance for production applications
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-1.5 flex-shrink-0" />
                  Collaborated on architecture decisions and code reviews
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
