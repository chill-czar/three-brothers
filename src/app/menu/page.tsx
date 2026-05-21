import Image from "next/image";

export default function Menu() {
  return (
    <div className="max-w-container-max mx-auto px-gutter py-margin-desktop min-h-screen">
      {/* Menu Header & Hero Image */}
      <section className="mb-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
        <div className="space-y-stack-md pr-0 lg:pr-gutter">
          <span className="font-label-lg text-label-lg text-tertiary-container uppercase tracking-widest block">Authentic Flavors</span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">Our Menu</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Experience the true taste of the Mediterranean. Our dishes are crafted from traditional family recipes, using the freshest ingredients and cooked to perfection over an open fire.
          </p>
          <div className="pt-stack-sm flex gap-4">
            <a className="inline-block bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg px-6 py-3 rounded-DEFAULT transition-colors" href="#grill">
              Jump to Grill
            </a>
          </div>
        </div>
        <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden elevation-level-1">
          <Image 
            alt="Mediterranean mixed grill platter" 
            className="object-cover" 
            fill
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVLSR3hdWkDi1vIu-PWhHCZiUhH_8I9lCOD0BPtEcXVYEaab6jsSD0T4nEaolnWzRgd9tRMAJ7c_WzuNVDjP5-INItNlYkDXQVnEUyBGB7r61-M4n16EoBHBXQtIFDDSFl9ThZ1gVk0cVyZy-Mpa8jJyiTFsGyBFw6QbPKmJpEyxykiuyvQv1_-_1vQHPlQzq6XCP_X4x6355XWCzBxNJNdATjNLTf2DfN7USpF6aco9Lm_TlAYjVzj25ZnyVUu8a8pJHujVLHhVI"
          />
        </div>
      </section>

      {/* Category Nav (Sticky under main nav) */}
      <div className="sticky top-[73px] z-40 bg-surface/95 backdrop-blur-sm py-4 mb-stack-lg border-b border-surface-variant flex gap-6 overflow-x-auto no-scrollbar snap-x">
        <a className="font-label-lg text-label-lg text-primary border-b-2 border-primary pb-1 whitespace-nowrap snap-start" href="#appetizers">Appetizers</a>
        <a className="font-label-lg text-label-lg text-secondary hover:text-primary transition-colors pb-1 whitespace-nowrap snap-start" href="#grill">Main Grill</a>
        <a className="font-label-lg text-label-lg text-secondary hover:text-primary transition-colors pb-1 whitespace-nowrap snap-start" href="#salads">Salads</a>
      </div>

      {/* Menu Categories */}
      <div className="space-y-margin-desktop pb-margin-desktop">
        {/* Appetizers */}
        <section className="scroll-mt-[150px]" id="appetizers">
          <div className="flex items-center gap-4 mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Appetizers</h2>
            <div className="h-px bg-outline-variant flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Item */}
            <div className="bg-surface-container-lowest p-stack-md rounded-lg elevation-level-1 hover:elevation-level-2 transition-shadow group flex justify-between items-start">
              <div className="pr-4">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Classic Hummus</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">Creamy chickpea purée with tahini, lemon juice, and a drizzle of extra virgin olive oil.</p>
                <span className="inline-block px-2 py-1 bg-surface-container text-on-secondary-container font-label-md text-label-md rounded-sm">V, GF</span>
              </div>
              <span className="font-label-lg text-label-lg text-on-surface font-semibold shrink-0">$8</span>
            </div>
            {/* Item */}
            <div className="bg-surface-container-lowest p-stack-md rounded-lg elevation-level-1 hover:elevation-level-2 transition-shadow group flex justify-between items-start">
              <div className="pr-4">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Crispy Falafel</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">Deep-fried patties of ground chickpeas and herbs, served with a side of tahini sauce.</p>
                <span className="inline-block px-2 py-1 bg-surface-container text-on-secondary-container font-label-md text-label-md rounded-sm">V</span>
              </div>
              <span className="font-label-lg text-label-lg text-on-surface font-semibold shrink-0">$9</span>
            </div>
            {/* Item */}
            <div className="bg-surface-container-lowest p-stack-md rounded-lg elevation-level-1 hover:elevation-level-2 transition-shadow group flex justify-between items-start">
              <div className="pr-4">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Baba Ganoush</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">Smoky roasted eggplant mashed with tahini, garlic, and fresh lemon juice.</p>
                <span className="inline-block px-2 py-1 bg-surface-container text-on-secondary-container font-label-md text-label-md rounded-sm">V, GF</span>
              </div>
              <span className="font-label-lg text-label-lg text-on-surface font-semibold shrink-0">$9</span>
            </div>
            {/* Item */}
            <div className="bg-surface-container-lowest p-stack-md rounded-lg elevation-level-1 hover:elevation-level-2 transition-shadow group flex justify-between items-start">
              <div className="pr-4">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Stuffed Grape Leaves</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">Vine leaves wrapped around a savory mix of rice, herbs, and spices.</p>
                <span className="inline-block px-2 py-1 bg-surface-container text-on-secondary-container font-label-md text-label-md rounded-sm">V, GF</span>
              </div>
              <span className="font-label-lg text-label-lg text-on-surface font-semibold shrink-0">$7</span>
            </div>
          </div>
        </section>

        {/* Main Grill */}
        <section className="scroll-mt-[150px]" id="grill">
          <div className="flex items-center gap-4 mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Main Grill</h2>
            <div className="h-px bg-outline-variant flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter auto-rows-min">
            {/* Feature Item */}
            <div className="md:col-span-2 bg-surface-container-lowest rounded-lg elevation-level-1 overflow-hidden flex flex-col md:flex-row group cursor-pointer hover:elevation-level-2 transition-all">
              <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-surface-container-high">
                <Image 
                  alt="Plated shawarma with rice and vegetables" 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  fill
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCIpmiumvgHIvd9JIxMQawGaTMPYKiiIHejlP29l93v7wCVbfFYTlIe2ZZVvzwP5kNpNldOlDsEUJDR7BD529_L7YvQQ4FpVZWl8mGsRbTm0j0aoMObTFeCxbz716nbB5H-KykI6ldQvbG8hTw9FT3UVKDvhiSJ-Dqa4CCIBtEI_JT5OtT1_U_wnERG-gjo-bAx8mczevDroOdTIlcoOagXc7Kagi_-zBGAjbjjro77w9JWem2iB5tfpJdvE05EZCC6HeSogFoXYw"
                />
              </div>
              <div className="p-stack-lg md:w-1/2 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline-md text-headline-md text-primary">Mixed Grill Platter</h3>
                  <span className="font-headline-sm text-headline-sm text-on-surface ml-4">$32</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">The ultimate feast. A generous assortment of our finest charcoal-grilled meats including Lamb Kebab, Chicken Tawook, and Beef Kofta. Served over rice with roasted vegetables and garlic sauce.</p>
                <button className="self-start text-primary font-label-lg text-label-lg flex items-center gap-2 hover:text-primary-container transition-colors cursor-pointer">
                  Order Now <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                </button>
              </div>
            </div>
            
            {/* Standard Grill Items */}
            <div className="bg-surface-container-lowest p-stack-lg rounded-lg elevation-level-1 hover:elevation-level-2 transition-shadow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-sm text-headline-sm text-primary">Chicken Shawarma</h3>
                <span className="font-label-lg text-label-lg text-on-surface font-semibold">$18</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-grow">Marinated chicken slowly roasted on a vertical spit, thinly sliced and served with garlic sauce and pickles.</p>
            </div>
            
            <div className="bg-surface-container-lowest p-stack-lg rounded-lg elevation-level-1 hover:elevation-level-2 transition-shadow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-sm text-headline-sm text-primary">Lamb Kebab</h3>
                <span className="font-label-lg text-label-lg text-on-surface font-semibold">$22</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-grow">Tender cubes of marinated lamb leg, skewered and charred over an open flame. Served with vermicelli rice.</p>
            </div>
            
            <div className="bg-surface-container-lowest p-stack-lg rounded-lg elevation-level-1 hover:elevation-level-2 transition-shadow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-sm text-headline-sm text-primary">Beef Kofta</h3>
                <span className="font-label-lg text-label-lg text-on-surface font-semibold">$20</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-grow">Minced beef mixed with finely chopped parsley, onions, and traditional spices, grilled to perfection.</p>
            </div>
            
            <div className="bg-surface-container-lowest p-stack-lg rounded-lg elevation-level-1 hover:elevation-level-2 transition-shadow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-sm text-headline-sm text-primary">Grilled Branzino</h3>
                <span className="font-label-lg text-label-lg text-on-surface font-semibold">$28</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-grow">Whole Mediterranean sea bass, butterflied and grilled with lemon, herbs, and olive oil.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
