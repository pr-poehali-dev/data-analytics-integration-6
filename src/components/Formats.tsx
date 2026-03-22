import { useState } from "react";
import Icon from "./ui/icon";

const categories = [
  {
    emoji: "🏭",
    title: "Промышленность и экология",
    items: ["Пластик", "Асбест", "Фреоны", "Ископаемое топливо"],
    description:
      "Промышленная революция подарила нам комфорт, но оставила планете долг. Пластик разлагается сотни лет, асбест вызывает рак лёгких, фреоны разрушили озоновый слой, а сжигание ископаемого топлива разогревает климат быстрее, чем мы успеваем адаптироваться.",
  },
  {
    emoji: "💣",
    title: "Оружие и насилие",
    items: ["Ядерное оружие", "Кассетные бомбы", "Химическое оружие"],
    description:
      "Человечество научилось уничтожать само себя с хирургической точностью. Ядерное оружие способно стереть цивилизацию за часы. Кассетные бомбы убивают мирных жителей спустя годы после войны. Химическое оружие запрещено, но продолжает применяться.",
  },
  {
    emoji: "💊",
    title: "Медицина и социум",
    items: ["Опиоиды", "Табак", "Тетраэтилсвинец в бензине", "Пестициды ДДТ"],
    description:
      "Некоторые «достижения» медицины и химии обернулись катастрофой. Опиоидный кризис унёс миллионы жизней. Табачная индустрия десятилетиями скрывала вред курения. Свинец в бензине снизил IQ целых поколений. ДДТ уничтожил экосистемы по всему миру.",
  },
  {
    emoji: "📱",
    title: "Цифровая эпоха",
    items: ["Алгоритмические соцсети", "Трекинг данных", "«Быстрая мода»"],
    description:
      "Цифровая революция породила новые формы зависимости и контроля. Алгоритмы соцсетей намеренно вызывают тревогу и поляризацию. Трекинг данных превратил частную жизнь в товар. «Быстрая мода» производит 10% мировых выбросов CO₂.",
  },
];

export function Formats() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="start" className="relative z-10 py-24 md:py-36 container">
      <p className="font-mono text-xs uppercase text-foreground/40 tracking-widest mb-6">
        Категории
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentient mb-16 max-w-xl">
        Форматы <i className="font-light">выступлений</i>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((cat, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={cat.title}
              className="border border-border rounded-full transition-colors duration-300 cursor-pointer hover:bg-white/5"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-3xl mb-5">{cat.emoji}</div>
                    <h3 className={`font-sentient text-xl md:text-2xl mb-4 transition-colors duration-300 ${isOpen ? "text-primary" : ""}`}>
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
                  <div className={`mt-1 shrink-0 text-foreground/40 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}>
                    <Icon name="ChevronDown" size={20} />
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-48 opacity-100 mt-6" : "max-h-0 opacity-0"}`}
                >
                  <p className="font-mono text-sm text-foreground/60 leading-relaxed border-t border-border pt-6">
                    {cat.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}