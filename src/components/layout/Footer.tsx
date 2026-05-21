import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-stack-lg bg-surface-container-highest dark:bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-gutter max-w-container-max mx-auto">
        {/* Brand / Copyright */}
        <div className="flex flex-col gap-stack-sm">
          <span className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed-dim">Three Brothers</span>
          <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-secondary-fixed-variant">
            © 2024 Three Brothers Mediterranean Bar & Grill. Est. 2004.
          </p>
        </div>
        {/* Links */}
        <div className="flex flex-col gap-2 md:items-center">
          <Link href="/menu" className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-tertiary-fixed-dim transition-colors opacity-80 hover:opacity-100">
            Menu
          </Link>
          <Link href="/services" className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-tertiary-fixed-dim transition-colors opacity-80 hover:opacity-100">
            Catering
          </Link>
          <Link href="#" className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-tertiary-fixed-dim transition-colors opacity-80 hover:opacity-100">
            Privacy Policy
          </Link>
          <Link href="#" className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-tertiary-fixed-dim transition-colors opacity-80 hover:opacity-100">
            Terms of Service
          </Link>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col gap-2 md:items-end">
          <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-secondary-fixed-variant text-right">
            123 Mediterranean Way<br />
            Flavor Town, NY 10001<br />
            (555) 123-4567
          </p>
        </div>
      </div>
    </footer>
  );
}
