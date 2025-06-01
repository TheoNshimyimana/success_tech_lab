const impactStats = [
    { value: "500+", label: "Youth Trained" },
    { value: "150+", label: "Businesses Supported" },
    { value: "25+", label: "Districts Reached" },
    { value: "100+", label: "Digital Jobs Facilitated" },
  ];
  
  const ImpactNumbers = () => {
    return (
      <section className="bg-white px-6 mx-4 py-12 text-left">
        <h2 className="text-2xl font-bold flex text-blue-800 mb-8">Impact In Number</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-extrabold text-blue-900">{stat.value}</h3>
              <p className="mt-2 text-base font-sans font-semibold text-gray-700 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ImpactNumbers;
  