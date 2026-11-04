const stats = [
  {
    number: "500+",
    title: "Years of Heritage",
  },
  {
    number: "10+",
    title: "Traditional Leaders",
  },
  {
    number: "1000+",
    title: "Community Members",
  },
  {
    number: "∞",
    title: "Legacy for Future Generations",
  },
];

export default function Statistics() {
  return (
    <section className="bg-green-950 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.title}>
            <h2 className="text-5xl font-bold text-yellow-400">
              {stat.number}
            </h2>

            <p className="mt-4 text-lg text-gray-200">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}