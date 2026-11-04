export default function ContactPage() {

  return (

    <main>


      {/* Header */}

      <section className="bg-green-950 px-6 py-24 text-white">

        <div className="mx-auto max-w-5xl text-center">


          <p className="tracking-widest text-yellow-400">
            COMMUNITY
          </p>


          <h1 className="mt-4 text-5xl font-bold">
            Connect With Bakholokoe Heritage
          </h1>


          <p className="mx-auto mt-6 max-w-3xl text-gray-200">

            Share stories, contribute knowledge and help preserve
            the heritage of future generations.

          </p>


        </div>

      </section>



      {/* Content */}

      <section className="bg-stone-100 px-6 py-20">


        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">



          {/* Information */}

          <div>

            <h2 className="text-3xl font-bold text-green-950">
              Preserve Our Stories
            </h2>


            <p className="mt-5 leading-relaxed text-gray-700">

              This platform welcomes contributions from community
              members, historians and elders who want to share
              knowledge about Bakholokoe heritage.

            </p>


            <div className="mt-8 space-y-4">


              <div className="rounded-xl bg-white p-5 shadow">
                📜 Historical Stories
              </div>


              <div className="rounded-xl bg-white p-5 shadow">
                🎵 Lithoko Contributions
              </div>


              <div className="rounded-xl bg-white p-5 shadow">
                📸 Historical Images
              </div>


            </div>


          </div>



          {/* Form */}

          <div className="rounded-2xl bg-white p-8 shadow-lg">


            <h2 className="text-2xl font-bold text-green-950">
              Send A Message
            </h2>


            <form className="mt-6 space-y-5">


              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border p-3"
              />


              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border p-3"
              />


              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full rounded-lg border p-3"
              />


              <button
                className="rounded-full bg-green-950 px-8 py-3 text-white hover:bg-green-800"
              >
                Send Message
              </button>


            </form>


          </div>


        </div>


      </section>


    </main>

  );

}