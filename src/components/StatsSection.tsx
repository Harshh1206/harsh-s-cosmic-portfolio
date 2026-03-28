import FadeInSection from './FadeInSection';

export default function StatsSection() {
  return (
    <section id="stats" className="section-container">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          GitHub & <span className="gradient-text">LeetCode</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mb-12" />
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FadeInSection delay={0.1}>
          <div className="glass-card p-6 gradient-border">
            <h3 className="font-mono text-sm text-neon-blue mb-4">GitHub</h3>
            <div className="space-y-4">
              <img
                src="https://github-readme-stats.vercel.app/api?username=Harshh1206&show_icons=true&theme=transparent&hide_border=true&title_color=4f7df9&icon_color=8b5cf6&text_color=94a3b8&bg_color=00000000"
                alt="GitHub Stats"
                className="w-full rounded-lg"
                loading="lazy"
              />
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=Harshh1206&theme=transparent&hide_border=true&ring=4f7df9&fire=8b5cf6&currStreakLabel=94a3b8&sideLabels=94a3b8&dates=64748b&stroke=1e293b&background=00000000"
                alt="GitHub Streak"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="glass-card p-6 gradient-border">
            <h3 className="font-mono text-sm text-neon-blue mb-4">LeetCode</h3>
            <div className="space-y-4">
              <img
                src="https://leetcard.jacoblin.cool/harrshh1206?theme=dark&font=JetBrains%20Mono&ext=heatmap&border=0&radius=12"
                alt="LeetCode Stats"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
