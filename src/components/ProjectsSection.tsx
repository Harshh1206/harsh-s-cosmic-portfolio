import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, ShieldCheck, Brain } from 'lucide-react';
import FadeInSection from './FadeInSection';

const projects = [
  {
    title: 'Fraud Credit Card Detection Model',
    impact: '98% accuracy on imbalanced dataset',
    description: 'Built an ML pipeline to detect fraudulent transactions using advanced sampling techniques on highly imbalanced financial data.',
    skills: ['Python', 'Logistic Regression', 'SMOTE'],
    icon: ShieldCheck,
    gradient: 'from-neon-blue to-primary',
    link: null,
    github: null,
  },
  {
    title: 'Policy Compliance Report Generator',
    impact: 'AI-based compliance analysis system',
    description: 'Designed an intelligent system that analyzes policy documents and generates compliance reports using LLMs and vector databases.',
    skills: ['LangChain', 'ChromaDB', 'Groq API', 'Llama 3.3'],
    icon: Brain,
    gradient: 'from-neon-purple to-secondary',
    link: 'https://policy-compliance-analyzer.streamlit.app/',
    github: null,
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <FadeInSection key={project.title} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glass-card h-full flex flex-col gradient-border group overflow-hidden relative"
            >
              {/* Top gradient accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Icon + Title row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10 shrink-0`}>
                    <project.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Sparkles size={12} className="text-neon-blue" />
                      <span className="text-xs font-mono text-neon-blue">{project.impact}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((s) => (
                    <motion.span
                      key={s}
                      whileHover={{ scale: 1.1 }}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted/80 text-muted-foreground font-mono border border-glass-border hover:border-neon-blue/50 hover:text-foreground transition-all cursor-default"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="mt-auto flex items-center gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-primary-foreground font-medium hover:opacity-90 transition-opacity neon-glow"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {!project.link && !project.github && (
                    <span className="text-xs text-muted-foreground font-mono italic">Private Project</span>
                  )}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-gradient-to-br ${project.gradient} pointer-events-none`} />
            </motion.div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
