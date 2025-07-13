export default function After() {
  const cards = [
    { title: "Card Title 1", desc: "Responsive layout with clean spacing." },
    { title: "Card Title 2", desc: "Built using Tailwind utility classes." },
    { title: "Card Title 3", desc: "Looks good on all screen sizes." },
    { title: "Card Title 4", desc: "Refactored with accessibility in mind." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Fixed Card Layout
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {card.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">{card.desc}</p>
            <button className="mt-auto bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
