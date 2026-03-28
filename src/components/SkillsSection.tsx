import { motion } from 'framer-motion';
import FadeInSection from './FadeInSection';

const skillGroups = [
  {
    title: 'Backend',
    skills: ['Java', 'Spring Boot', 'REST APIs'],
    color: 'from-neon-blue to-primary',
  },
  {
    title: 'AI / ML',
    skills: ['Python', 'LangChain', 'RAG'],
    color: 'from-neon-purple to-secondary',
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'SQL', 'ChromaDB'],
    color: 'from-neon-blue to-neon-purple',
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker', 'Streamlit'],
    color: 'from-primary to-neon-purple',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-container">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mb-12" />
      </FadeInSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, i) => (
          <FadeInSection key={group.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-6 h-full gradient-border"
            >
              <h3 className={`font-mono text-sm font-semibold mb-4 bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                {group.title}
              </h3>
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse-glow" />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
