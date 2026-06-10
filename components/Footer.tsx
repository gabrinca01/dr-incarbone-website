import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/lib/site-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-primary text-white">
      <div className="editorial-container py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <Logo variant="footer" />
            <p className="mt-5 text-sm tracking-wide text-white/50 sm:text-base">
              {SITE.locationsLabel}
            </p>
          </div>

          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
              Contatti
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm text-white/65 sm:text-base">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
              Informazioni legali
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm text-white/65 sm:text-base">
              <li>
                <a href="#" className="transition-colors duration-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors duration-300 hover:text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs tracking-wide text-white/35 sm:text-sm">
          <p>
            &copy; {currentYear} {SITE.name}. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
