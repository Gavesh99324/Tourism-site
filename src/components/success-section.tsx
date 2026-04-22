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
      className="space-y-6 rounded-[32px] border border-[#e6e9f0] bg-white p-6 md:p-10"
    >
      <section>
        <h2 className="text-5xl font-bold md:text-6xl">Our Success</h2>
        <p className="max-w-5xl text-2xl text-[#273344]">
          We are pleased to have helped over ten thousand clients since 2010,
          and our destination experts love seeing happy travellers!
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="card-shadow rounded-2xl bg-[#f8fbff] p-5"
            >
              <p className="text-4xl font-black">{stat.value}</p>
              <p className="mt-2 text-lg text-[#445068]">{stat.label}</p>
            </article>
          ))}
        </div>

        <h3 className="pt-4 text-4xl font-bold md:text-5xl">People Say</h3>
        <p className="text-2xl text-[#273344]">
          Check out what our clients loved about their vacations. Collected via
          their online reviews and success stories.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-[#e7eaf0] p-5">
            <p className="text-2xl font-bold">Trip Advisor</p>
            <p className="mt-2 text-xl text-[#2f3948]">1306 Reviews</p>
          </article>
          <article className="rounded-2xl border border-[#e7eaf0] p-5">
            <p className="text-2xl font-bold">Google</p>
            <p className="mt-2 text-xl text-[#2f3948]">1068 Reviews</p>
          </article>
          <article className="rounded-2xl border border-[#e7eaf0] p-5">
            <p className="text-2xl font-bold">Facebook</p>
            <p className="mt-2 text-xl text-[#2f3948]">280 Reviews</p>
          </article>
        </div>
      </section>
    </SectionReveal>
  );
}
