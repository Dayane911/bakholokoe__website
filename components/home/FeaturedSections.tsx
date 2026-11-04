import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";


const sections = [
  {
    title: "History",
    description:
      "Explore the origins, migration, leaders and important events that shaped the Bakholokoe people.",
    icon: "📜",
  },

  {
    title: "Culture",
    description:
      "Discover traditions, ceremonies, values and practices that define Bakholokoe identity.",
    icon: "🌿",
  },

  {
    title: "Leadership",
    description:
      "Learn about chiefs, royal lineage and traditional leadership structures.",
    icon: "👑",
  },

  {
    title: "Lithoko",
    description:
      "Preserve praise poetry, oral traditions and ancestral stories passed through generations.",
    icon: "🎵",
  },

];


export default function FeaturedSections() {

  return (

    <section className="bg-white px-6 py-20">


      <div className="mx-auto max-w-6xl">


        <SectionHeading

          title="Explore Our Heritage"

          subtitle="Discover different parts of Bakholokoe history and identity."

        />



        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">


          {sections.map((section, index) => (

            <Card

              key={index}

              title={section.title}

              description={section.description}

              icon={section.icon}

            />

          ))}


        </div>


      </div>


    </section>

  );

}