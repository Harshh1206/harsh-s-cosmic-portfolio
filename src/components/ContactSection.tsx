import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import FadeInSection from './FadeInSection';

const contactInfo = [
  { icon: Mail, label: 'harshpvt1206@gmail.com', href: 'mailto:harshpvt1206@gmail.com' },
  { icon: Phone, label: '+91 9552941963', href: 'tel:+919552941963' },
  { icon: MapPin, label: 'Pune, India', href: null },
  { icon: Github, label: 'Harshh1206', href: 'https://github.com/Harshh1206' },
  { icon: Linkedin, label: 'harsh-konde', href: 'https://www.linkedin.com/in/harsh-konde-397a71295' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="section-container">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mb-12" />
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {/* Info */}
        <FadeInSection delay={0.1}>
          <div className="space-y-5">
            {contactInfo.map(({ icon: Icon, label, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-muted">
                  <Icon size={18} className="text-neon-blue" />
                </div>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">{label}</span>
                )}
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Form */}
        <FadeInSection delay={0.2}>
          <form
            className="glass-card p-6 space-y-4 gradient-border"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:harshpvt1206@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-glass-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-neon-blue"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-glass-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-neon-blue"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-glass-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-neon-blue resize-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity neon-glow flex items-center justify-center gap-2"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </FadeInSection>
      </div>
    </section>
  );
}
