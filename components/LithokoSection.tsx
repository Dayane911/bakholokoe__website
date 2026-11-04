const lithoko = [
  {
    title: "Bakholokoe Praise",
    category: "Clan Identity",
    description:
      "A collection of praise expressions that celebrate the history, courage and identity of the Bakholokoe people.",
  },

  {
    title: "Voices of the Elders",
    category: "Oral Tradition",
    description:
      "Preserving stories and wisdom shared through generations by elders and community members.",
  },

  {
    title: "Meaning Behind The Words",
    category: "Cultural Knowledge",
    description:
      "Exploring the meaning, symbolism and historical importance of traditional praises.",
  },
];


export default function LithokoSection() {

  return (

    <section className="bg-stone-100 px-6 py-20">

      <div className="mx-auto max-w-6xl">


        <div className="text-center">

          <p className="text-sm font-semibold tracking-widest text-yellow-600">
            ORAL HERITAGE
          </p>


          <h2 className="mt-3 text-4xl font-bold text-green-950">
            Lithoko Archive
          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-gray-700">
            Preserving the voices, praises and stories that connect
            generations of Bakholokoe.
          </p>


        </div>



        <div className="mt-12 grid gap-8 md:grid-cols-3">


          {lithoko.map((item,index)=>(

            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
            >

              <div className="text-4xl">
                🎵
              </div>


              <h3 className="mt-5 text-2xl font-bold text-green-950">
                {item.title}
              </h3>


              <p className="mt-2 font-semibold text-yellow-600">
                {item.category}
              </p>


              <p className="mt-4 text-gray-700">
                {item.description}
              </p>


              <button className="mt-6 rounded-full bg-green-950 px-5 py-2 text-white hover:bg-green-800">
                Explore
              </button>


            </div>


          ))}


        </div>


      </div>

    </section>

  );

}