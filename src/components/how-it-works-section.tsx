import { SectionReveal } from "@/components/section-reveal";

const steps = [
  { id: "01", title: "Submit Your Details", note: "" },
  {
    id: "02",
    title: "Connect with a Local Expert Online",
    note: "Free Consultation",
  },
  {
    id: "03",
    title: "Receive 3 Personalised Travel Quotes",
    note: "Discuss Further",
  },
  { id: "04", title: "Secure your Booking", note: "" },
];

export function HowItWorksSection() {
  return (
    <SectionReveal className="rounded-[32px] bg-[#dfe9e2] p-6 md:p-8 lg:p-10">
      <section>
        <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
          How It Works
        </h2>
        <div className="mt-8 space-y-6">
          {steps.map((item, index) => (
            <div
              key={item.id}
              className="grid items-start gap-3 sm:gap-4 md:grid-cols-[60px_80px_1fr] lg:grid-cols-[60px_96px_1fr]"
            >
              <p className="pt-6 text-3xl font-bold text-[#1a2738] sm:text-4xl">
                {item.id}
              </p>
              <div className="flex flex-col items-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-[#15bf61] text-2xl text-white sm:h-24 sm:w-24 sm:text-3xl">
                  ✓
                </span>
                {index < steps.length - 1 && (
                  <span className="my-2 h-16 w-[2px] border-l-2 border-dashed border-[#15bf61]" />
                )}
              </div>
              <div className="pt-4 sm:pt-5">
                <p className="text-2xl font-extrabold sm:text-3xl">
                  {item.title}
                </p>
                {item.note ? (
                  <p className="mt-3 text-2xl text-[#2f3948] sm:mt-5 sm:text-3xl">
                    {item.note}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SectionReveal>
  );
}
