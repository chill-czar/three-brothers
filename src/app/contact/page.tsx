import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex-grow pt-[10px] pb-24">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-gutter mb-stack-lg text-center md:text-left">
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-4">
          Visit Us
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          We invite you to experience the warmth of our hospitality. Whether you&apos;re planning a dinner, a catered event, or simply have a question, we are here for you.
        </p>
      </section>

      {/* Bento Grid Layout */}
      <section className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Card 1: Direct Contact */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-stack-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center relative overflow-hidden">
          {/* Subtle background accent */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>
          
          <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-md flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="currentColor" className="text-primary"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80q0-23 6.5-39.5T555-520q34-29 49.5-54.5T620-630q0-54-38-87t-98-33q-55 0-96 29.5T332-640l68 28q15-37 42.5-52.5T486-680q29 0 46.5 12.5T550-630q0 20-11 36.5T502-550q-35 30-48.5 54.5T440-440Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-surface-container rounded-lg text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z"/></svg>
              </div>
              <div>
                <p className="font-label-lg text-label-lg text-secondary mb-1 uppercase tracking-wider">Restaurant Line</p>
                <a className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors" href="tel:+15134690089">+1 513 469 0089</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-surface-container rounded-lg text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 600v120-120Zm0-600v-40 40Z"/></svg>
              </div>
              <div>
                <p className="font-label-lg text-label-lg text-secondary mb-1 uppercase tracking-wider">Mobile &amp; Events</p>
                <a className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors" href="tel:5137396688">513 739 6688</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 md:col-span-2 pt-4 border-t border-surface-variant">
              <div className="p-3 bg-surface-container rounded-lg text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
              </div>
              <div>
                <p className="font-label-lg text-label-lg text-secondary mb-1 uppercase tracking-wider">Email Inquiries</p>
                <a className="font-body-lg text-body-lg text-on-surface hover:text-primary transition-colors" href="mailto:ulugism@yahoo.com">ulugism@yahoo.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Hours */}
        <div className="md:col-span-4 bg-surface-container-highest rounded-xl p-stack-lg shadow-sm hover:shadow-md transition-shadow flex flex-col text-center">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-stack-md">Opening Hours</h2>
          <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant flex-grow flex flex-col justify-center">
            <li className="flex justify-between items-center border-b border-surface-variant/50 pb-2">
              <span className="font-medium">Mon-Thu & Sun</span>
              <span>11:00 AM - 9:00 PM</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="font-medium">Friday & Saturday</span>
              <span>11:00 AM - 11:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Card 3: Location & Map */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-2 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 h-64 md:h-auto rounded-lg overflow-hidden relative">
            <Image 
              alt="Map to Three Brothers" 
              className="object-cover" 
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANDr7M7AsdUr7AvjoZnFI4W9E7ZdQ3WTVEhapFlvfI7_jG6BVrOPJPko7NqAlqTe1__w_hvBkqTkDQNdp5QX2Uq3lPvPh7n2ePEZmLA509Jq3A2vFZB2PNwHs3bYtLxtG1nWOkiOAsnHyLQM6_UN-zr9wI4IpKAlwVaSQ_hR-9xsM-ea6itpFQSTNtoFElgqxYFMSgrL4pJLMGtY-l2KGVxmS4y7b3JV3rf5lOKuBKGcqdr-Y8RQbR5bO3OKlYN6B4r97QaEwT7NI"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-surface/95 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              <p className="font-label-lg text-label-lg text-primary flex items-center gap-1 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                Address
              </p>
              <p className="font-body-sm text-body-sm text-on-surface">9980 Kings Automall Dr<br/>Cincinnati, OH 45249</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-stack-sm flex flex-col justify-center">
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className="text-primary"><path d="M200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h320v80H200v640h320v80H200Zm400-160L456-384l56-56 88 88 224-224 56 56-280 280Z"/></svg>
              Service Areas
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Proudly serving the greater Cincinnati area with authentic Mediterranean cuisine, both in-house and through our dedicated catering services.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-surface-container px-3 py-1 rounded-full font-label-md text-label-md text-secondary">Mason</span>
              <span className="bg-surface-container px-3 py-1 rounded-full font-label-md text-label-md text-secondary">Loveland</span>
              <span className="bg-surface-container px-3 py-1 rounded-full font-label-md text-label-md text-secondary">Cincinnati</span>
              <span className="bg-surface-container px-3 py-1 rounded-full font-label-md text-label-md text-secondary">Maineville</span>
              <span className="bg-surface-container px-3 py-1 rounded-full font-label-md text-label-md text-secondary">Blue Ash</span>
            </div>
          </div>
        </div>

        {/* Card 4: Payments */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-stack-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary-fixed-variant mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="currentColor"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-240H160v240Zm0-400h640v-80H160v80Zm0 0v-80 80Zm0 400v-240 240Z"/></svg>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Payment Methods</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
            For your convenience, we accept a variety of secure payment options for dining and catering.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-secondary">
            <div className="flex items-center gap-1 bg-surface py-2 px-3 rounded border border-surface-variant shadow-sm"><span className="font-label-md text-label-md">Cash</span></div>
            <div className="flex items-center gap-1 bg-surface py-2 px-3 rounded border border-surface-variant shadow-sm"><span className="font-label-md text-label-md">Visa</span></div>
            <div className="flex items-center gap-1 bg-surface py-2 px-3 rounded border border-surface-variant shadow-sm"><span className="font-label-md text-label-md">Mastercard</span></div>
            <div className="flex items-center gap-1 bg-surface py-2 px-3 rounded border border-surface-variant shadow-sm"><span className="font-label-md text-label-md">AMEX</span></div>
            <div className="flex items-center gap-1 bg-surface py-2 px-3 rounded border border-surface-variant shadow-sm"><span className="font-label-md text-label-md">Apple Pay</span></div>
            <div className="flex items-center gap-1 bg-surface py-2 px-3 rounded border border-surface-variant shadow-sm"><span className="font-label-md text-label-md">Google Pay</span></div>
          </div>
        </div>
      </section>
    </div>
  );
}
