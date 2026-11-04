import SectionHeading from "@/components/ui/SectionHeading";

const cultureSections = [
  {
    title: "Traditions & Customs",
    description:
      "Explore customs and practices that have helped preserve Kholokoe identity and community life across generations.",
    icon: "🌿",
  },

  {
    title: "Clothing & Appearance",
    description:
      "Discover traditional forms of clothing, adornment and visual expression associated with community identity.",
    icon: "🧥",
  },

  {
    title: "Ceremonies & Celebrations",
    description:
      "Learn about gatherings, ceremonies and celebrations through which knowledge and cultural values are shared.",
    icon: "🎉",
  },

  {
    title: "Language & Identity",
    description:
      "Explore the role of language, names, oral expression and storytelling in preserving cultural identity.",
    icon: "🗣️",
  },

  {
    title: "Community Values",
    description:
      "Discover values surrounding family, community relationships, respect, responsibility and intergenerational knowledge.",
    icon: "🤝",
  },

  {
    title: "Traditional Life",
    description:
      "Explore aspects of everyday life, including food, livelihoods, family structures and connections with the land.",
    icon: "🏡",
  },
];


export default function CulturePage() {

  return (

    <main>


      {/* Header */}

      <section className="relative overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/heritage/mountain-04.webp')",
          }}
        />

        <div className="absolute inset-0 bg-green-950/75" />


        <div className="relative z-10 px-6 py-28 text-white">

          <div className="mx-auto max-w-5xl text-center">

            <p className="tracking-[0.3em] text-yellow-400">
              LIVING HERITAGE
            </p>


            <h1 className="mt-4 text-5xl font-bold md:text-6xl">
              Culture & Traditions
            </h1>


            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-200">

              Discover the traditions, values, language and
              everyday practices that contribute to Kholokoe
              cultural identity.

            </p>

          </div>

        </div>

      </section>



      {/* Introduction */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl">

          <SectionHeading
            title="A Living Culture"
            subtitle="Culture is preserved not only through historical records, but through the people who continue to carry traditions forward."
          />


          <p className="text-center leading-relaxed text-gray-700">

            Kholokoe cultural heritage includes traditions,
            language, community relationships, ceremonies,
            storytelling and knowledge passed between generations.
            Some traditions may differ between families and
            communities, so this archive will document cultural
            practices carefully and respectfully.

          </p>

        </div>

      </section>



      {/* Culture Categories */}

      <section className="bg-stone-100 px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <SectionHeading
            title="Explore Our Culture"
            subtitle="Different aspects of cultural life that we will document and preserve."
          />


          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {cultureSections.map((item, index) => (

              <article
                key={index}
                className="rounded-2xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="text-5xl">
                  {item.icon}
                </div>


                <h2 className="mt-6 text-2xl font-bold text-green-950">
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



      {/* Heritage & Generations */}

      <section className="px-6 py-20">

        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">


          <div>

            <p className="text-sm font-semibold tracking-[0.25em] text-yellow-600">
              INTERGENERATIONAL KNOWLEDGE
            </p>


            <h2 className="mt-4 text-4xl font-bold text-green-950">

              Passed From Generation to Generation

            </h2>


            <p className="mt-6 leading-relaxed text-gray-700">

              Much cultural knowledge is preserved through
              families, elders, storytelling and participation in
              community life. Recording these traditions can help
              younger generations understand where their identity
              comes from.

            </p>


            <p className="mt-4 leading-relaxed text-gray-700">

              The Heritage Archive will provide a space for
              documented cultural information as well as carefully
              identified community knowledge.

            </p>

          </div>


          <div
            className="h-[420px] rounded-3xl bg-cover bg-center shadow-xl"
            style={{
              backgroundImage:
                "url('/images/heritage/mountain-01.webp')",
            }}
          />

        </div>

      </section>



      {/* Community Preservation */}

      <section className="bg-green-950 px-6 py-20 text-white">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold tracking-[0.25em] text-yellow-400">
            CULTURAL PRESERVATION
          </p>


          <h2 className="mt-4 text-4xl font-bold">
            Culture Belongs to the People
          </h2>


          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-gray-200">

            A heritage archive should respect the people whose
            traditions it records. Future contributions can help
            preserve family knowledge, photographs, stories and
            cultural practices while identifying their sources.

          </p>

        </div>

      </section>



      {/* Coming Soon */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-yellow-50 p-10">

          <p className="text-sm font-semibold tracking-[0.25em] text-yellow-700">
            HERITAGE ARCHIVE
          </p>


          <h2 className="mt-4 text-3xl font-bold text-green-950">

            More Cultural Knowledge Coming Soon

          </h2>


          <p className="mt-4 leading-relaxed text-gray-700">

            As research and community contributions grow, this
            section can become a detailed archive of traditions,
            ceremonies, language, clothing, food and everyday
            cultural life.

          </p>

        </div>

      </section>


    </main>

  );

}