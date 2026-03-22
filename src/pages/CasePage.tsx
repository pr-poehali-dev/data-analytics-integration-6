import { useParams, Link } from "react-router-dom";
import { cases } from "@/data/cases";
import Icon from "@/components/ui/icon";

export default function CasePage() {
  const { id } = useParams();
  const item = cases.find((c) => c.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-foreground/50 font-mono">
        Кейс не найден
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" style={{ color: '#0a0a0a' }}>
      <div className="container py-12 md:py-20 max-w-2xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-foreground/50 hover:text-foreground transition-colors duration-150 mb-12"
        >
          <Icon name="ArrowLeft" size={16} />
          Назад
        </Link>

        <p className="font-mono text-xs uppercase tracking-widest text-foreground/40 mb-4">
          {item.category}
        </p>

        <div className="text-5xl mb-6">{item.emoji}</div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sentient mb-4">
          {item.title}
        </h1>

        <p className="font-sentient italic text-xl text-foreground/60 mb-2">
          {item.subtitle}
        </p>

        <p className="font-mono text-xs text-primary mb-12">{item.year}</p>

        <div className="w-12 h-px bg-border mb-12" />

        <div className="space-y-6">
          {item.body.map((paragraph, i) => (
            <p key={i} className="font-mono text-sm text-foreground/70 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}