export function FooterSection() {
  return (
    <footer className="mt-10 rounded-[32px] bg-[#101722] p-6 text-white md:p-10">
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <div>
          <h3 className="text-2xl font-bold sm:text-3xl">Olanka Travels</h3>
          <p className="mt-4 text-base text-white/85">
            Welcome to Olanka Travels! We are a travel management company that
            provides local experts to plan customised travel itineraries.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-white/90">
            <li>About Us</li>
            <li>Holidays & Tours</li>
            <li>Success Stories</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold">Destinations</h4>
          <ul className="mt-3 space-y-2 text-white/90">
            <li>Sri Lanka</li>
            <li>Maldives</li>
            <li>Vietnam</li>
            <li>Indonesia</li>
            <li>Dubai</li>
            <li>Cambodia</li>
            <li>Singapore</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold">Accepted Payment Methods</h4>
          <div className="mt-3 grid grid-cols-3 gap-2 text-sm text-white/90">
            <span className="rounded-lg bg-white/10 p-2 text-center">
              Apple Pay
            </span>
            <span className="rounded-lg bg-white/10 p-2 text-center">
              Google Pay
            </span>
            <span className="rounded-lg bg-white/10 p-2 text-center">
              PayPal
            </span>
            <span className="rounded-lg bg-white/10 p-2 text-center">Visa</span>
            <span className="rounded-lg bg-white/10 p-2 text-center">
              Mastercard
            </span>
            <span className="rounded-lg bg-white/10 p-2 text-center">AmEx</span>
          </div>
        </div>
      </div>
      <p className="mt-8 text-sm text-white/75">
        © 2026 Olanka Travels (Pvt) LTD Sri Lanka (Reg: PV72478)
      </p>
    </footer>
  );
}
