import SectionHeading from "@/components/ui/SectionHeading";

const timeline = [
  {
    period: "Origins",
    title: "Ancestral Roots",
    description:
      "Accounts of Kholokoe ancestry connect the people with wider Bantu-speaking communities and traditions of lineage associated with the Ba-Hurutshe and Bakgatla.",
  },

  {
    period: "16th–17th Century",
    title: "Kgetsi / Khetsi",
    description:
      "Kgetsi, also known as Khetsi or Lekholokoe in some accounts, is associated with an important period in the early history and movement of the Kholokoe people.",
  },

  {
    period: "Settlement",
    title: "Thaba Kholokoe",
    description:
      "According to historical and oral accounts, Kgetsi and his followers moved eastward and north of the Lekoa (Vaal), eventually establishing themselves around the mountain known as Thaba Kholokoe.",
  },

  {
    period: "Generations",
    title: "The Kholokoe Lineage",
    description:
      "Traditions preserve a succession of leaders including Moloi, Hlabathe, Sehoala or Sehoele, Tjale, Tsholedi, Motsoane, Mokholoane and Matsemela.",
  },

  {
    period: "19th Century",
    title: "Migration & Expansion",
    description:
      "Kholokoe communities became established across areas of the northern Free State, Natal and regions around the Vaal River, including areas associated with Witsieshoek and Harrismith.",
  },

  {
    period: "1820s",
    title: "Conflict & Displacement",
    description:
      "The Kholokoe experienced attacks and conflicts during a period of major political and military upheaval in southern Africa, including attacks associated with Matiwane and Mzilikazi.",
  },

  {
    period: "19th–20th Century",
    title: "Land Dispossession",
    description:
      "Kholokoe history also includes accounts of land dispossession, forced removals and disputes with colonial authorities over ancestral territories.",
  },

  {
    period: "Today",
    title: "Preserving the Heritage",
    description:
      "The history of the Kholokoe continues through families, communities, oral traditions, historical records and efforts to preserve cultural identity for future generations.",
  },
];

export default function HistoryPage() {
  return (
    <main>

      {/* Hero */}

      <section className="relative overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/heritage/mountain-03.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-green-950/75" />

        <div className="relative z-10 px-6 py-28 text-white">

          <div className="mx-auto max-w-5xl text-center">

            <p className="tracking-[0.3em] text-yellow-400">
              OUR STORY
            </p>

            <h1 className="mt-4 text-5xl font-bold md:text-6xl">
              History of the Kholokoe
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-200">

              Discover the origins, movements, leadership, struggles
              and heritage of the Kholokoe people.

            </p>

          </div>

        </div>

      </section>


      {/* Introduction */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl">

          <SectionHeading
            title="A History Preserved Through Generations"
            subtitle="The story of the Kholokoe is preserved through historical records, family histories and oral traditions."
          />

          <p className="text-center leading-relaxed text-gray-700">

            The history of the Kholokoe people spans generations of
            migration, settlement, leadership, conflict and cultural
            continuity. Different historical and oral sources provide
            different perspectives on aspects of this history. This
            archive therefore aims to preserve these accounts while
            clearly distinguishing documented information from
            traditions that require further research.

          </p>

        </div>

      </section>


      {/* Timeline */}

      <section className="bg-stone-100 px-6 py-20">

        <div className="mx-auto max-w-5xl">

          <SectionHeading
            title="Historical Timeline"
            subtitle="Important periods and events connected with Kholokoe history."
          />


          <div className="mt-16 space-y-8">

            {timeline.map((item, index) => (

              <article
                key={index}
                className="relative rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex flex-col gap-5 md:flex-row">

                  <div className="md:w-40">

                    <p className="font-semibold tracking-wide text-yellow-600">
                      {item.period}
                    </p>

                  </div>


                  <div className="flex-1">

                    <h2 className="text-2xl font-bold text-green-950">
                      {item.title}
                    </h2>

                    <p className="mt-3 leading-relaxed text-gray-700">
                      {item.description}
                    </p>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* Thaba Kholokoe */}

      <section className="px-6 py-20">

        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          <div
            className="h-[420px] rounded-3xl bg-cover bg-center shadow-xl"
            style={{
              backgroundImage:
                "url('/images/heritage/mountain-03.jpg')",
            }}
          />

          <div>

            <p className="text-sm font-semibold tracking-[0.25em] text-yellow-600">
              ANCESTRAL LANDSCAPE
            </p>

            <h2 className="mt-4 text-4xl font-bold text-green-950">
              Thaba Kholokoe
            </h2>

            <p className="mt-6 leading-relaxed text-gray-700">

              Thaba Kholokoe is remembered in Kholokoe historical
              traditions as an important place of settlement and
              identity. Accounts associate the area with generations
              of Kholokoe communities before later conflict and
              displacement transformed the region.

            </p>

            <p className="mt-4 leading-relaxed text-gray-700">

              The landscape is therefore more than a geographical
              location. It forms part of the ancestral memory
              through which generations understand their origins
              and movement.

            </p>

          </div>

        </div>

      </section>


      {/* Land History */}

      <section className="bg-green-950 px-6 py-20 text-white">

        <div className="mx-auto max-w-5xl">

          <p className="text-sm font-semibold tracking-[0.25em] text-yellow-400">
            LAND & MEMORY
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Land Dispossession
          </h2>

          <p className="mt-6 leading-relaxed text-gray-200">

            Land dispossession forms an important part of the
            historical experience described in accounts of the
            Kholokoe. During the nineteenth and twentieth centuries,
            communities faced changing colonial administrations,
            territorial restrictions and forced removals.

          </p>

          <p className="mt-4 leading-relaxed text-gray-200">

            These events affected not only access to land but also
            communities, traditional leadership and the preservation
            of historical identity. The subject deserves careful
            documentation using archival records and community
            histories.

          </p>

        </div>

      </section>


      {/* Preservation */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-yellow-50 p-10">

          <p className="text-sm font-semibold tracking-[0.25em] text-yellow-700">
            PRESERVATION
          </p>

          <h2 className="mt-4 text-3xl font-bold text-green-950">
            Keeping the Story Alive
          </h2>

          <p className="mt-4 leading-relaxed text-gray-700">

            Preserving Kholokoe history requires bringing together
            written records, oral histories, family knowledge,
            photographs and community contributions. This website
            is intended to become a growing archive where such
            material can be carefully recorded and preserved.

          </p>

        </div>

      </section>

    </main>
  );
}