type CardProps = {
  title: string;
  description: string;
  icon?: string;
};

export default function Card({
  title,
  description,
  icon,
}: CardProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2">

      {icon && (
        <div className="text-5xl">
          {icon}
        </div>
      )}

      <h3 className="mt-5 text-2xl font-bold text-green-950">
        {title}
      </h3>

      <p className="mt-4 text-gray-700 leading-relaxed">
        {description}
      </p>

    </div>
  );
}