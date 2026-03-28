import { Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-glass-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Built with <Heart size={14} className="text-neon-purple" /> by Harsh Konde
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Harshh1206" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/harsh-konde-397a71295" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
