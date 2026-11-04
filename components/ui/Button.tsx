import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-block rounded-full bg-yellow-500 px-6 py-3 font-semibold text-green-950 transition hover:bg-yellow-400"
    >
      {children}
    </Link>
  );
}