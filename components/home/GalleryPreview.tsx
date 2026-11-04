import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

const galleryItems = [
  {
    title: "Mountain Heritage",
    image: "/images/gallery/mountains.jpg",
  },
  {
    title: "Cultural Traditions",
    image: "/images/gallery/culture.jpg",
  },
  {
    title: "Community Heritage",
    image: "/images/gallery/community.jpg",
  },
  {
    title: "Traditional Life",
    image: "/images/gallery/tradition.jpg",
  },
];

export default function GalleryPreview() {
  return (
    <section className="bg-stone-100 px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <SectionHeading
          title="Heritage Gallery"
          subtitle="Explore photographs and visual stories celebrating Bakholokoe heritage."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group relative h-80 overflow-hidden rounded-2xl bg-green-950 shadow-lg"
            >

              <div
                className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

        <div className="mt-10 text-center">

          <Link
            href="/gallery"
            className="inline-block rounded-full bg-green-950 px-7 py-3 font-semibold text-white transition hover:bg-green-900"
          >
            View Full Gallery
          </Link>

        </div>

      </div>
    </section>
  );
}