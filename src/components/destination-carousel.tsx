"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { SectionReveal } from "@/components/section-reveal";

const destinations = [
  {
    title: "Maldives",
    tours: "60+ Tours",
    experts: "30+ Destination Experts",
    image:
      "https://www.olankatravels.com/assets/home/destinations/maldives-min.jpg",
  },
  {
    title: "Vietnam",
    tours: "50+ Tours",
    experts: "28+ Destination Experts",
    image:
      "https://www.olankatravels.com/assets/home/destinations/vietnam-min.jpg",
  },
  {
    title: "Indonesia",
    tours: "45+ Tours",
    experts: "25+ Destination Experts",
    image:
      "https://www.olankatravels.com/assets/home/destinations/Indonesia-min.jpg",
  },
];

export function DestinationCarousel() {
  const cardsRef = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % destinations.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    cardsRef.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  }, [activeIndex]);

  const handleMove = (direction: 1 | -1) => {
    setActiveIndex(
      (current) =>
        (current + direction + destinations.length) % destinations.length,
    );
  };

  return (
    <SectionReveal className="space-y-6 rounded-[32px] border border-[#e6e9f0] bg-white p-6 md:p-8 lg:p-10">
      <section>
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-6xl">
            Trending Destinations
          </h2>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleMove(-1)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#d7dbe4] bg-white px-3 py-2 text-base sm:px-4 sm:py-3 sm:text-xl"
              aria-label="Previous destination"
            >
              ←
            </button>
            <button className="rounded-full bg-black px-5 py-2 text-base font-semibold text-white sm:px-8 sm:py-3 sm:text-2xl">
              Explore More
            </button>
            <button
              onClick={() => handleMove(1)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#d7dbe4] bg-white px-3 py-2 text-base sm:px-4 sm:py-3 sm:text-xl"
              aria-label="Next destination"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-5 overflow-hidden">
          <div className="carousel-scrollbar-hide flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3">
            {destinations.map((destination, index) => (
              <article
                key={destination.title}
                ref={(node: HTMLElement | null) => {
                  cardsRef.current[index] = node;
                }}
                className={`group relative h-[460px] min-w-[84%] snap-start overflow-hidden rounded-[22px] transition duration-500 sm:h-[520px] md:min-w-[48%] xl:min-w-[32%] ${activeIndex === index ? "scale-[1] opacity-100" : "scale-[0.97] opacity-90"}`}
              >
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  sizes="(max-width: 768px) 84vw, (max-width: 1280px) 48vw, 32vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 text-white">
                  <div className="absolute bottom-6">
                    <h3 className="text-3xl font-bold sm:text-4xl">
                      {destination.title}
                    </h3>
                    <p className="mt-3 text-xl font-semibold sm:mt-4 sm:text-2xl">
                      {destination.tours}
                    </p>
                    <p className="mt-1 text-xl font-semibold sm:text-2xl">
                      {destination.experts}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {destinations.map((destination, index) => (
            <button
              key={destination.title}
              onClick={() => setActiveIndex(index)}
              className="grid h-8 w-8 place-items-center"
              aria-label={`Go to ${destination.title}`}
            >
              <span
                className={`h-2.5 rounded-full transition-all ${activeIndex === index ? "w-10 bg-[#15bf61]" : "w-2.5 bg-[#cdd4df]"}`}
              />
            </button>
          ))}
        </div>
      </section>
    </SectionReveal>
  );
}
