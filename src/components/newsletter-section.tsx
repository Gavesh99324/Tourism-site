import { SectionReveal } from "@/components/section-reveal";

export function NewsletterSection() {
  return (
    <SectionReveal className="rounded-[32px] bg-gradient-to-r from-[#e7eefc] to-[#d7f6e7] p-6 md:p-10">
      <section>
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">
              Travel News & Trends
            </h2>
            <p className="mt-3 text-2xl text-[#273344]">
              Stay in touch with the latest travel news, special offers and
              holiday ideas!
            </p>
          </div>
          <form className="flex w-full max-w-xl flex-col gap-3 md:flex-row">
            <input
              type="email"
              placeholder="Sign up today to our newsletter"
              className="h-14 flex-1 rounded-full border border-[#dbe2ef] bg-white px-5 text-lg outline-none"
            />
            <button className="h-14 rounded-full bg-black px-8 text-xl font-semibold text-white">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </SectionReveal>
  );
}
