import Image from "next/image";

import { FloatingActions } from "@/components/floating-actions";
import { FooterSection } from "@/components/footer-section";
import { QuoteSection } from "@/components/quote-section";
import { SectionReveal } from "@/components/section-reveal";
import { SiteHeader } from "@/components/site-header";

const destinations = [
  "Sri Lanka",
  "Maldives",
  "Vietnam",
  "Indonesia",
  "Dubai",
  "Cambodia",
  "Singapore",
  "Malaysia",
];

const tripTypes = [
  "Tailor Made Tours",
  "Fixed Departures",
  "Getaway",
  "Fixed Tours",
];

const tourThemes = [
  "Honeymoon",
  "Wildlife",
  "Golf",
  "Cycling",
  "Adventure",
  "Photography",
];

const tailorMadeTours = [
  {
    destination: "Sri Lanka",
    title: "10 Days - Sri Lanka Dream Route",
    price: "LKR 474,639",
    image:
      "https://www.olankatravels.com/assets/home/destinations/maldives-min.jpg",
  },
  {
    destination: "Sri Lanka",
    title: "A 12-Day Island Adventure Awaits",
    price: "LKR 601,209",
    image:
      "https://www.olankatravels.com/assets/home/destinations/Cambodia-min.jpg",
  },
  {
    destination: "Sri Lanka",
    title: "14 Days - Sri Lanka Intimate Trails",
    price: "LKR 933,456",
    image:
      "https://www.olankatravels.com/assets/home/destinations/Singapore-min.jpg",
  },
  {
    destination: "Vietnam",
    title: "4 Days Hanoi Tour Package",
    price: "LKR 142,392",
    image:
      "https://www.olankatravels.com/assets/home/destinations/vietnam-min.jpg",
  },
  {
    destination: "Malaysia",
    title: "6 Days of Malaysian Magic",
    price: "LKR 199,348",
    image:
      "https://www.olankatravels.com/assets/home/destinations/Indonesia-min.jpg",
  },
  {
    destination: "Dubai",
    title: "6 Days Dubai Dreams",
    price: "LKR 275,291",
    image:
      "https://www.olankatravels.com/assets/home/destinations/Dubai-min.jpg",
  },
];

const getawayTours = [
  {
    destination: "Maldives",
    title: "Triton Prestige Maafushi",
    rating: "4",
    details:
      "Triton Prestige Seaview & Spa is a newly built 4-star beachfront hotel, featuring modern facilities and a range of luxurious accommodations. Our hotel offers deluxe rooms, king suites, honeymoon suites, and super deluxe rooms, ensuring that there is something for every type of traveler.",
    price: "181,945",
    image:
      "https://www.olankatravels.com/assets/home/destinations/maldives-min.jpg",
  },
  {
    destination: "Maldives",
    title: "Local Island Stay",
    rating: "4",
    details:
      "Maafushi Island is one of the most popular local islands in the Maldives, known for its affordability, beautiful beaches, and vibrant atmosphere. It’s an excellent choice for travelers looking to experience the Maldives without the high costs of luxury resorts.",
    price: "197,766",
    image:
      "https://www.olankatravels.com/assets/home/destinations/maldives-min.jpg",
  },
  {
    destination: "Maldives",
    title: "Cinnamon Dhonveli",
    rating: "4",
    details:
      "Nestled in the heart of the Indian Ocean, Cinnamon Dhonveli Maldives offers a tropical paradise where luxury meets nature. Located just a 30-minute speedboat ride from Velana International Airport, this stunning resort boasts crystal-clear turquoise waters, powdery white sands, and an abundance of marine life.",
    price: "262,633",
    image:
      "https://www.olankatravels.com/assets/home/destinations/maldives-min.jpg",
  },
  {
    destination: "Maldives",
    title: "Hard Rock Maldives",
    rating: "5",
    details:
      "A MELODY YOU CAN’T SHAKE, AND A TROPICAL EXPERIENCE YOU WON’T FORGET. Invite the entire crew, and a few plus ones, to Hard Rock Hotel Maldives for an all-inclusive tropical experience.",
    price: "264,216",
    image:
      "https://www.olankatravels.com/assets/home/destinations/maldives-min.jpg",
  },
  {
    destination: "Maldives",
    title: "Grand Park Kodhipparu Maldives",
    rating: "5",
    details:
      "Grand Park Kodhipparu, Maldives, a luxury resort in the North Male Atoll. This island paradise boasts stunning villas, pristine beaches, and breathtaking scenery.",
    price: "363,890",
    image:
      "https://www.olankatravels.com/assets/home/destinations/maldives-min.jpg",
  },
  {
    destination: "Maldives",
    title: "Meeru Island Resort",
    rating: "4",
    details:
      "Discover the original Maldivian culture all around the island including a visit to our state of the art island museum. Create magical moments with your loved ones.",
    price: "379,078",
    image:
      "https://www.olankatravels.com/assets/home/destinations/maldives-min.jpg",
  },
];

