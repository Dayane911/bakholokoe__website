export default function AboutBakholokoe() {
  return (
    <section className="bg-stone-100 px-6 py-20">

      <div className="mx-auto max-w-6xl">

        <div className="grid gap-12 md:grid-cols-2 items-center">


          {/* Text */}
          <div>

            <p className="mb-3 text-sm font-semibold tracking-widest text-yellow-600">
              OUR ROOTS
            </p>


            <h2 className="text-4xl font-bold text-green-950">
              Who Are The Bakholokoe?
            </h2>


            <p className="mt-6 leading-relaxed text-gray-700">

              The Bakholokoe are one of the historic Basotho clans
              whose identity is built on a rich heritage of leadership,
              tradition, resilience and community.

            </p>


            <p className="mt-4 leading-relaxed text-gray-700">

              Through generations, the Bakholokoe have preserved
              their stories, customs, praise poetry and cultural
              knowledge, passing them from elders to future generations.

            </p>


            <button className="mt-8 rounded-full bg-green-950 px-7 py-3 font-semibold text-white transition hover:bg-green-800">

              Discover Our History

            </button>


          </div>



          {/* Heritage Card */}
          <div className="rounded-2xl bg-green-950 p-10 text-white shadow-xl">


            <h3 className="text-2xl font-bold text-yellow-400">
              Our Identity
            </h3>


            <ul className="mt-6 space-y-4">

              <li>
                🏔️ Ancestral Heritage
              </li>

              <li>
                👑 Traditional Leadership
              </li>

              <li>
                🎵 Lithoko & Oral History
              </li>

              <li>
                🌍 Community & Legacy
              </li>

            </ul>


          </div>


        </div>

      </div>

    </section>
  );
}