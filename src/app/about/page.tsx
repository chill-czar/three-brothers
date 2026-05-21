import Image from "next/image";

export default function About() {
  return (
    <div className="flex-grow pt-[10px] pb-stack-lg">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-gutter mb-margin-desktop">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <Image 
            alt="Three Brothers Kitchen" 
            className="object-cover" 
            fill
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_AIBVxu1SKox-1qjQpIEFh5_PZyHAE9g5VRyxr8BfEu4lfJybvzz9EYEYuQPYUpqz1DfWmIuf8jgffvhERgGh9SUdo5Wmn-k7NDgAKll07bqv8W4Cpt1ADGupx0c8SYRx03UpDxkUugR5vdveCr7iQzQMYmXqRsd7EWXzJUj5Fryo3sO2ktH3UsMJ71dmicVJhuqWewRO89hFly6cikudVIKodH5-8xubLdIPRb77IA7sR-PwxOsQm-HEdYkwYp6EIc69u8VwDng"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-stack-lg">
            <h1 className="font-display-lg text-display-lg md:text-display-lg text-surface-container-lowest drop-shadow-md mb-stack-md">Our Story</h1>
            <p className="font-body-lg text-body-lg text-surface-container-lowest max-w-2xl drop-shadow-sm">Serving authentic Mediterranean and Uzbek flavors to the Cincinnati community since 2004.</p>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-container-max mx-auto px-gutter mb-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Left Column: Text */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-md">From Our Family to Yours</h2>
          <p className="font-body-lg text-body-lg text-on-surface mb-stack-md leading-relaxed">
            Established in the heart of Cincinnati, Ohio in 2004, Three Brothers was born out of a profound love for family gatherings and the rich, diverse culinary traditions of the Mediterranean and Uzbekistan. What started as a modest grill has blossomed into a beloved local staple, a place where every meal feels like a homecoming.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg leading-relaxed">
            Our heritage is woven into every dish we serve. We blend the vibrant, sun-drenched flavors of the Mediterranean coast with the robust, spiced warmth of traditional Uzbek cuisine. It’s a delicate balance that reflects our journey—honoring our roots while embracing the community that has embraced us for two decades.
          </p>
          <div className="flex gap-stack-md">
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-tertiary-container">2004</span>
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">Established</span>
            </div>
            <div className="flex flex-col pl-stack-md border-l border-outline-variant">
              <span className="font-headline-md text-headline-md text-tertiary-container">20+</span>
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">Years of Service</span>
            </div>
          </div>
        </div>

        {/* Right Column: Imagery Bento */}
        <div className="md:col-span-5 grid grid-cols-2 gap-unit h-[600px] mt-8 md:mt-0">
          <div className="col-span-2 rounded-lg overflow-hidden shadow-sm relative">
            <Image 
              alt="Authentic Cuisine" 
              className="object-cover" 
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw3iVh1V6A6J-gtJThzM2UBxOQACoazGZP2y8TyStz8FsyxQDoQPEt1HniDQT2zvCnq9ig8nqnPuV2GdQRYYgVbZuHhfdKSOBriUUFhT7i8mgycS8kVwrQ9cu-ojjS9nPMM9G28K5YRtXyiHvwmPcF-bp79wiLo_HjowZUProYpxCuOIFnck_hd4D7J-7SGIfASmNlq_NG4nRpmqLF6geI6QABSSPOhDTspY9tpqBkUT2dUclTExG0OTY6KEmkynt-G8nH1dRyu1A"
            />
          </div>
          <div className="col-span-1 rounded-lg overflow-hidden shadow-sm relative bg-surface-container-high flex items-center justify-center p-stack-sm">
            <Image 
              alt="Culinary Care" 
              className="object-cover rounded" 
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaBA7CA8P5D3MrQdetu9EDhrjB0rjacq2rkzOjQJFqiMEAGPoxXHg-74Rd6MDvn3vYwLaSFfp8RvDReauY17Ta4aZavYVMrwkHn8ZbanZk9za0D9WF6xh1EWR8dZ8PdzBqdAyQ59UPnTjd2iu7pfyGyRKZOq5l-Q-dsrXEzatf-00O_Wz0ianlmYRMmqqQdZAI9xx7pCusKJ_PbuqLFq4Rku1jVZ-39Vun-CDU1C1OAuskQjT8iGNvgwutrORlf7_FnjwgnrgXvWU"
            />
          </div>
          <div className="col-span-1 rounded-lg overflow-hidden shadow-sm relative bg-primary-container p-stack-sm flex flex-col justify-center items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor" className="text-on-primary-container mb-unit"><path d="M280-80v-366q-51-14-85.5-56T160-598v-282h80v280h40v-280h80v280h40v-280h80v282q0 54-34.5 96T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z"/></svg>
            <p className="font-label-lg text-label-lg text-on-primary-container">Crafted with Heritage</p>
          </div>
        </div>
      </section>
    </div>
  );
}
