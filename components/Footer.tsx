import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/lib/site-data";
import { textBody, textCaption, textLabel, textSmall } from "@/lib/typography";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-primary text-white">
      <div className="editorial-container py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-6">
            <Logo variant="footer" />
            <p className={`mt-6 ${textBody} text-white/50 sm:mt-7`}>
              {SITE.locationsLabel}
            </p>
          </div>

          <div className="min-w-0 lg:col-span-4">
            <h2 className={`${textLabel} text-white/40`}>
              Contatti
            </h2>
            <ul className={`mt-5 space-y-2.5 ${textBody} text-white/65`}>
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
                  className={`${textSmall} transition-colors duration-300 hover:text-white lg:whitespace-nowrap`}
                >
                  {SITE.email}
                </a>
              </li>
              <li className="break-words">{SITE.locationsLabel}</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className={`${textLabel} text-white/40`}>
              Informazioni legali
            </h2>
            <ul className={`mt-5 space-y-2.5 ${textBody} text-white/65`}>
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

        <div className={`mt-12 border-t border-white/10 pt-8 text-center ${textCaption} text-white/35`}>
          <p>
            &copy; {currentYear} {SITE.name}. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
