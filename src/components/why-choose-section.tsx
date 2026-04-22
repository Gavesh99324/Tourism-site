import Image from "next/image";

import { SectionReveal } from "@/components/section-reveal";

export function WhyChooseSection() {
  return (
    <SectionReveal
      id="about"
      className="overflow-hidden rounded-[32px] bg-white p-6 md:p-10"
    >
      <section>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Why Choose Olanka ?
            </h2>
            <p className="text-2xl leading-relaxed text-[#273344]">
              One of the best ways to travel is by relying on local expertise.
              Only a Rome local knows the best gelato spots, or a Bangkok local
              the best street food markets. At Olanka Travels, we&apos;re here
              to help you experience your dream destination by connecting you
              with our local destination experts.
            </p>
            <button className="rounded-full bg-black px-8 py-3 text-2xl font-semibold text-white">
              Our Story
            </button>
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-[24px] md:h-[580px]">
            <Image
              src="https://www.olankatravels.com/assets/home/hero-ind.png"
              alt="Olanka team"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
