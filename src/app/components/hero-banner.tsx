export default function HeroBanner() {
  return (
    <div>
      <div className="absolute inset-0 z-0 w-full h-full overflow-x-hidden">
        <img
          src="/fot.jpg"
          alt="City background"
          className="object-cover w-full h-full block"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        {/* Centered profile photo */}
        <div className="relative mb-12">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img
              src="/fermoran.jpeg?height=256&width=256"
              alt="Profile photo"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Name below photo */}
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 text-center">
          Fernando Morán Fougerat
        </h2>
      </div>
    </div>
  );
}
