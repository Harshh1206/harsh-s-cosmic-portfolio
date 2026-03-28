import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import FadeInSection from './FadeInSection';

const projects = [
  {
    title: 'Fraud Credit Card Detection Model',
    impact: '98% accuracy on imbalanced dataset',
    skills: ['Python', 'Logistic Regression', 'SMOTE'],
    link: null,
  },
  {
    title: 'Policy Compliance Report Generator',
    impact: 'AI-based compliance analysis system',
    skills: ['LangChain', 'ChromaDB', 'Groq API', 'Llama 3.3'],
    link: 'https://policy-compliance-analyzer.streamlit.app/',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-container">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mb-12" />
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <FadeInSection key={project.title} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -6 }}
              className="glass-card p-6 sm:p-8 h-full flex flex-col gradient-border group"
            >
              <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{project.impact}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neon-blue hover:opacity-80 transition-opacity"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
