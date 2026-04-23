import { SectionReveal } from "@/components/section-reveal";

export function NewsletterSection() {
  return (
    <SectionReveal className="rounded-[32px] bg-gradient-to-r from-[#e7eefc] to-[#d7f6e7] p-6 md:p-8 lg:p-10">
      <section>
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Travel News & Trends
            </h2>
            <p className="mt-3 text-lg text-[#273344] sm:text-xl lg:text-2xl">
              Stay in touch with the latest travel news, special offers and
              holiday ideas!
            </p>
          </div>
          <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Sign up today to our newsletter"
              className="h-14 flex-1 rounded-full border border-[#dbe2ef] bg-white px-5 text-lg outline-none"
            />
            <button className="h-14 rounded-full bg-black px-8 text-lg font-semibold text-white sm:text-xl">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </SectionReveal>
  );
}
