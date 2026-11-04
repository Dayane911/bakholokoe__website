const dashboardItems = [
  {
    title: "History",
    description: "Manage historical articles and important events.",
    icon: "📜",
    href: "#",
  },

  {
    title: "Culture",
    description: "Manage traditions, customs and cultural information.",
    icon: "🌿",
    href: "#",
  },

  {
    title: "Leadership",
    description: "Manage traditional leaders and genealogical records.",
    icon: "👑",
    href: "#",
  },

  {
    title: "Lithoko",
    description: "Manage praise poetry and oral heritage records.",
    icon: "🎵",
    href: "#",
  },

  {
    title: "Gallery",
    description: "Manage photographs and visual heritage.",
    icon: "🏔️",
    href: "#",
  },

  {
    title: "Contributors",
    description: "Manage community contributors and researchers.",
    icon: "👥",
    href: "#",
  },
];

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-stone-100">

      {/* Header */}

      <section className="bg-green-950 px-6 py-10 text-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>

            <p className="text-sm font-semibold tracking-[0.3em] text-yellow-400">
              BAKHOLOKOE HERITAGE
            </p>

            <h1 className="mt-2 text-3xl font-bold md:text-4xl">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-gray-300">
              Manage and preserve the Heritage Archive.
            </p>

          </div>


          <div className="flex gap-3">

            <button
              type="button"
              className="rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-green-950"
            >
              View Website
            </button>

            <button
              type="button"
              className="rounded-xl bg-yellow-500 px-5 py-3 text-sm font-semibold text-green-950 transition hover:bg-yellow-400"
            >
              Logout
            </button>

          </div>

        </div>

      </section>


      {/* Dashboard */}

      <section className="px-6 py-12">

        <div className="mx-auto max-w-7xl">


          {/* Welcome */}

          <div className="rounded-3xl bg-white p-8 shadow-md">

            <p className="text-sm font-semibold tracking-[0.2em] text-yellow-600">
              ADMINISTRATION
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-950">
              Welcome to the Heritage Archive
            </h2>

            <p className="mt-3 max-w-3xl leading-relaxed text-gray-600">

              From this dashboard, administrators will eventually
              be able to manage historical records, cultural
              information, traditional leadership, Lithoko,
              photographs and approved community contributions.

            </p>

          </div>


          {/* Statistics */}

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-white p-6 shadow-md">

              <p className="text-sm text-gray-500">
                History Articles
              </p>

              <p className="mt-2 text-4xl font-bold text-green-950">
                0
              </p>

            </div>


            <div className="rounded-2xl bg-white p-6 shadow-md">

              <p className="text-sm text-gray-500">
                Cultural Records
              </p>

              <p className="mt-2 text-4xl font-bold text-green-950">
                0
              </p>

            </div>


            <div className="rounded-2xl bg-white p-6 shadow-md">

              <p className="text-sm text-gray-500">
                Gallery Items
              </p>

              <p className="mt-2 text-4xl font-bold text-green-950">
                4
              </p>

            </div>


            <div className="rounded-2xl bg-white p-6 shadow-md">

              <p className="text-sm text-gray-500">
                Contributors
              </p>

              <p className="mt-2 text-4xl font-bold text-green-950">
                0
              </p>

            </div>

          </div>


          {/* Management */}

          <div className="mt-12">

            <div className="mb-6">

              <p className="text-sm font-semibold tracking-[0.2em] text-yellow-600">
                CONTENT MANAGEMENT
              </p>

              <h2 className="mt-2 text-3xl font-bold text-green-950">
                Heritage Sections
              </h2>

            </div>


            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {dashboardItems.map((item) => (

                <div
                  key={item.title}
                  className="group rounded-2xl bg-white p-7 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="flex items-start justify-between">

                    <div className="text-4xl">
                      {item.icon}
                    </div>

                    <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-700">
                      Coming Soon
                    </span>

                  </div>


                  <h3 className="mt-6 text-2xl font-bold text-green-950">
                    {item.title}
                  </h3>


                  <p className="mt-3 leading-relaxed text-gray-600">
                    {item.description}
                  </p>


                  <button
                    type="button"
                    className="mt-6 font-semibold text-green-900 transition hover:text-yellow-600"
                  >
                    Manage →
                  </button>

                </div>

              ))}

            </div>

          </div>


          {/* Recent Activity */}

          <div className="mt-12 rounded-3xl bg-white p-8 shadow-md">

            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">

              <div>

                <p className="text-sm font-semibold tracking-[0.2em] text-yellow-600">
                  SYSTEM ACTIVITY
                </p>

                <h2 className="mt-2 text-2xl font-bold text-green-950">
                  Recent Activity
                </h2>

              </div>

              <span className="text-sm text-gray-500">
                No activity yet
              </span>

            </div>


            <div className="mt-8 rounded-2xl border border-dashed border-gray-300 p-8 text-center">

              <p className="text-gray-500">
                Administrative activity will appear here once the
                database and authentication system are connected.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}