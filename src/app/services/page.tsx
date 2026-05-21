import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="pt-[2px]">
      <section className="py-margin-desktop px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div className="max-w-3xl mb-stack-lg">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-stack-md text-balance">
            Culinary Excellence &amp; Warm Hospitality
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant text-balance">
            Since 2004, Three Brothers has been a destination for those seeking an authentic blend of Mediterranean vibrancy and Central Asian warmth. Discover our tailored services designed to elevate every gathering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row border border-outline-variant/30">
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <Image 
                alt="Plated Mediterranean dish with grilled meats and vibrant vegetables." 
                className="object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-xl" 
                fill
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPo6VvZaCpuPbBQvQFfSqGyYyjSAY42KITPMnAnv16WVuvSjT0V82jNj4YkmrpX5BI8a5bibNF-Gi8DgWN1jcU_fTwRVdmst0CSK8ltyexPj-baW4OkohdK0c45vcjCgUxHHePUHcqbVjg1mrX0lrzcPDe9I4U6THaLnQpfAOEuFGM5gy_cKg4fPb7asPouiNOCGGtjgeIbamC9w-0YHxzXkngo5yO90zppRBxD3MjNEbPRYV1-fzttGrCsw5tK9_0puuL6H0OKWg"
              />
            </div>
            <div className="p-stack-lg md:w-1/2 flex flex-col justify-center bg-surface-container-lowest">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className="text-tertiary-container text-3xl mb-2"><path d="M280-80v-366q-51-14-85.5-56T160-598v-282h80v280h40v-280h80v280h40v-280h80v282q0 54-34.5 96T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z"/></svg>
                <h2 className="font-headline-sm text-headline-sm text-on-surface mb-2">Mediterranean Food</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Our core offering revolves around the sun-drenched flavors of the Mediterranean coast. From fresh seafood to olive oil-infused delicacies, every dish is crafted with precision and passion.
              </p>
              <Link href="/menu" className="font-label-lg text-label-lg text-tertiary hover:text-tertiary-container transition-colors inline-flex items-center gap-1 group w-fit">
                Explore Menu <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor" className="group-hover:translate-x-1 transition-transform text-sm"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
              </Link>
            </div>
          </div>

          <div className="md:col-span-4 bg-surface-container-low rounded-xl p-stack-lg flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className="text-primary text-3xl mb-4"><path d="M480-120q-75 0-141-28.5T219-226q-54-54-82.5-120T108-487q0-54 16-95t44-77q11-13 26-17t28 0q15 5 24 16.5t11 26.5q4 29 16.5 54.5T302-530q24 24 53.5 39t64.5 15q40 0 69.5-12t50.5-33q19-19 32.5-44.5T589-623q3-23 7-42t11-34q15-38 41-65.5T716-804q13-10 27-7.5t25 12.5q11 10 16 23.5t1 28.5q-12 55-12 110 0 69 22.5 131t64.5 111q-34 109-122.5 192T480-120Zm0-80q109 0 191.5-66.5T776-435q-23-41-41-86.5T708-616q-19 14-41.5 24T620-578q-27 15-58.5 21.5T497-550q-54 0-99.5-23T322-632q-23-26-38-57.5T261-755q-17 19-33 41.5T202-663q-14 36-21 72t-7 74q0 116 82 198.5T480-200Zm0-330Z"/></svg>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-2">Uzbek Influence</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                A unique fusion. Experience the hearty, aromatic spices and traditional grill techniques of Uzbek cuisine, seamlessly integrated into our diverse menu.
              </p>
            </div>
            <div className="relative z-10 mt-auto">
              <span className="inline-block px-3 py-1 bg-surface rounded-full font-label-md text-label-md text-secondary border border-outline-variant/50">Signature Fusion</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-highest py-margin-desktop border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid grid-cols-1 lg:grid-cols-2 gap-margin-desktop items-center">
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-stack-md">
              The Bar &amp; Grill Experience
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md">
              The heart of Three Brothers is our vibrant Bar &amp; Grill. It&apos;s an atmosphere where structured contemporary design meets the tactile comfort of a flickering hearth.
            </p>
            <ul className="space-y-4 mb-stack-lg font-body-md text-body-md text-on-surface-variant">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className="text-primary mt-0.5"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                <span>Curated selection of fine wines and artisanal spirits.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className="text-primary mt-0.5"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                <span>Open grill viewing, allowing you to experience the culinary process.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className="text-primary mt-0.5"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                <span>Sophisticated yet approachable ambiance for evening gatherings.</span>
              </li>
            </ul>
            <div className="flex gap-4">
              <Link href="/contact" className="bg-primary text-on-primary font-label-lg text-label-lg px-6 py-3 rounded-DEFAULT hover:bg-surface-tint transition-colors shadow-sm cursor-pointer">
                Reserve a Spot
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-md relative">
            <Image 
              alt="The elegant bar and grill area of Three Brothers" 
              className="object-cover rounded-xl border border-outline-variant/30 w-full" 
              width={600}
              height={400}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEoUtAXP2as6l_IFLaQqUa1gFEbbIlOBo3S7awUHRKYJbftrt30AJXjnU7_l0H7dl74LXgHO_9umNI5o4XH1ondotNwZ431FWYQIz22JVzL1DOqjJKiY5RmYcSgXs20YUcEK0T4ZwVd76B5RJlFcPbKg0tgOC4Qe5Dfe3oyk4v7yuWwFXQn9EfokHV0TjuID5-nCU-QuykOrs3sMqVbguZW4B_QKr01MyAGPVtG1cHbX0pSCiyM_E0CvI-VmoNPngioih6HBPm_0A"
            />
            <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-outline-variant/50 shadow-sm">
              <p className="font-label-md text-label-md text-on-surface">Est. 2004</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-margin-desktop px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-margin-desktop">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">Beyond Dining</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Comprehensive restaurant services tailored for your needs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface-container-lowest p-stack-lg rounded-xl shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-stack-md group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className="text-on-secondary-container"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q25 14 42.5 40.5T720-305v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h310q-9-54-56-87t-99-33q-52 0-99 33t-56 87Zm275-200q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-400 0q-33 0-56.5-23.5T140-600q0-33 23.5-56.5T220-680q33 0 56.5 23.5T300-600q0 33-23.5 56.5T220-520Zm520 0q-33 0-56.5-23.5T660-600q0-33 23.5-56.5T740-680q33 0 56.5 23.5T820-600q0 33-23.5 56.5T740-520Zm-260-80q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0-40Zm0 320Z"/></svg>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Private Events</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Host your memorable occasions in our dedicated private spaces. Perfect for corporate dinners or family celebrations.
            </p>
            <Link href="/contact" className="font-label-lg text-label-lg text-tertiary hover:text-tertiary-container transition-colors">Inquire Now</Link>
          </div>
          
          <div className="bg-surface-container-lowest p-stack-lg rounded-xl shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-stack-md group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className="text-on-secondary-container"><path d="M480-120q-75 0-141-28.5T219-226q-54-54-82.5-120T108-487q0-54 16-95t44-77q11-13 26-17t28 0q15 5 24 16.5t11 26.5q4 29 16.5 54.5T302-530q24 24 53.5 39t64.5 15q40 0 69.5-12t50.5-33q19-19 32.5-44.5T589-623q3-23 7-42t11-34q15-38 41-65.5T716-804q13-10 27-7.5t25 12.5q11 10 16 23.5t1 28.5q-12 55-12 110 0 69 22.5 131t64.5 111q-34 109-122.5 192T480-120Zm0-80q109 0 191.5-66.5T776-435q-23-41-41-86.5T708-616q-19 14-41.5 24T620-578q-27 15-58.5 21.5T497-550q-54 0-99.5-23T322-632q-23-26-38-57.5T261-755q-17 19-33 41.5T202-663q-14 36-21 72t-7 74q0 116 82 198.5T480-200Zm0-330Z"/></svg>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Catering</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Bring the flavors of Three Brothers to your location. We offer comprehensive catering menus for any scale of event.
            </p>
            <Link href="/menu" className="font-label-lg text-label-lg text-tertiary hover:text-tertiary-container transition-colors">View Menu</Link>
          </div>
          
          <div className="bg-surface-container-lowest p-stack-lg rounded-xl shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-stack-md group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className="text-on-secondary-container"><path d="M280-80v-80h160v-286L210-676q-12-12-16-27t-4-32v-145h580v145q0 17-4 32t-16 27L520-446v286h160v80H280Zm200-432 173-174H307l173 174Zm0-32Z"/></svg>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Tasting Nights</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Join us for exclusive tasting events featuring curated wine pairings and seasonal chef specials.
            </p>
            <Link href="/contact" className="font-label-lg text-label-lg text-tertiary hover:text-tertiary-container transition-colors">See Schedule</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
