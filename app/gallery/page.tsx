const galleryItems = [
  {
    title: "King Letsitsa Moloi",
    description:
      "Bakholokoe Current King.",
    image: "/images/heritage/king-letsitsa-moloi.jpeg",
  },

  {
    title: "King Letsitsa Moloi III",
    description:
      "Bakholokoe Current King.",
    image: "/images/heritage/OIP.webp",
  },

  {
    title: "Mountain Heritage",
    description:
      "The landscape surrounding the communities and places remembered in Kholokoe history.",
    image: "/images/heritage/mountain-02.webp",
  },

  {
    title: "Thaba Kholokoe",
    description:
      "A landscape remembered in historical and oral traditions as an important place of Kholokoe settlement.",
    image: "/images/heritage/mountain-03.jpg",
  },

  {
    title: "Heritage Landscapes",
    description:
      "Natural landscapes that help preserve a visual connection with the history of the people.",
    image: "/images/heritage/mountain-04.webp",
  },

  {
    title: "Theme Gallery Picture",
    description:
      "Bakholokoe Queen Moloi.",
    image: "/images/heritage/queen-moloi.jpg",
  },
];

export default function GalleryPage() {
  return (
    <main>

      {/* Header */}

      <section className="bg-green-950 px-6 py-24 text-white">

        <div className="mx-auto max-w-5xl text-center">

          <p className="tracking-[0.3em] text-yellow-400">
            VISUAL ARCHIVE
          </p>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            Heritage Gallery
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-200">

            Explore photographs and visual stories celebrating
            Kholokoe heritage, landscapes and places connected
            with our history.

          </p>

        </div>

      </section>


      {/* Gallery */}

      <section className="bg-stone-100 px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-8 md:grid-cols-2">

            {galleryItems.map((item) => (

              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg"
              >

                {/* Image */}

                <div className="relative h-[380px] overflow-hidden">

                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${item.image}')`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                </div>


                {/* Information */}

                <div className="p-7">

                  <h2 className="text-2xl font-bold text-green-950">
                    {item.title}
                  </h2>

                  <p className="mt-3 leading-relaxed text-gray-700">
                    {item.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* Heritage Statement */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-yellow-50 p-10 text-center">

          <p className="text-sm font-semibold tracking-[0.25em] text-yellow-700">
            PRESERVING MEMORY
          </p>

          <h2 className="mt-4 text-3xl font-bold text-green-950">

            Every Image Tells a Story

          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-gray-700">

            Photographs can preserve places, people and memories
            that might otherwise disappear with time. This gallery
            will continue to grow as more historical photographs,
            family collections and community contributions are
            documented.

          </p>

        </div>

      </section>


      {/* Future Community Archive */}

      <section className="bg-green-950 px-6 py-20 text-white">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold tracking-[0.3em] text-yellow-400">
            FUTURE ARCHIVE
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            A Growing Community Collection
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-gray-200">

            Future versions of the Heritage Archive will allow
            approved contributors to submit photographs and
            historical material for review and preservation.

          </p>

        </div>

      </section>

    </main>
  );
}