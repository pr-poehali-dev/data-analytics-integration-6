const categories = [
  {
    emoji: "🏭",
    title: "Промышленность и экология",
    items: ["Пластик", "Асбест", "Фреоны", "Ископаемое топливо"],
  },
  {
    emoji: "💣",
    title: "Оружие и насилие",
    items: ["Ядерное оружие", "Кассетные бомбы", "Химическое оружие"],
  },
  {
    emoji: "💊",
    title: "Медицина и социум",
    items: ["Опиоиды", "Табак", "Тетраэтилсвинец в бензине", "Пестициды ДДТ"],
  },
  {
    emoji: "📱",
    title: "Цифровая эпоха",
    items: ["Алгоритмические соцсети", "Трекинг данных", "«Быстрая мода»"],
  },
];

export function Formats() {
  return (
    <section id="start" className="relative z-10 py-24 md:py-36 container">
      <p className="font-mono text-xs uppercase text-foreground/40 tracking-widest mb-6">
        Категории
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentient mb-16 max-w-xl">
        Форматы <i className="font-light">выступлений</i>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-border">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="group p-8 md:p-10 border border-border hover:bg-white/5 transition-colors duration-300 cursor-default"
          >
            <div className="text-3xl mb-5">{cat.emoji}</div>
            <h3 className="font-sentient text-xl md:text-2xl mb-4 group-hover:text-primary transition-colors duration-300">
              {cat.title}
            </h3>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-sm text-foreground/50 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-foreground/30 inline-block" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
