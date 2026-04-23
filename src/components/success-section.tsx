import { SectionReveal } from "@/components/section-reveal";

const stats = [
  { value: "100+", label: "Destination Experts" },
  { value: "10+", label: "Destinations" },
  { value: "200+", label: "Different tours" },
  { value: "10K+", label: "Trusted customers" },
];

export function SuccessSection() {
  return (
    <SectionReveal
      id="success"
      className="space-y-6 rounded-[32px] border border-[#e6e9f0] bg-white p-6 md:p-8 lg:p-10"
    >
      <section>
        <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
          Our Success
        </h2>
        <p className="max-w-5xl text-lg text-[#273344] sm:text-xl lg:text-2xl">
          We are pleased to have helped over ten thousand clients since 2010,
          and our destination experts love seeing happy travellers!
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="card-shadow rounded-2xl bg-[#f8fbff] p-5"
            >
              <p className="text-3xl font-black sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-base text-[#445068] sm:text-lg">
                {stat.label}
              </p>
            </article>
          ))}
        </div>

        <h3 className="pt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
          People Say
        </h3>
        <p className="text-lg text-[#273344] sm:text-xl lg:text-2xl">
          Check out what our clients loved about their vacations. Collected via
          their online reviews and success stories.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-[#e7eaf0] p-5">
            <p className="text-xl font-bold sm:text-2xl">Trip Advisor</p>
            <p className="mt-2 text-lg text-[#2f3948] sm:text-xl">
              1306 Reviews
            </p>
          </article>
          <article className="rounded-2xl border border-[#e7eaf0] p-5">
            <p className="text-xl font-bold sm:text-2xl">Google</p>
            <p className="mt-2 text-lg text-[#2f3948] sm:text-xl">
              1068 Reviews
            </p>
          </article>
          <article className="rounded-2xl border border-[#e7eaf0] p-5">
            <p className="text-xl font-bold sm:text-2xl">Facebook</p>
            <p className="mt-2 text-lg text-[#2f3948] sm:text-xl">
              280 Reviews
            </p>
          </article>
        </div>
      </section>
    </SectionReveal>
  );
}
