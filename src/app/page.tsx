import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            alt="Warm, inviting interior of a high-end Mediterranean bar and grill, featuring soft golden-hour lighting, rich wood textures, and a bustling but sophisticated atmosphere." 
            className="object-cover" 
            fill
            priority
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6DoIVycy2aK4hSrBHD5n6ziWyHBCnZUJm7DpGoT_PQaflpF0Hp7E61pjFELe0d5cqosShNf2I8Xr6-Pn5q0dqQmQF_Hu9Bq9HSBNx8NNwdu49144eanBYXaSflzBbgWWFu_T1eDP4WFLOpsUzLE9krqOLWa58FtAeDtOGkqd7oH5k2rYCUkpCkxDkL4IyjLLwC3lhqkR-9ZOdkivjsGQhEDiHgEa2LIv-v-TrpmUCNqN6LgxLxruXTl2aCO1UL2dp_bSxKpmMO5c"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-gutter max-w-3xl mx-auto flex flex-col items-center gap-stack-md mt-16">
          <span className="font-label-lg text-label-lg text-primary uppercase tracking-widest bg-surface/80 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm">Est. 2004</span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-surface-container-lowest drop-shadow-md">Modern Mediterranean, Authentic Soul</h1>
          <p className="font-body-lg text-body-lg text-surface-container-lowest max-w-xl mx-auto bg-black/30 backdrop-blur-sm p-4 rounded-xl shadow-sm">Experience the vibrant flavors of the coast in a sophisticated urban setting. A family legacy crafted into every dish.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-stack-sm">
            <Link href="/menu" className="bg-primary text-on-primary font-label-lg text-label-lg px-8 py-3 rounded-lg hover:bg-surface-tint transition-colors shadow-[0_4px_14px_0_rgba(27,28,26,0.15)]">View Menu</Link>
            <Link href="/contact" className="border border-outline text-on-surface font-label-lg text-label-lg px-8 py-3 rounded-lg hover:bg-surface-variant transition-colors bg-surface/80 backdrop-blur-sm">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Heritage & Atmosphere Bento Grid */}
      <section className="py-margin-desktop px-gutter max-w-container-max mx-auto">
        <div className="text-center mb-stack-lg">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">Our Story</h2>
          <div className="h-1 w-24 bg-tertiary-container mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[300px]">
          {/* Heritage Card */}
          <div className="col-span-1 md:col-span-7 bg-surface-container-low rounded-xl p-stack-lg shadow-[0_4px_14px_0_rgba(27,28,26,0.15)] flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-container-lowest to-surface-container-low opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className="text-tertiary-container"><path d="M280-80v-366q-51-14-85.5-56T160-598v-282h80v280h40v-280h80v280h40v-280h80v282q0 54-34.5 96T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z"/></svg>
                <span className="font-label-lg text-label-lg text-secondary uppercase tracking-wider">Heritage</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">Three Brothers, One Vision</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Founded in 2004, our grill brings generations of Mediterranean culinary tradition to the heart of the city. We believe in honest ingredients, fire-roasted meats, and the warmth of genuine hospitality.</p>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
              <Image src="/logo.svg" alt="Background Logo" width={256} height={256} className="w-64 h-64 grayscale" />
            </div>
          </div>

          {/* Atmosphere Image Card */}
          <div className="col-span-1 md:col-span-5 rounded-xl overflow-hidden relative shadow-[0_4px_14px_0_rgba(27,28,26,0.15)] group">
            <Image 
              alt="A close-up of a perfectly grilled lamb kebab, sizzling on an open charcoal flame, with sparks and smoke adding drama and warmth to the composition." 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCIpmiumvgHIvd9JIxMQawGaTMPYKiiIHejlP29l93v7wCVbfFYTlIe2ZZVvzwP5kNpNldOlDsEUJDR7BD529_L7YvQQ4FpVZWl8mGsRbTm0j0aoMObTFeCxbz716nbB5H-KykI6ldQvbG8hTw9FT3UVKDvhiSJ-Dqa4CCIBtEI_JT5OtT1_U_wnERG-gjo-bAx8mczevDroOdTIlcoOagXc7Kagi_-zBGAjbjjro77w9JWem2iB5tfpJdvE05EZCC6HeSogFoXYw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-inverse/80 to-transparent"></div>
            <div className="absolute bottom-stack-md left-stack-md right-stack-md">
              <h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">Open Fire Grill</h3>
              <p className="font-body-sm text-body-sm text-surface-bright/80">Experience the theater of authentic cooking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Teaser */}
      <section className="bg-surface-container-low py-margin-desktop">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-stack-sm">Taste the Mediterranean</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-lg">From our famous mixed grill to delicate seafood and vibrant mezze, every plate is a celebration.</p>
          <Link href="/menu" className="inline-block bg-surface hover:bg-surface-container-lowest text-primary font-label-lg text-label-lg px-8 py-3 rounded-lg border border-outline-variant transition-colors shadow-sm elevation-level-1">Explore Full Menu</Link>
        </div>
      </section>
    </>
  );
}
