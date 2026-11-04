const leaders = [
  {
    name: "Kgetsi / Khetsi",
    period: "Early Kholokoe tradition",
    description:
      "Kgetsi, also referred to as Khetsi or Lekholokoe in some accounts, is associated with an important early period in the history and movement of the Kholokoe people.",
  },

  {
    name: "Moloi",
    period: "Early lineage",
    description:
      "Moloi is remembered in genealogical traditions as part of the lineage connecting Kgetsi / Khetsi with later generations of Kholokoe leadership.",
  },

  {
    name: "Hlabathe",
    period: "Early lineage",
    description:
      "Hlabathe, also recorded in some accounts as part of the Sehoala or Sehoele lineage, is included among the generations preserved in Kholokoe genealogical traditions.",
  },

  {
    name: "Sehoala / Sehoele",
    period: "Early lineage",
    description:
      "Sehoala, also known as Sehoele in some accounts, forms part of the recorded succession leading toward later Kholokoe generations.",
  },

  {
    name: "Tjale",
    period: "Early lineage",
    description:
      "Tjale is remembered as a descendant within the lineage connecting earlier Kholokoe generations with Tsholedi and the generations that followed.",
  },

  {
    name: "Tsholedi",
    period: "Early lineage",
    description:
      "Tsholedi appears in genealogical accounts as a descendant of Tjale and an ancestor of Motsoane.",
  },

  {
    name: "Motsoane",
    period: "Early lineage",
    description:
      "Motsoane is recorded in genealogical traditions as a descendant of Tsholedi and an ancestor of Mokholoane.",
  },

  {
    name: "Mokholoane",
    period: "Early lineage",
    description:
      "Mokholoane is remembered as a generation in the lineage preceding Matsemela and the later Kholokoe houses.",
  },

  {
    name: "Matsemela",
    period: "Later lineage",
    description:
      "Matsemela is associated with the later Kholokoe lineage and is remembered in traditions concerning the houses that followed.",
  },

  {
    name: "Wetsi / Oetsi",
    period: "19th century",
    description:
      "Morena Wetsi, also referred to as Oetsi or Witsie in some accounts, is associated with Kholokoe communities in the Witsieshoek and Natal regions during a period of conflict and displacement.",
  },

  {
    name: "Letlatsa Moloi",
    period: "19th century",
    description:
      "Morena Letlatsa Moloi is associated with the Kholokoe leadership and historical struggles over land during the nineteenth century.",
  },
];


export default function LeadershipPage() {

  return (

    <main>


      {/* Header */}

      <section className="relative overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/heritage/mountain-01.webp')",
          }}
        />

        <div className="absolute inset-0 bg-green-950/80" />


        <div className="relative z-10 px-6 py-28 text-white">

          <div className="mx-auto max-w-5xl text-center">

            <p className="tracking-[0.3em] text-yellow-400">
              TRADITIONAL LEADERSHIP
            </p>


            <h1 className="mt-4 text-5xl font-bold md:text-6xl">
              Leaders & Lineage
            </h1>


            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-200">

              Explore generations of traditional leadership and
              genealogical traditions connected with Kholokoe history.

            </p>

          </div>

        </div>

      </section>


      {/* Introduction */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold tracking-[0.3em] text-yellow-600">
            LEADERSHIP & HERITAGE
          </p>


          <h2 className="mt-4 text-4xl font-bold text-green-950">

            A Lineage Preserved Through Generations

          </h2>


          <p className="mt-6 leading-relaxed text-gray-700">

            Traditional leadership has played an important role in
            preserving identity, community organisation and historical
            memory. Kholokoe genealogical traditions preserve names
            and relationships across generations, providing an
            important foundation for understanding the history of
            the people.

          </p>

        </div>

      </section>


      {/* Leaders */}

      <section className="bg-stone-100 px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {leaders.map((leader) => (

              <article
                key={leader.name}
                className="group rounded-2xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-950 text-2xl">
                  👑
                </div>


                <p className="mt-6 text-sm font-semibold tracking-wide text-yellow-600">
                  {leader.period}
                </p>


                <h2 className="mt-2 text-2xl font-bold text-green-950">
                  {leader.name}
                </h2>


                <p className="mt-4 leading-relaxed text-gray-700">
                  {leader.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* Lineage */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl">

          <div className="rounded-3xl bg-green-950 p-10 text-white md:p-14">

            <p className="text-sm font-semibold tracking-[0.3em] text-yellow-400">
              GENEALOGICAL TRADITION
            </p>


            <h2 className="mt-4 text-4xl font-bold">
              A Recorded Lineage
            </h2>


            <div className="mt-10 overflow-x-auto">

              <div className="min-w-[700px] text-center">

                <div className="rounded-xl bg-white/10 p-5">
                  Kgetsi / Khetsi
                </div>

                <div className="py-3 text-yellow-400">
                  ↓
                </div>

                <div className="rounded-xl bg-white/10 p-5">
                  Moloi
                </div>

                <div className="py-3 text-yellow-400">
                  ↓
                </div>

                <div className="rounded-xl bg-white/10 p-5">
                  Hlabathe → Sehoala / Sehoele
                </div>

                <div className="py-3 text-yellow-400">
                  ↓
                </div>

                <div className="rounded-xl bg-white/10 p-5">
                  Tjale → Tsholedi → Motsoane
                </div>

                <div className="py-3 text-yellow-400">
                  ↓
                </div>

                <div className="rounded-xl bg-white/10 p-5">
                  Mokholoane → Matsemela
                </div>

              </div>

            </div>


            <p className="mt-10 leading-relaxed text-gray-200">

              This lineage represents information found in
              genealogical and oral traditions. The Heritage Archive
              will continue comparing these traditions with historical
              and archival sources as research develops.

            </p>

          </div>

        </div>

      </section>


      {/* Leadership & Community */}

      <section className="px-6 py-20">

        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">


          <div>

            <p className="text-sm font-semibold tracking-[0.3em] text-yellow-600">
              COMMUNITY
            </p>


            <h2 className="mt-4 text-4xl font-bold text-green-950">

              Leadership Beyond Names

            </h2>


            <p className="mt-6 leading-relaxed text-gray-700">

              Traditional leadership was not only about succession.
              Leaders played roles in community organisation,
              protection, settlement, relationships between families
              and the preservation of cultural identity.

            </p>


            <p className="mt-4 leading-relaxed text-gray-700">

              Understanding these roles helps place individual
              leaders within the wider history of the communities
              they served.

            </p>

          </div>


          <div
            className="h-[420px] rounded-3xl bg-cover bg-center shadow-xl"
            style={{
              backgroundImage:
                "url('/images/heritage/mountain-02.webp')",
            }}
          />

        </div>

      </section>


      {/* Research Notice */}

      <section className="bg-yellow-50 px-6 py-20">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold tracking-[0.3em] text-yellow-700">
            HISTORICAL RESEARCH
          </p>


          <h2 className="mt-4 text-3xl font-bold text-green-950">

            Preserving Accurate Leadership History

          </h2>


          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-gray-700">

            Genealogies and traditional leadership histories may
            differ between oral accounts, family records and written
            sources. This archive will identify sources and preserve
            different accounts rather than presenting uncertain
            information as established fact.

          </p>

        </div>

      </section>


    </main>

  );

}