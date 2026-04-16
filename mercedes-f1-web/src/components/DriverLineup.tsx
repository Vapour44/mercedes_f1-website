import Image from "next/image";

const drivers = [
  {
    name: "George Russell",
    number: "63",
    image: "/russell.jpg",
  },
  {
    name: "Kimi Antonelli",
    number: "12",
    image: "/antonelli.jpg",
  },
];

export default function DriverLineup() {
  return (
    <section className="w-full px-6 lg:px-24 py-24 lg:py-32 bg-mercedes-obsidian relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-mercedes-silver mb-16 border-l-4 border-petronas-green pl-6">
          2026 Driver Lineup
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {drivers.map((driver) => (
            <div
              key={driver.number}
              className="group relative bg-[#1a1a1a] border border-mercedes-silver/20 rounded-lg overflow-hidden transition-all duration-500 hover:border-petronas-green hover:shadow-[0_0_30px_rgba(0,161,155,0.4)] flex flex-col h-[500px] lg:h-[600px]"
            >
              {/* Huge Watermark Number */}
              <div className="absolute -bottom-10 -right-10 text-[250px] lg:text-[350px] font-black leading-none text-white opacity-5 transition-all duration-700 ease-out group-hover:opacity-15 group-hover:-translate-y-4 group-hover:-translate-x-4 pointer-events-none select-none z-20">
                {driver.number}
              </div>

              {/* Driver Text Info */}
              <div className="p-8 lg:p-12 z-30 flex flex-col items-start gap-2 relative">
                <span className="text-petronas-green text-3xl lg:text-5xl font-black italic">
                  {driver.number}
                </span>
                <h3 className="text-3xl lg:text-4xl text-white font-bold uppercase tracking-wider">
                  {driver.name}
                </h3>
              </div>

              {/* Driver Image */}
              <div className="relative flex-1 w-full flex items-end justify-center mt-auto z-10">
                <div className="relative w-[80%] h-[90%] transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2 origin-bottom">
                  <Image
                    src={driver.image}
                    alt={driver.name}
                    fill
                    className="object-contain object-bottom"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
