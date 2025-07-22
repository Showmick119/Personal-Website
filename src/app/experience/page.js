export default function Experience() {
  const experiences = [
    {
      company: "Your Company Name",
      position: "Your Position",
      duration: "Start Date - End Date",
      location: "Location",
      description: [
        "Bullet point 1 describing your work",
        "Bullet point 2 describing achievements",
        "Bullet point 3 with metrics/impact"
      ]
    },
    {
      company: "Another Company",
      position: "Another Position",
      duration: "Start Date - End Date",
      location: "Location",
      description: [
        "Another bullet point describing your work",
        "Another bullet point with achievements",
        "Another bullet point with technical details"
      ]
    }
    // Add more experiences here as needed
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="text-stone-600 dark:text-stone-400">
        <p className="mb-6">My professional journey and key experiences.</p>
      </div>
      
      {experiences.map((exp, index) => (
        <div key={index} className="group border-l-2 border-stone-200 dark:border-stone-700 pl-6 relative">
          <div className="absolute left-[-9px] top-2 w-4 h-4 bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          
          <div className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-200">
                {exp.position}
              </h3>
              <span className="text-sm text-stone-500 dark:text-stone-500">
                {exp.duration}
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
              <span className="font-medium text-stone-700 dark:text-stone-300">
                {exp.company}
              </span>
              <span className="text-stone-500 dark:text-stone-500 text-sm">
                • {exp.location}
              </span>
            </div>
            
            <ul className="mt-3 space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="text-stone-600 dark:text-stone-400 flex items-start gap-2">
                  <span className="text-stone-500 dark:text-stone-500 mt-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
