const data = [
  {
    id: 1,
    date: "2023 - Present",
    title: "Web Developer - Freelance",
    description:
      "Built responsive and user-friendly websites ensuring compatibility across various devices and browsers. Enhanced problem-solving skills by troubleshooting and debugging issues efficiently.",
  },
];

const Experience = () => {
  return (
    <section>
      <h2 className="font-medium mb-4">Experience</h2>
      {data.map((el) => (
        <div key={el.id} className="border-l-2 border-stone-800 pl-6">
          <p className="text-stone-400 text-sm">{el.date}</p>
          <h4>{el.title}</h4>
          <p className="text-stone-400 text-sm mt-2">{el.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
