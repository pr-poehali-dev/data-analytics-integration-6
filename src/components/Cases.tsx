import { Link } from "react-router-dom";
import { cases } from "@/data/cases";
import Icon from "@/components/ui/icon";

export function Cases() {
  return (
    <section id="cases" className="relative z-10 py-24 md:py-36 container">
      <p className="font-mono text-xs uppercase text-foreground/40 tracking-widest mb-6">
        Кейсы
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentient mb-16 max-w-xl">
        Истории <i className="font-light">каждого достижения</i>
      </h2>

      <div className="divide-y divide-border border-t border-border">
        {cases.map((item) => (
          <Link
            key={item.id}
            to={`/cases/${item.id}`}
            className="group flex items-center justify-between gap-6 py-6 md:py-8 hover:bg-white/5 -mx-4 px-4 transition-colors duration-200"
          >
            <div className="flex items-center gap-5">
              <span className="text-2xl">{item.emoji}</span>
              <div>
                <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-1">
                  {item.category} · {item.year}
                </p>
                <h3 className="font-sentient text-xl md:text-2xl group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="font-mono text-sm text-foreground/50 mt-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
            <div className="shrink-0 text-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200">
              <Icon name="ArrowRight" size={20} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}