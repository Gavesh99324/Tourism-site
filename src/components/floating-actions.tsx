"use client";

export function FloatingActions() {
  return (
    <>
      <button
        className="fixed bottom-28 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-black text-3xl text-white"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      <div className="glass fixed bottom-4 right-4 z-40 rounded-2xl border border-[#dce1eb] p-3 card-shadow">
        <p className="text-lg font-bold">We&apos;re Online!</p>
        <p className="text-sm text-[#5a667a]">How may I help you today...</p>
      </div>
    </>
  );
}
