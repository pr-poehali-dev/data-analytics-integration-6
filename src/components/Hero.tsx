import { GL } from "./gl";
import { Button } from "./ui/button";
import { useState } from "react";
import { Header } from "./Header";
import Icon from "./ui/icon";

export function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col h-svh justify-between relative z-10">
      <GL hovering={hovering} />
      <Header />

      <div className="pb-16 mt-auto text-center relative">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Самые вредные <br />
          <i className="font-light">достижения</i> человечества
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[440px] mx-auto">
          Какие же достижения человечества относятся к вредным?
        </p>

        <a className="inline-block mt-14" href="#start">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <Icon name="ArrowDown" size={20} />
          </Button>
        </a>
      </div>
    </div>
  );
}