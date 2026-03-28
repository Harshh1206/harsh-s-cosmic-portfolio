import { motion } from 'framer-motion';
import FadeInSection from './FadeInSection';

const skillGroups = [
  {
    title: 'Backend',
    skills: [
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'REST APIs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    ],
    color: 'from-neon-blue to-primary',
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'LangChain', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'RAG', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    ],
    color: 'from-neon-purple to-secondary',
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'ChromaDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ],
    color: 'from-neon-blue to-neon-purple',
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Streamlit', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg' },
    ],
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
              <h3 className={`font-mono text-sm font-semibold mb-5 bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                {group.title}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 4, scale: 1.02 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 h-6 object-contain"
                      loading="lazy"
                    />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
