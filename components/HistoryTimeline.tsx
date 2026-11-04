const timeline = [
  {
    year: "Origins",
    title: "The Beginning of the Bakholokoe",
    description:
      "The Bakholokoe are part of the rich history of the Basotho people, carrying traditions, identity and ancestral knowledge through generations.",
  },

  {
    year: "Migration",
    title: "The Journey of Our Ancestors",
    description:
      "Like many Southern African communities, the Bakholokoe history reflects movement, adaptation and the preservation of cultural identity.",
  },

  {
    year: "Leadership",
    title: "Traditional Leadership",
    description:
      "Leadership has always played an important role in maintaining unity, values and cultural continuity among the Bakholokoe.",
  },

  {
    year: "Today",
    title: "A Living Heritage",
    description:
      "The Bakholokoe legacy continues through families, traditions, language, stories and cultural practices.",
  },
];


export default function HistoryTimeline() {

  return (

    <section className="bg-white px-6 py-20">

      <div className="mx-auto max-w-5xl">


        <div className="text-center">

          <p className="text-sm font-semibold tracking-widest text-yellow-600">
            OUR JOURNEY
          </p>


          <h2 className="mt-3 text-4xl font-bold text-green-950">
            History Timeline
          </h2>

        </div>



        <div className="mt-12 space-y-8">


          {timeline.map((item, index) => (

            <div
              key={index}
              className="rounded-2xl border-l-4 border-yellow-500 bg-stone-100 p-8 shadow-sm"
            >

              <span className="font-bold text-green-900">
                {item.year}
              </span>


              <h3 className="mt-2 text-2xl font-bold">
                {item.title}
              </h3>


              <p className="mt-3 leading-relaxed text-gray-700">
                {item.description}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>

  );
}