import Link from "next/link";

export default function Footer() {

  return (

    <footer className="bg-green-950 px-6 py-12 text-white">


      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">


        {/* Brand */}

        <div>

          <h2 className="text-2xl font-bold text-yellow-400">
            Bakholokoe Heritage
          </h2>


          <p className="mt-4 text-gray-300">

            Preserving history, culture and stories
            for future generations.

          </p>


        </div>



        {/* Navigation */}

        <div>

          <h3 className="font-bold">
            Explore
          </h3>


          <div className="mt-4 flex flex-col gap-3 text-gray-300">


            <Link href="/history">
              History
            </Link>


            <Link href="/leadership">
              Leadership
            </Link>


            <Link href="/culture">
              Culture
            </Link>


            <Link href="/lithoko">
              Lithoko
            </Link>


          </div>


        </div>



        {/* Contact */}

        <div>

          <h3 className="font-bold">
            Community
          </h3>


          <p className="mt-4 text-gray-300">

            Help preserve and share
            Bakholokoe heritage.

          </p>


          <Link
            href="/contact"
            className="mt-5 inline-block rounded-full bg-yellow-500 px-6 py-2 text-green-950"
          >
            Contact Us
          </Link>


        </div>


      </div>



      <div className="mx-auto mt-10 max-w-6xl border-t border-white/20 pt-6 text-center text-sm text-gray-400">

        © {new Date().getFullYear()} Bakholokoe Heritage. All rights reserved. Developed by Thapelo Mohasoa.

      </div>


    </footer>

  );

}