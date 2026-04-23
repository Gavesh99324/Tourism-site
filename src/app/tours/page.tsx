"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useEffect, useState } from "react";

import { FloatingActions } from "@/components/floating-actions";
import { FooterSection } from "@/components/footer-section";
import { QuoteSection } from "@/components/quote-section";
import { SectionReveal } from "@/components/section-reveal";
import { SiteHeader } from "@/components/site-header";

type TripType =
  | "Tailor Made Tours"
  | "Fixed Departures"
  | "Getaway"
  | "Fixed Tours";

type TourItem = {
  destination: string;
  title: string;
  price: string;
  days: number;
  tripType: TripType;
  themes: string[];
  image: string;
  details?: string;
  rating?: string;
  isSpecialOffer?: boolean;
};

const dayMarks = [3, 6, 9, 12, 15];

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

const tripTypes: TripType[] = [
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

const tailorMadeTours: TourItem[] = [
  {
    destination: "Sri Lanka",
    title: "10 Days - Sri Lanka Dream Route",
    price: "LKR 474,639",
    days: 10,
    tripType: "Tailor Made Tours",
    themes: ["Adventure", "Wildlife"],
    image:
      "https://www.olankatravels.com/assets/home/destinations/maldives-min.jpg",
  },
  {
    destination: "Sri Lanka",
    title: "A 12-Day Island Adventure Awaits",
    price: "LKR 601,209",
    days: 12,
    tripType: "Tailor Made Tours",
    themes: ["Adventure", "Photography"],
    image:
      "https://www.olankatravels.com/assets/home/destinations/Cambodia-min.jpg",
  },
  {
    destination: "Sri Lanka",
    title: "14 Days - Sri Lanka Intimate Trails",
    price: "LKR 933,456",
    days: 14,
    tripType: "Tailor Made Tours",
    themes: ["Honeymoon", "Adventure"],
    image:
      "https://www.olankatravels.com/assets/home/destinations/Singapore-min.jpg",
  },
  {
    destination: "Vietnam",
    title: "4 Days Hanoi Tour Package",
    price: "LKR 142,392",
    days: 4,
    tripType: "Tailor Made Tours",
    themes: ["Adventure", "Photography"],
    image:
      "https://www.olankatravels.com/assets/home/destinations/vietnam-min.jpg",
  },
  {
    destination: "Malaysia",
    title: "6 Days of Malaysian Magic",
    price: "LKR 199,348",
    days: 6,
    tripType: "Tailor Made Tours",
    themes: ["Golf", "Adventure"],
    image:
      "https://www.olankatravels.com/assets/home/destinations/Indonesia-min.jpg",
  },
  {
    destination: "Dubai",
    title: "6 Days Dubai Dreams",
    price: "LKR 275,291",
    days: 6,
    tripType: "Tailor Made Tours",
    themes: ["Adventure", "Photography"],
    image:
      "https://www.olankatravels.com/assets/home/destinations/Dubai-min.jpg",
  },
];

const getawayTours: TourItem[] = [
  {
    destination: "Maldives",
    title: "Triton Prestige Maafushi",
    rating: "4",
    details:
      "Triton Prestige Seaview & Spa is a newly built 4-star beachfront hotel, featuring modern facilities and a range of luxurious accommodations. Our hotel offers deluxe rooms, king suites, honeymoon suites, and super deluxe rooms, ensuring that there is something for every type of traveler.",
    price: "181,945",
    days: 4,
    tripType: "Getaway",
    themes: ["Honeymoon", "Adventure"],
    image:
      "https://www.olankatravels.com/assets/home/destinations/maldives-min.jpg",
  },
  {
    destination: "Maldives",
    title: "Local Island Stay",
    rating: "4",
    details:
      "Maafushi Island is one of the most popular local islands in the Maldives, known for its affordability, beautiful beaches, and vibrant atmosphere. It is an excellent choice for travelers looking to experience the Maldives without high resort costs.",
    price: "197,766",
    days: 4,
    tripType: "Getaway",
    themes: ["Adventure", "Photography"],
    image:
      "https://www.olankatravels.com/assets/home/destinations/maldives-min.jpg",
  },
  {
    destination: "Maldives",
    title: "Cinnamon Dhonveli",
    rating: "4",
    details:
      "Nestled in the heart of the Indian Ocean, Cinnamon Dhonveli Maldives offers a tropical paradise where luxury meets nature with crystal-clear waters and marine life.",
    price: "262,633",
    days: 4,
    tripType: "Getaway",
    themes: ["Honeymoon", "Adventure"],
    image:
      "https://www.olankatravels.com/assets/home/destinations/maldives-min.jpg",
  },
  {
    destination: "Maldives",
    title: "Hard Rock Maldives",
    rating: "5",
    details:
      "A MELODY YOU CANNOT SHAKE, AND A TROPICAL EXPERIENCE YOU WON'T FORGET. Bring the whole crew for an all-inclusive island experience.",
    price: "264,216",
    days: 4,
    tripType: "Getaway",
    themes: ["Honeymoon", "Adventure"],
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
    days: 4,
    tripType: "Getaway",
    themes: ["Honeymoon", "Photography"],
    isSpecialOffer: true,
    image:
      "https://www.olankatravels.com/assets/home/destinations/maldives-min.jpg",
  },
  {
    destination: "Maldives",
    title: "Meeru Island Resort",
    rating: "4",
    details:
      "Discover original Maldivian culture all around the island and create magical moments with your loved ones.",
    price: "379,078",
    days: 4,
    tripType: "Getaway",
    themes: ["Honeymoon", "Adventure"],
    image:
      "https://www.olankatravels.com/assets/home/destinations/maldives-min.jpg",
  },
];

const fixedDepartureTours: TourItem[] = [
  {
    destination: "Sri Lanka",
    title: "14 Days Journey Culture and Nature",
    price: "844,857",
    days: 14,
    tripType: "Fixed Departures",
    themes: ["Wildlife", "Adventure"],
    image:
      "https://www.olankatravels.com/assets/home/destinations/Singapore-min.jpg",
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

function toggleValue<T extends string>(
  value: T,
  list: T[],
  setList: (next: T[]) => void,
) {
  if (list.includes(value)) {
    setList(list.filter((item) => item !== value));
    return;
  }

  setList([...list, value]);
}

function parseListParam<T extends string>(
  value: string | null,
  allowed: readonly T[],
) {
  if (!value) {
    return [] as T[];
  }

  const allowedSet = new Set(allowed);

  return value
    .split(",")
    .map((entry) => decodeURIComponent(entry.trim()))
    .filter((entry): entry is T => allowedSet.has(entry as T));
}

function parseDaysParam(value: string | null) {
  const parsed = Number(value);

  if (!Number.isFinite(parsed) || !dayMarks.includes(parsed)) {
    return 15;
  }

  return parsed;
}

function ToursContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(
    () => parseListParam(searchParams.get("dest"), destinations),
  );
  const [selectedTripTypes, setSelectedTripTypes] = useState<TripType[]>(() =>
    parseListParam(searchParams.get("types"), tripTypes),
  );
  const [selectedThemes, setSelectedThemes] = useState<string[]>(() =>
    parseListParam(searchParams.get("themes"), tourThemes),
  );
  const [maxDays, setMaxDays] = useState(() =>
    parseDaysParam(searchParams.get("days")),
  );

  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedDestinations.length > 0) {
      params.set("dest", selectedDestinations.join(","));
    }

    if (selectedTripTypes.length > 0) {
      params.set("types", selectedTripTypes.join(","));
    }

    if (selectedThemes.length > 0) {
      params.set("themes", selectedThemes.join(","));
    }

    if (maxDays !== 15) {
      params.set("days", String(maxDays));
    }

    const nextQuery = params.toString();
    const nextUrl = nextQuery ? `${pathname}?${nextQuery}` : pathname;

    router.replace(nextUrl, { scroll: false });
  }, [
    maxDays,
    pathname,
    router,
    selectedDestinations,
    selectedThemes,
    selectedTripTypes,
  ]);

  const maxPercent = ((maxDays - 3) / 12) * 100;

  const matchesFilters = (tour: TourItem) => {
    const destinationMatch =
      selectedDestinations.length === 0 ||
      selectedDestinations.includes(tour.destination);
    const tripTypeMatch =
      selectedTripTypes.length === 0 ||
      selectedTripTypes.includes(tour.tripType);
    const themeMatch =
      selectedThemes.length === 0 ||
      tour.themes.some((theme) => selectedThemes.includes(theme));
    const daysMatch = tour.days <= maxDays;

    return destinationMatch && tripTypeMatch && themeMatch && daysMatch;
  };

  const filteredTailorMade = tailorMadeTours.filter(matchesFilters);
  const filteredGetaway = getawayTours.filter(matchesFilters);
  const filteredFixedDepartures = fixedDepartureTours.filter(matchesFilters);

  const showTailorSection =
    selectedTripTypes.length === 0 ||
    selectedTripTypes.includes("Tailor Made Tours");
  const showGetawaySection =
    selectedTripTypes.length === 0 || selectedTripTypes.includes("Getaway");
  const showFixedDeparturesSection =
    selectedTripTypes.length === 0 ||
    selectedTripTypes.includes("Fixed Departures");

  const hasActiveFilters =
    selectedDestinations.length > 0 ||
    selectedTripTypes.length > 0 ||
    selectedThemes.length > 0 ||
    maxDays !== 15;

  const resetFilters = () => {
    setSelectedDestinations([]);
    setSelectedTripTypes([]);
    setSelectedThemes([]);
    setMaxDays(15);
  };

  return (
    <div className="relative min-h-screen soft-grid text-[#101722]">
      <SiteHeader />
      <div className="mx-auto max-w-[1280px] px-3 pb-20 pt-0 md:px-5">
        <main className="space-y-8 pt-6 md:space-y-12 md:pt-8">
          <SectionReveal className="rounded-[24px] bg-[#f6f7fb] p-5 md:p-8">
            <section>
              <p className="text-sm text-[#738093] md:text-lg">
                🏠 Home › Holidays & Tours
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:mt-6 md:text-6xl lg:text-7xl">
                Tours & Destinations
              </h1>
            </section>
          </SectionReveal>

          <section className="grid gap-5 lg:grid-cols-[270px_1fr] xl:grid-cols-[300px_1fr]">
            <aside className="h-fit rounded-2xl border border-[#e4e8f0] bg-white lg:sticky lg:top-[122px]">
              <div className="border-b border-[#e8ebf2] p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    Number of Days
                  </h3>
                  <button
                    type="button"
                    onClick={resetFilters}
                    disabled={!hasActiveFilters}
                    className="inline-flex min-h-10 items-center rounded-lg border border-[#d7dbe4] px-3 py-1 text-xs font-semibold text-[#2d3b52] disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
                  >
                    Reset Filters
                  </button>
                </div>

                <div className="relative mt-6">
                  <div className="h-4 rounded-full bg-[#dfdfe4]" />
                  <div
                    className="absolute left-0 top-0 h-4 rounded-full bg-[#0f1f33]"
                    style={{ width: `${maxPercent}%` }}
                  />

                  <span className="absolute top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border-4 border-[#1a2535] bg-white" />
                  <span
                    className="absolute top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border-4 border-[#1a2535] bg-white"
                    style={{
                      left: `clamp(0px, calc(${maxPercent}% - 1.25rem), calc(100% - 2.5rem))`,
                    }}
                  />

                  <input
                    type="range"
                    min={3}
                    max={15}
                    step={3}
                    value={maxDays}
                    onChange={(event) => setMaxDays(Number(event.target.value))}
                    className="absolute inset-0 h-10 cursor-pointer opacity-0"
                    aria-label="Number of days"
                  />
                </div>

                <div className="mt-4 grid grid-cols-5 text-center text-xl sm:text-2xl md:text-3xl">
                  {dayMarks.map((mark) => (
                    <button
                      key={mark}
                      type="button"
                      onClick={() => setMaxDays(mark)}
                      className={`min-h-10 py-1 ${mark <= maxDays ? "text-[#101722]" : "text-[#9aa3b1]"}`}
                    >
                      {mark}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-b border-[#e8ebf2] p-6">
                <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                  Destination
                </h3>
                <div className="mt-4 space-y-2 text-lg sm:text-xl md:text-2xl">
                  {destinations.map((item) => (
                    <label
                      key={item}
                      className="flex min-h-11 cursor-pointer items-center gap-3 py-1"
                    >
                      <input
                        type="checkbox"
                        className="h-7 w-7 rounded"
                        checked={selectedDestinations.includes(item)}
                        onChange={() =>
                          toggleValue(
                            item,
                            selectedDestinations,
                            setSelectedDestinations,
                          )
                        }
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-b border-[#e8ebf2] p-6">
                <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                  Trip Type
                </h3>
                <div className="mt-4 space-y-2 text-lg sm:text-xl md:text-2xl">
                  {tripTypes.map((item) => (
                    <label
                      key={item}
                      className="flex min-h-11 cursor-pointer items-center gap-3 py-1"
                    >
                      <input
                        type="checkbox"
                        className="h-7 w-7 rounded"
                        checked={selectedTripTypes.includes(item)}
                        onChange={() =>
                          toggleValue(
                            item,
                            selectedTripTypes,
                            setSelectedTripTypes,
                          )
                        }
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                  Tour Theme
                </h3>
                <div className="mt-4 space-y-2 text-lg sm:text-xl md:text-2xl">
                  {tourThemes.map((item) => (
                    <label
                      key={item}
                      className="flex min-h-11 cursor-pointer items-center gap-3 py-1"
                    >
                      <input
                        type="checkbox"
                        className="h-7 w-7 rounded"
                        checked={selectedThemes.includes(item)}
                        onChange={() =>
                          toggleValue(item, selectedThemes, setSelectedThemes)
                        }
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            <div className="space-y-10">
              {showTailorSection ? (
                <SectionReveal>
                  <section>
                    <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                      Tailor Made Tours
                    </h2>
                    <div className="mt-5 grid gap-5 lg:grid-cols-2">
                      {filteredTailorMade.map((tour) => (
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
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <span className="text-xl font-medium text-[#3d82f0] sm:text-2xl">
                                📍 {tour.destination}
                              </span>
                              <span className="rounded-xl bg-[#eaf0fb] px-4 py-1 text-base sm:text-xl">
                                Tailor Made
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold sm:text-3xl">
                              {tour.title}
                            </h3>
                            <div className="flex items-center justify-between text-lg sm:text-2xl">
                              <span className="text-[#55637b]">
                                Starting From
                              </span>
                              <strong>{tour.price}</strong>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                    {filteredTailorMade.length === 0 ? (
                      <p className="mt-4 text-2xl text-[#55637b]">
                        No Tailor Made tours match your current filters.
                      </p>
                    ) : null}
                  </section>
                </SectionReveal>
              ) : null}

              {showGetawaySection ? (
                <SectionReveal>
                  <section>
                    <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                      Getaway Holidays
                    </h2>
                    <div className="mt-5 grid gap-5 lg:grid-cols-2">
                      {filteredGetaway.map((tour) => (
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
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <span className="text-xl font-medium text-[#3d82f0] sm:text-2xl">
                                📍 {tour.destination}
                              </span>
                              <span className="rounded-xl bg-[#eaf0fb] px-4 py-1 text-base sm:text-xl">
                                Getaway
                              </span>
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <h3 className="text-2xl font-bold sm:text-3xl">
                                {tour.title}
                              </h3>
                              <span className="shrink-0 rounded-xl bg-[#808287] px-3 py-1 text-base text-white sm:text-xl">
                                {tour.rating} ★
                              </span>
                            </div>
                            <p className="text-base text-[#55637b] sm:text-lg">
                              {tour.details}
                            </p>
                            <button className="text-xl font-semibold text-[#3d82f0] sm:text-2xl">
                              Show More
                            </button>
                            <p className="text-lg font-semibold sm:text-xl">
                              4 Days 3 Nights
                            </p>
                            <p className="text-base text-[#55637b] sm:text-lg">
                              Travel From Oct 1 - Dec 20, 2025
                            </p>
                            <p className="text-base text-[#55637b] sm:text-lg">
                              Book before: Nov 30, 2025
                            </p>
                            {tour.isSpecialOffer ? (
                              <p className="text-base text-[#55637b] sm:text-lg">
                                Special offer: -40%
                              </p>
                            ) : null}
                            <p className="text-base text-[#55637b] sm:text-lg">
                              From LKR
                            </p>
                            <p className="text-3xl font-bold sm:text-4xl">
                              {tour.price}
                            </p>
                          </div>
                        </article>
                      ))}
                    </div>
                    {filteredGetaway.length === 0 ? (
                      <p className="mt-4 text-2xl text-[#55637b]">
                        No Getaway tours match your current filters.
                      </p>
                    ) : null}
                  </section>
                </SectionReveal>
              ) : null}

              {showFixedDeparturesSection ? (
                <SectionReveal>
                  <section>
                    <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                      Fixed Departures
                    </h2>
                    {filteredFixedDepartures.map((tour) => (
                      <article
                        key={tour.title}
                        className="mt-5 max-w-[780px] overflow-hidden rounded-[20px] border border-[#e6eaf0] bg-white"
                      >
                        <div className="relative h-[230px]">
                          <Image
                            src={tour.image}
                            alt={tour.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1280px) 100vw, 50vw"
                          />
                        </div>
                        <div className="space-y-3 p-5">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <span className="text-xl font-medium text-[#3d82f0] sm:text-2xl">
                              📍 {tour.destination}
                            </span>
                            <span className="rounded-xl bg-[#eaf0fb] px-4 py-1 text-base sm:text-xl">
                              Fixed Departures
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold sm:text-3xl">
                            {tour.title}
                          </h3>
                          <p className="text-base text-[#55637b] sm:text-lg">
                            04 Sept 2026. Space for 6 more
                          </p>
                          <p className="text-base text-[#55637b] sm:text-lg">
                            Departing Date: 04 Sept 2026
                          </p>
                          <p className="text-base text-[#55637b] sm:text-lg">
                            14 Days 13 Nights
                          </p>
                          <p className="text-base text-[#55637b] sm:text-lg">
                            Double Share Per Person
                          </p>
                          <p className="text-base text-[#55637b] sm:text-lg">
                            Duration: {tour.days} Days
                          </p>
                          <p className="text-base text-[#55637b] sm:text-lg">
                            From LKR
                          </p>
                          <p className="text-3xl font-bold sm:text-4xl">
                            {tour.price}
                          </p>
                        </div>
                      </article>
                    ))}
                    {filteredFixedDepartures.length === 0 ? (
                      <p className="mt-4 text-2xl text-[#55637b]">
                        No Fixed Departures match your current filters.
                      </p>
                    ) : null}
                  </section>
                </SectionReveal>
              ) : null}
            </div>
          </section>

          <SectionReveal>
            <section className="rounded-[28px] border border-[#e6eaf0] bg-[#dfe9e2] p-6 md:p-8">
              <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                3 Vacation Options
              </h2>
              <p className="mt-3 text-lg text-[#273344] sm:text-xl md:text-2xl">
                We will provide a selection of 3 different tour types to suit
                your preferences
              </p>

              <div className="mt-6 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
                {vacationOptions.map((item) => (
                  <article
                    key={item.heading}
                    className="rounded-2xl border border-[#cad5d0] bg-[#dfe9e2] p-5"
                  >
                    <div className="flex gap-2">
                      <span className="rounded-full bg-white px-4 py-1 text-base font-semibold sm:text-lg">
                        {item.badgeA}
                      </span>
                      {item.badgeB ? (
                        <span className="rounded-full bg-white px-4 py-1 text-base font-semibold sm:text-lg">
                          {item.badgeB}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
                      {item.heading}
                    </h3>
                    <p className="mt-5 text-2xl sm:text-3xl">
                      Starting from <strong>LKR {item.price}</strong> PP
                    </p>
                    <p className="mt-4 text-base text-[#324257] sm:text-lg">
                      {item.description}
                    </p>

                    <ul className="mt-4 list-disc space-y-1 pl-6 text-lg sm:text-xl">
                      {item.bullets.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <div className="mt-5 space-y-2 text-lg sm:text-xl">
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

                    <button className="mt-6 w-full rounded-full bg-[#1fba5f] px-8 py-3 text-lg font-bold text-white sm:w-auto sm:text-xl md:text-2xl">
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
              <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                People Say
              </h2>
              <p className="mt-3 text-lg text-[#273344] sm:text-xl md:text-2xl">
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
              <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-lg text-[#273344] sm:text-xl md:text-2xl">
                Welcome to Olanka Travels! We&apos;re excited to have you with
                us. For any questions you may have, please explore our FAQ page
                where you&apos;ll find helpful answers and information.
              </p>

              <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_420px]">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold sm:text-4xl">
                    How Can We Help?
                  </h3>
                  <input
                    className="h-14 w-full rounded-xl border border-[#dbe2ef] px-4 text-lg sm:text-xl"
                    placeholder="Ask a question"
                  />
                  <div className="space-y-3 pt-2 text-lg sm:text-xl md:text-2xl">
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

export default function ToursPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToursContent />
    </Suspense>
  );
}
