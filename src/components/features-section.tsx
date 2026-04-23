"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { SectionReveal } from "@/components/section-reveal";

const features = [
  {
    icon: "https://www.olankatravels.com/assets/about/airplane.svg",
    title: "100% Tailor-Made Travel Plan",
    desc: "Our dedicated destination experts will create customised private or group tours to match your needs, and offer unlimited changes to your travel plans.",
  },
  {
    icon: "https://www.olankatravels.com/assets/about/5.svg",
    title: "One Stop Shop for All Your Holiday Needs",
    desc: "Our consultants are happy to help you with your tours, accommodation, activities, flight tickets, and Visas, no matter where your trip takes you.",
  },
  {
    icon: "https://www.olankatravels.com/assets/about/2.svg",
    title: "24/7 Prompt Customer Support",
    desc: "We will provide customer support anytime - day or night, for any issue. We aim to provide swift solutions to your needs.",
  },
  {
    icon: "https://www.olankatravels.com/assets/about/4.svg",
    title: "Multiple Trip Options To Select From",
    desc: "We will provide a selection of 3 different tour types to suit your preferences. You can select from a fully tailor-made private tour, fixed offers, or small group travels.",
  },
];

export function FeaturesSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleFeatures = useMemo(
    () => (showAll ? features : features.slice(0, 2)),
    [showAll],
  );

  return (
    <SectionReveal className="rounded-[32px] bg-[#dce4f2] p-6 md:p-8 lg:p-10">
      <section>
        <div className="space-y-12">
          {visibleFeatures.map((item) => (
            <article
              key={item.title}
              className="grid gap-4 md:grid-cols-[72px_1fr] lg:grid-cols-[90px_1fr]"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white sm:h-16 sm:w-16">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={42}
                  height={42}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-[#273344] sm:mt-4 sm:text-xl lg:text-2xl">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            className="rounded-full bg-black px-10 py-3 text-lg font-semibold text-white sm:text-xl lg:text-2xl"
            onClick={() => setShowAll((current) => !current)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </section>
    </SectionReveal>
  );
}
