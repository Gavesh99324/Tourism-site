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
    <SectionReveal className="rounded-[32px] bg-[#dfe9e2] p-6 md:p-10">
      <section>
        <h2 className="text-4xl font-bold md:text-6xl">How It Works</h2>
        <div className="mt-8 space-y-6">
          {steps.map((item, index) => (
            <div
              key={item.id}
              className="grid items-start gap-4 md:grid-cols-[60px_96px_1fr]"
            >
              <p className="pt-7 text-4xl font-bold text-[#1a2738]">
                {item.id}
              </p>
              <div className="flex flex-col items-center">
                <span className="grid h-24 w-24 place-items-center rounded-full bg-[#15bf61] text-3xl text-white">
                  ✓
                </span>
                {index < steps.length - 1 && (
                  <span className="my-2 h-16 w-[2px] border-l-2 border-dashed border-[#15bf61]" />
                )}
              </div>
              <div className="pt-5">
                <p className="text-3xl font-extrabold">{item.title}</p>
                {item.note ? (
                  <p className="mt-5 text-3xl text-[#2f3948]">{item.note}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SectionReveal>
  );
}
