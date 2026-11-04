import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPreview() {
  return (
    <section className="bg-stone-100 px-6 py-20">

      <div className="mx-auto max-w-6xl">

        <SectionHeading
          title="Our Heritage"
          subtitle="Discover the history, identity and traditions of the Bakholokoe people."
        />


        <div className="grid gap-10 md:grid-cols-2">


          <div>

            <h3 className="text-3xl font-bold text-green-950">
              A Legacy Passed Through Generations
            </h3>


            <p className="mt-5 leading-relaxed text-gray-700">

              The Bakholokoe people carry a rich heritage built
              through ancestry, leadership, traditions and
              community values. This platform preserves these
              stories for future generations.

            </p>


          </div>



          <div className="rounded-2xl bg-green-950 p-8 text-white shadow-xl">


            <h3 className="text-2xl font-bold text-yellow-400">
              Our Mission
            </h3>


            <p className="mt-4 leading-relaxed text-gray-200">

              To digitally preserve Bakholokoe history,
              culture and oral traditions while creating a
              place where communities can share knowledge.

            </p>


          </div>


        </div>


      </div>

    </section>
  );
}