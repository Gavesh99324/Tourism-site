import { SectionReveal } from "@/components/section-reveal";

const plans = [
  {
    name: "Flexible Individual Travel",
    price: "Starting from LKR 158,241 PP",
    badge: "Best Selling",
    points: [
      "Private Trip",
      "Fully customised",
      "Private vehicle and driver",
      "Flexibility during travelling",
      "Dedicated Destination Expert",
      "24/7 global care",
      "Account Manager",
    ],
  },
  {
    name: "Small Group Tours",
    price: "Starting from LKR 190,522 PP",
    badge: "20% Off",
    points: [
      "Travelling with small groups of up to 16 people",
      "A fixed tour plan and fixed dates",
      "Shared transport",
      "No flexibility during travelling",
      "Dedicated Destination Expert",
      "24/7 global care",
      "Account Manager",
    ],
  },
  {
    name: "Holiday Getaways",
    price: "Starting from LKR 118,364 PP",
    badge: "30% Off",
    points: [
      "Private Trip",
      "Fixed travel period",
      "Private vehicle and driver",
      "Flexibility during travelling",
      "Discounted prices and offers",
      "Dedicated Destination Expert",
      "24/7 global care",
      "Account Manager",
    ],
  },
];

export function PlansSection() {
  return (
    <SectionReveal className="space-y-6 rounded-[32px] border border-[#e6e9f0] bg-white p-6 md:p-8 lg:p-10">
      <section>
        <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
          3 Vacation Options
        </h2>
        <p className="text-lg text-[#273344] sm:text-xl lg:text-2xl">
          We will provide a selection of 3 different tour types to suit your
          preferences.
        </p>
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`card-shadow rounded-3xl p-6 ${index === 1 ? "bg-[#eafaf1]" : "bg-[#f8fbff]"}`}
            >
              <p className="inline-block rounded-full bg-black px-4 py-1 text-sm font-bold uppercase tracking-wide text-white">
                {plan.badge}
              </p>
              <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                {plan.name}
              </h3>
              <p className="mt-2 text-lg text-[#273344] sm:text-xl">
                {plan.price}
              </p>
              <ul className="mt-5 space-y-2 text-base text-[#2f3948] sm:text-lg">
                {plan.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <button className="mt-6 rounded-full bg-[#15bf61] px-6 py-2 text-lg font-bold text-white">
                Get a Quote
              </button>
            </article>
          ))}
        </div>
      </section>
    </SectionReveal>
  );
}
