const chiefs = [
  {
    name: "Traditional Leadership",
    role: "Guardians of Heritage",
    description:
      "Leaders who preserve the values, traditions and identity of the Bakholokoe people.",
  },

  {
    name: "Ancestral Leaders",
    role: "Foundations of Our History",
    description:
      "The elders and leaders whose wisdom shaped generations of Bakholokoe communities.",
  },

  {
    name: "Future Generations",
    role: "Continuing The Legacy",
    description:
      "Young leaders carrying the responsibility of protecting and celebrating Bakholokoe heritage.",
  },
];


export default function ChiefsSection() {

  return (

    <section className="bg-green-950 px-6 py-20 text-white">

      <div className="mx-auto max-w-6xl">


        <div className="text-center">

          <p className="text-sm font-semibold tracking-widest text-yellow-400">
            LEADERSHIP
          </p>


          <h2 className="mt-3 text-4xl font-bold">
            Chiefs & Royal Heritage
          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-gray-300">
            Honouring the leaders, elders and traditions that
            have guided the Bakholokoe people through generations.
          </p>

        </div>



        <div className="mt-12 grid gap-8 md:grid-cols-3">


          {chiefs.map((chief, index) => (

            <div
              key={index}
              className="rounded-2xl bg-white p-8 text-gray-900 shadow-xl"
            >

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-3xl">
                👑
              </div>


              <h3 className="text-2xl font-bold text-green-950">
                {chief.name}
              </h3>


              <p className="mt-2 font-semibold text-yellow-700">
                {chief.role}
              </p>


              <p className="mt-4 text-gray-700">
                {chief.description}
              </p>


            </div>

          ))}


        </div>


      </div>


    </section>

  );

}