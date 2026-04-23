import { SectionReveal } from "@/components/section-reveal";

export function QuoteSection() {
  return (
    <SectionReveal
      className="rounded-[32px] border border-[#e7eaf0] bg-white p-6 md:p-8 lg:p-10"
      id="quote"
    >
      <section>
        <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
          Get a Quote
        </h2>
        <p className="mt-4 max-w-4xl text-lg text-[#273344] sm:text-xl lg:text-2xl">
          Our dedicated team of local experts are available 24/7, ready to
          provide assistance whenever you need it.
        </p>
        <form className="mt-8 grid gap-4 md:grid-cols-2">
          <input
            className="h-14 rounded-xl border border-[#dbe2ef] px-4 text-lg"
            placeholder="Full Name"
            defaultValue="John Jackson"
          />
          <input
            className="h-14 rounded-xl border border-[#dbe2ef] px-4 text-lg"
            placeholder="Email Address"
            defaultValue="hello@outlook.com"
          />
          <select className="h-14 rounded-xl border border-[#dbe2ef] px-4 text-lg text-[#2f3948]">
            <option>Select a Destination</option>
            <option>Sri Lanka</option>
            <option>Maldives</option>
            <option>Vietnam</option>
            <option>Indonesia</option>
            <option>Dubai</option>
            <option>Cambodia</option>
            <option>Singapore</option>
          </select>
          <input
            className="h-14 rounded-xl border border-[#dbe2ef] px-4 text-lg"
            placeholder="Phone Number"
            defaultValue="+94"
          />
          <input
            className="h-14 rounded-xl border border-[#dbe2ef] px-4 text-lg md:col-span-2"
            placeholder="Have a coupon?"
          />
          <p className="md:col-span-2 text-base text-[#5a667a]">
            Get a personalised quote in 2 hours. We guarantee that your
            information will not be shared with any third parties.
          </p>
          <button className="h-14 rounded-full bg-[#15bf61] px-8 text-lg font-bold text-white sm:text-xl md:w-fit">
            Submit
          </button>
        </form>
      </section>
    </SectionReveal>
  );
}
