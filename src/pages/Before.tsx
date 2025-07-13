export default function Before() {
  return (
    <div className="p-6 bg-white">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        Broken Card Layout
      </h1>
      <div className="flex flex-wrap gap-5">
        {[1, 2, 3, 4].map((card) => (
          <div
            key={card}
            style={{
              width: "270px",
              padding: "22px",
              backgroundColor: "#f1f1f1",
              boxShadow: "10px 10px 15px rgba(0,0,0,0.3)",
              borderRadius: "15px",
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              Card Title {card}
            </h2>
            <p
              style={{ fontSize: "15px", color: "#333", marginBottom: "22px" }}
            >
              This is a really long description that overflows on small screens
              and doesn't scale well.
            </p>
            <button
              style={{
                padding: "12px 35px",
                backgroundColor: "#f39c12",
                border: "none",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
            >
              Action
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
