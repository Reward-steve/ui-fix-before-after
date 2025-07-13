export default function After() {
  const cards = [
    {
      title: "Card Title 1",
      desc: "Responsive layout with clean spacing and flexible design.",
    },
    {
      title: "Card Title 2",
      desc: "Built with Tailwind CSS and accessible components.",
    },
    {
      title: "Card Title 3",
      desc: "Polished layout that adapts to every screen size.",
    },
    {
      title: "Card Title 4",
      desc: "Refactored structure focused on usability and clarity.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-white p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        ✨ Refined Card Layout
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-2">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col gap-4 border border-gray-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 font-bold flex items-center justify-center rounded-full">
                {i + 1}
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h2>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>

            <div className="mt-auto pt-4">
              <button className="w-full bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