const vacationOptions = [
  {
    heading: "Flexible Individual Travel",
    badgeA: "Best Selling",
    badgeB: "",
    price: "158,213",
    description:
      "Perfect for families who want to travel with privacy, need full flexibility, and have specific requirements.",
    bullets: [
      "Private Trip",
      "Fully customised",
      "Private vehicle and driver",
      "Flexibility during travelling",
    ],
    features: [
      { name: "Dedicated Destination Expert", included: true },
      { name: "24/7 global care", included: true },
      { name: "Account Manager", included: true },
    ],
  },
  {
    heading: "Small Group Tours",
    badgeA: "Group Adventure",
    badgeB: "20% Off",
    price: "190,488",
    description:
      "Ideal for those who love travelling in small groups, and have less flexibility during their travels and dates.",
    bullets: [
      "Travelling with small groups of up to 16 people",
      "A fixed tour plan and fixed dates",
      "Shared transport",
      "No flexibility during travelling",
    ],
    features: [
      { name: "Dedicated Destination Expert", included: true },
      { name: "24/7 global care", included: true },
      { name: "Account Manager", included: false },
    ],
  },
  {
    heading: "Holiday Getaways",
    badgeA: "Ultimate Relaxing",
    badgeB: "30% Off",
    price: "118,343",
    description:
      "Ideal for those who have flexible travel schedules, seeking discounted getaways, offering reduced prices and shorter travel distances.",
    bullets: [
      "Private Trip",
      "Fixed travel period",
      "Private vehicle and driver",
      "Flexibility during travelling",
      "Discounted prices and offers",
    ],
    features: [
      { name: "Dedicated Destination Expert", included: false },
      { name: "24/7 global care", included: true },
      { name: "Account Manager", included: false },
    ],
  },
];

