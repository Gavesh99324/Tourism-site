import Image from "next/image";

import { SectionReveal } from "@/components/section-reveal";

export function HeroSection() {
  return (
    <SectionReveal className="overflow-hidden rounded-[32px] bg-[#dce4f2]">
      <section>
        <div className="grid items-center gap-6 p-5 md:grid-cols-2 md:p-8 lg:p-10">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              Start Your Holiday Planning Here!
            </h1>
            <h2 className="max-w-xl text-2xl font-medium leading-snug sm:text-3xl lg:text-4xl">
              Connect with a Local{" "}
              <span className="font-extrabold">Destination Expert</span> Online
            </h2>
            <p className="max-w-xl text-lg text-[#2f3948] sm:text-xl lg:text-2xl">
              Instantly connect with one of our destination experts from your
              preferred destinations! Our services are available 24/7
            </p>
            <button className="rounded-full bg-[#05090e] px-6 py-3 text-lg font-semibold text-white transition hover:bg-[#111d2e] sm:text-xl">
              Watch Intro ▶
            </button>
          </div>
          <div className="relative h-[320px] overflow-hidden rounded-[24px] md:h-[460px] lg:h-[560px]">
            <Image
              src="https://www.olankatravels.com/assets/home/hero.png"
              alt="Hero travel expert"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
