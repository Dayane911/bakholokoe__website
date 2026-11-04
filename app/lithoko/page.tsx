const lithokoSections = [
  {
    title: "Praise Poetry",
    description:
      "A space for preserving praise poetry and expressions connected with Kholokoe identity and ancestry.",
    icon: "🎵",
  },

  {
    title: "Clan & Family Praise",
    description:
      "Document praise names and expressions associated with families, houses and lineages.",
    icon: "🪶",
  },

  {
    title: "Names & Meanings",
    description:
      "Preserve important names, praise names and the meanings or histories associated with them.",
    icon: "📜",
  },

  {
    title: "Oral Traditions",
    description:
      "Record stories, spoken traditions and knowledge passed between generations.",
    icon: "🗣️",
  },
];

const archivePrinciples = [
  "Preserve the original wording where possible.",
  "Identify the person, family or community associated with an entry.",
  "Record the source of the material.",
  "Distinguish documented material from oral tradition.",
  "Respect cultural ownership and community knowledge.",
];

export default function LithokoPage() {
  return (
    <main>

      {/* Header */}

      <section className="relative overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/heritage/mountain-04.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-green-950/80" />

        <div className="relative z-10 px-6 py-28 text-white">

          <div className="mx-auto max-w-5xl text-center">

            <p className="tracking-[0.3em] text-yellow-400">
              ORAL HERITAGE
            </p>

            <h1 className="mt-4 text-5xl font-bold md:text-6xl">
              Lithoko
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-200">

              Preserving praise poetry, oral traditions, names and
              ancestral memories for future generations.

            </p>

          </div>

        </div>

      </section>


      {/* Introduction */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold tracking-[0.3em] text-yellow-600">
            ORAL TRADITION
          </p>

          <h2 className="mt-4 text-4xl font-bold text-green-950">
            Words That Preserve Memory
          </h2>

          <p className="mt-6 leading-relaxed text-gray-700">

            Lithoko and oral traditions can carry memories of
            ancestry, identity, places, leaders and generations.
            Preserving these traditions creates a connection between
            historical knowledge and the people who continue to
            carry it.

          </p>

        </div>

      </section>


      {/* Categories */}

      <section className="bg-stone-100 px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {lithokoSections.map((item) => (

              <article
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="text-5xl">
                  {item.icon}
                </div>

                <h2 className="mt-6 text-xl font-bold text-green-950">
                  {item.title}
                </h2>

                <p className="mt-4 leading-relaxed text-gray-700">
                  {item.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* Featured Archive */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-green-950 p-10 text-white md:p-14">

          <p className="text-sm font-semibold tracking-[0.3em] text-yellow-400">
            LITHOKO ARCHIVE
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            The Archive Will Grow With the Community
          </h2>

          <p className="mt-6 leading-relaxed text-gray-200">

            The initial archive provides a foundation for recording
            authentic Lithoko and oral traditions. As research and
            community contributions grow, individual entries can be
            added with their associated names, meanings, sources and
            historical context.

          </p>

        </div>

      </section>


      {/* Archive Principles */}

      <section className="bg-yellow-50 px-6 py-20">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <p className="text-sm font-semibold tracking-[0.3em] text-yellow-700">
              PRESERVATION PRINCIPLES
            </p>

            <h2 className="mt-4 text-4xl font-bold text-green-950">
              Preserving Lithoko Responsibly
            </h2>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {archivePrinciples.map((principle, index) => (

              <div
                key={index}
                className="rounded-xl bg-white p-6 shadow-sm"
              >

                <div className="flex gap-4">

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-950 font-bold text-white">
                    {index + 1}
                  </span>

                  <p className="leading-relaxed text-gray-700">
                    {principle}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Future Contribution */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold tracking-[0.3em] text-yellow-600">
            FUTURE CONTRIBUTIONS
          </p>

          <h2 className="mt-4 text-4xl font-bold text-green-950">
            Share a Heritage Record
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-gray-700">

            Future versions of the platform can allow approved
            community members, elders, researchers and historians
            to submit Lithoko, oral histories, recordings and
            supporting information for review.

          </p>

        </div>

      </section>

    </main>
  );
}