export default function ToursPage() {
  return (
    <div className="relative min-h-screen soft-grid text-[#101722]">
      <div className="mx-auto max-w-[1280px] px-3 pb-20 pt-0 md:px-5">
        <SiteHeader />

        <main className="space-y-8 pt-8 md:space-y-12">
          <SectionReveal className="rounded-[24px] bg-[#f6f7fb] p-5 md:p-8">
            <section>
              <p className="text-lg text-[#738093]">Home › Holidays & Tours</p>
              <h1 className="mt-6 text-5xl font-bold md:text-7xl">
                Tours & Destinations
              </h1>
            </section>
          </SectionReveal>

          <section className="grid gap-5 lg:grid-cols-[300px_1fr]">
            <aside className="h-fit rounded-2xl border border-[#e4e8f0] bg-white lg:sticky lg:top-[122px]">
              <div className="border-b border-[#e8ebf2] p-5">
                <h3 className="text-5 font-bold text-[26px]">Number of Days</h3>
                <div className="mt-5 h-4 rounded-full bg-[#0f1f33]" />
                <p className="mt-2 text-2xl tracking-[0.4em] text-[#101722]">
                  3 6 9 12 15
                </p>
              </div>

              <div className="border-b border-[#e8ebf2] p-5">
                <h3 className="text-[38px] font-bold">Destination</h3>
                <div className="mt-4 space-y-2 text-[34px]">
                  {destinations.map((item) => (
                    <label key={item} className="flex items-center gap-3">
                      <input type="checkbox" className="h-7 w-7 rounded" />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-b border-[#e8ebf2] p-5">
                <h3 className="text-[38px] font-bold">Trip Type</h3>
                <div className="mt-4 space-y-2 text-[34px]">
                  {tripTypes.map((item) => (
                    <label key={item} className="flex items-center gap-3">
                      <input type="checkbox" className="h-7 w-7 rounded" />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-[38px] font-bold">Tour Theme</h3>
                <div className="mt-4 space-y-2 text-[34px]">
                  {tourThemes.map((item) => (
                    <label key={item} className="flex items-center gap-3">
                      <input type="checkbox" className="h-7 w-7 rounded" />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            <div className="space-y-10">
              <SectionReveal>
                <section>
                  <h2 className="text-5xl font-bold md:text-6xl">
                    Tailor Made Tours
                  </h2>
                  <div className="mt-5 grid gap-5 xl:grid-cols-2">
                    {tailorMadeTours.map((tour) => (
                      <article
                        key={tour.title}
                        className="overflow-hidden rounded-[20px] border border-[#e6eaf0] bg-white"
                      >
                        <div className="relative h-[210px]">
                          <Image
                            src={tour.image}
                            alt={tour.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1280px) 100vw, 50vw"
                          />
                        </div>
                        <div className="space-y-4 p-5">
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-medium text-[#3d82f0]">
                              📍 {tour.destination}
                            </span>
                            <span className="rounded-xl bg-[#eaf0fb] px-4 py-1 text-xl">
                              Tailor Made
                            </span>
                          </div>
                          <h3 className="text-4xl font-bold">{tour.title}</h3>
                          <div className="flex items-center justify-between text-2xl">
                            <span className="text-[#55637b]">
                              Starting From
                            </span>
                            <strong>{tour.price}</strong>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                  <button className="mt-5 rounded-full border border-[#d7dbe4] px-8 py-3 text-xl font-semibold">
                    Load More
                  </button>
                </section>
              </SectionReveal>

              <SectionReveal>
                <section>
                  <h2 className="text-5xl font-bold md:text-6xl">
                    Getaway Holidays
                  </h2>
                  <div className="mt-5 grid gap-5 xl:grid-cols-2">
                    {getawayTours.map((tour) => (
                      <article
                        key={tour.title}
                        className="overflow-hidden rounded-[20px] border border-[#e6eaf0] bg-white"
                      >
                        <div className="relative h-[210px]">
                          <Image
                            src={tour.image}
                            alt={tour.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1280px) 100vw, 50vw"
                          />
                        </div>
                        <div className="space-y-3 p-5">
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-medium text-[#3d82f0]">
                              📍 {tour.destination}
                            </span>
                            <span className="rounded-xl bg-[#eaf0fb] px-4 py-1 text-xl">
                              Getaway
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <h3 className="text-4xl font-bold">{tour.title}</h3>
                            <span className="rounded-xl bg-[#808287] px-3 py-1 text-xl text-white">
                              {tour.rating} ★
                            </span>
                          </div>
                          <p className="text-xl text-[#55637b]">
                            {tour.details}
                          </p>
                          <button className="text-2xl font-semibold text-[#3d82f0]">
                            Show More
                          </button>
                          <p className="text-xl font-semibold">
                            4 Days 3 Nights
                          </p>
                          <p className="text-xl text-[#55637b]">
                            Travel From Oct 1 - Dec 20, 2025
                          </p>
                          <p className="text-xl text-[#55637b]">
                            Book before: Nov 30, 2025
                          </p>
                          <p className="text-xl text-[#55637b]">From LKR</p>
                          <p className="text-5xl font-bold">{tour.price}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                  <button className="mt-5 rounded-full border border-[#d7dbe4] px-8 py-3 text-xl font-semibold">
                    Load More
                  </button>
                </section>
              </SectionReveal>

              <SectionReveal>
                <section>
                  <h2 className="text-5xl font-bold md:text-6xl">
                    Fixed Departures
                  </h2>
                  <article className="mt-5 max-w-[780px] overflow-hidden rounded-[20px] border border-[#e6eaf0] bg-white">
                    <div className="relative h-[230px]">
                      <Image
                        src="https://www.olankatravels.com/assets/home/destinations/Singapore-min.jpg"
                        alt="Fixed departures tour"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1280px) 100vw, 50vw"
                      />
                    </div>
                    <div className="space-y-3 p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-medium text-[#3d82f0]">
                          📍 Sri Lanka
                        </span>
                        <span className="rounded-xl bg-[#eaf0fb] px-4 py-1 text-xl">
                          Fixed Departures
                        </span>
                      </div>
                      <h3 className="text-4xl font-bold">
                        14 Days Journey Culture and Nature
                      </h3>
                      <p className="text-xl text-[#55637b]">
                        04 Sept 2026. Space for 6 more
                      </p>
                      <p className="text-xl text-[#55637b]">
                        Departing Date: 04 Sept 2026
                      </p>
                      <p className="text-xl text-[#55637b]">
                        14 Days 13 Nights
                      </p>
                      <p className="text-xl text-[#55637b]">
                        Double Share Per Person
                      </p>
                      <p className="text-xl text-[#55637b]">
                        Duration: 14 Days
                      </p>
                      <p className="text-xl text-[#55637b]">From LKR</p>
                      <p className="text-5xl font-bold">844,857</p>
                    </div>
                  </article>
                </section>
              </SectionReveal>
            </div>
          </section>

          <SectionReveal>
            <section className="rounded-[28px] border border-[#e6eaf0] bg-[#dfe9e2] p-6 md:p-8">
              <h2 className="text-5xl font-bold md:text-6xl">
                3 Vacation Options
              </h2>
              <p className="mt-3 text-2xl text-[#273344]">
                We will provide a selection of 3 different tour types to suit
                your preferences
              </p>

              <div className="mt-6 grid gap-5 xl:grid-cols-3">
                {vacationOptions.map((item) => (
                  <article
                    key={item.heading}
                    className="rounded-2xl border border-[#cad5d0] bg-[#dfe9e2] p-5"
                  >
                    <div className="flex gap-2">
                      <span className="rounded-full bg-white px-4 py-1 text-xl font-semibold">
                        {item.badgeA}
                      </span>
                      {item.badgeB ? (
                        <span className="rounded-full bg-white px-4 py-1 text-xl font-semibold">
                          {item.badgeB}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-4 text-5xl font-bold">{item.heading}</h3>
                    <p className="mt-5 text-4xl">
                      Starting from <strong>LKR {item.price}</strong> PP
                    </p>
                    <p className="mt-4 text-xl text-[#324257]">
                      {item.description}
                    </p>

                    <ul className="mt-4 list-disc space-y-1 pl-6 text-[30px]">
                      {item.bullets.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <div className="mt-5 space-y-2 text-[30px]">
                      {item.features.map((feature) => (
                        <p
                          key={feature.name}
                          className="flex items-center gap-2"
                        >
                          <span
                            className={
                              feature.included
                                ? "text-[#19b865]"
                                : "text-[#ef3b39]"
                            }
                          >
                            {feature.included ? "✓" : "✕"}
                          </span>
                          {feature.name}
                        </p>
                      ))}
                    </div>

                    <button className="mt-6 rounded-full bg-[#1fba5f] px-8 py-3 text-2xl font-bold text-white">
                      Get a Quote
                    </button>
                  </article>
                ))}
              </div>
            </section>
          </SectionReveal>

          <SectionReveal
            id="success"
            className="rounded-[28px] border border-[#e6eaf0] bg-white p-6 md:p-8"
          >
            <section>
              <h2 className="text-5xl font-bold md:text-6xl">People Say</h2>
              <p className="mt-3 text-2xl text-[#273344]">
                Check out what our clients loved about their vacations.
                Collected via their online reviews and success stories
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <article className="rounded-2xl border border-[#e7eaf0] p-5">
                  <p className="text-2xl font-bold">Trip Advisor</p>
                  <p className="mt-2 text-xl text-[#2f3948]">0</p>
                </article>
                <article className="rounded-2xl border border-[#e7eaf0] p-5">
                  <p className="text-2xl font-bold">Google</p>
                  <p className="mt-2 text-xl text-[#2f3948]">0</p>
                </article>
                <article className="rounded-2xl border border-[#e7eaf0] p-5">
                  <p className="text-2xl font-bold">Facebook</p>
                  <p className="mt-2 text-xl text-[#2f3948]">0</p>
                </article>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal
            id="faq"
            className="rounded-[28px] border border-[#e6eaf0] bg-white p-6 md:p-8"
          >
            <section>
              <h2 className="text-5xl font-bold md:text-6xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-2xl text-[#273344]">
                Welcome to Olanka Travels! We&apos;re excited to have you with us.
                For any questions you may have, please explore our FAQ page
                where you&apos;ll find helpful answers and information.
              </p>

              <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_420px]">
                <div className="space-y-4">
                  <h3 className="text-4xl font-bold">How Can We Help?</h3>
                  <input
                    className="h-14 w-full rounded-xl border border-[#dbe2ef] px-4 text-xl"
                    placeholder="Ask a question"
                  />
                  <div className="space-y-3 pt-2 text-2xl">
                    <details
                      className="rounded-xl border border-[#e7eaf0] p-4"
                      open
                    >
                      <summary className="cursor-pointer font-semibold">
                        Where is Olanka Travels located ?
                      </summary>
                      <p className="mt-2 text-[#55637b]">
                        Olanka Travels is located in Sri Lanka, at 87 Dutugemunu
                        St, Dehiwala-Mount Lavinia.
                      </p>
                    </details>
                    <details className="rounded-xl border border-[#e7eaf0] p-4">
                      <summary className="cursor-pointer font-semibold">
                        What are the countries to which I can Fly with Olanka
                        travels?
                      </summary>
                    </details>
                    <details className="rounded-xl border border-[#e7eaf0] p-4">
                      <summary className="cursor-pointer font-semibold">
                        How do I book a tour with Olanka?
                      </summary>
                    </details>
                    <details className="rounded-xl border border-[#e7eaf0] p-4">
                      <summary className="cursor-pointer font-semibold">
                        What are the general timings look like, when I book with
                        Olanka?
                      </summary>
                    </details>
                  </div>
                </div>
                <div className="relative h-[360px] overflow-hidden rounded-2xl">
                  <Image
                    src="https://www.olankatravels.com/assets/home/hero.png"
                    alt="hero image"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 420px"
                  />
                </div>
              </div>
            </section>
          </SectionReveal>

          <QuoteSection />
        </main>

        <FooterSection />
      </div>

      <FloatingActions />
    </div>
  );
}
