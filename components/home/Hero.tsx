import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">

      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/heritage/mountain-03.jpg')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/55" />


      {/* Hero Content */}

      <div className="relative z-10 flex min-h-[85vh] items-center justify-center px-6">

        <div className="mx-auto max-w-5xl text-center text-white">

          <p className="mb-5 text-sm font-semibold tracking-[0.35em] text-yellow-400 md:text-base">
            BAKHOLOKOE HERITAGE
          </p>


          <h1 className="text-5xl font-bold leading-tight md:text-7xl">

            Preserving Our
            <span className="block text-yellow-400">
              History & Heritage
            </span>

          </h1>


          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">

            Discover the history, culture, leadership and
            oral traditions of the Bakholokoe people.

          </p>


          {/* Buttons */}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/history"
              className="rounded-full bg-yellow-500 px-8 py-3 font-semibold text-green-950 transition hover:bg-yellow-400"
            >
              Explore Our History
            </Link>


            <Link
              href="/gallery"
              className="rounded-full border border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-green-950"
            >
              View Gallery
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}