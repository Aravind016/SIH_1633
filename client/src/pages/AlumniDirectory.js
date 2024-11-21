import React from "react";

const AlumniDirectory = () => {
  // Dummy data for alumni list
  const alumni = [
    {
      name: "John Doe",
      position: "Software Engineer",
      company: "Google",
      specialization: "AI & Machine Learning",
    },
    {
      name: "Jane Smith",
      position: "Founder",
      company: "TechStart",
      specialization: "Startups & Innovation",
    },
    {
      name: "Sam Wilson",
      position: "Data Scientist",
      company: "Microsoft",
      specialization: "Big Data & Analytics",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-blue-600 text-white p-8">
        <h1 className="text-3xl font-bold">Alumni Directory</h1>
        <p className="mt-2 text-lg">
          Explore the list of alumni and their achievements.
        </p>
      </header>
      <main className="py-8 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((alumnus, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow rounded-lg hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-blue-600">
                {alumnus.name}
              </h2>
              <p className="text-gray-700">{alumnus.position}</p>
              <p className="text-gray-500">{alumnus.company}</p>
              <p className="text-sm text-gray-500">
                Specialization: {alumnus.specialization}
              </p>
            </div>
          ))}
        </div>
      </main>
   
    </div>
  );
};

export default AlumniDirectory;
