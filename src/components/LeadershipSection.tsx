import FadeInSection from './FadeInSection';
import { TreePine, Users, Leaf, Award } from 'lucide-react';

const roles = [
  {
    icon: Users,
    title: 'Team Leader',
    org: 'Foregers Foundation',
    points: [
      'Led a team in executing tree plantation and maintenance drives, ensuring efficient planning and teamwork',
      'Assigned roles, guided members during activities, and maintained accountability for task completion',
      'Took initiative in problem-solving during drives and ensured consistency in maintaining planted saplings',
      'Developed leadership, decision-making, and team management skills through hands-on experience',
    ],
  },
  {
    icon: TreePine,
    title: 'Team Coordinator',
    org: 'Foregers Foundation',
    points: [
      'Coordinated plantation drives by organizing schedules, managing team communication, and ensuring smooth execution',
      'Acted as a bridge between team members and leadership, helping in task delegation and resolving on-ground issues',
      'Maintained records of planted saplings and monitored their growth and maintenance',
      'Strengthened organizational and communication skills while contributing to environmental initiatives',
    ],
  },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="section-container">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Leadership <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mb-12" />
      </FadeInSection>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
        {roles.map((role, i) => {
          const Icon = role.icon;
          return (
            <FadeInSection key={role.title} delay={i * 0.15}>
              <div className="glass-card p-6 gradient-border h-full group hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.15)] transition-shadow duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-muted group-hover:bg-neon-blue/10 transition-colors">
                    <Icon size={22} className="text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{role.title}</h3>
                    <p className="text-sm text-neon-blue font-mono flex items-center gap-1.5">
                      <Leaf size={13} /> {role.org}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  {role.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-1.5 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          );
        })}
      </div>

      <FadeInSection delay={0.3}>
        <div className="mt-8 flex justify-center">
          <a
            href="/Harsh_Konde_Recommendation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-card text-sm font-medium text-foreground hover:text-neon-blue transition-colors gradient-border"
          >
            <Award size={16} />
            View Recommendation Letter
          </a>
        </div>
      </FadeInSection>
    </section>
  );
}
