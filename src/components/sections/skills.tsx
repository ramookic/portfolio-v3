const Skills = () => {
  return (
    <section>
      <h2 className="font-medium mb-4">Skills</h2>
      <ul className="text-sm flex flex-col gap-4">
        <li className="flex gap-2">
          <p className="text-stone-400">Frontend:</p>
          <p>JavaScript, TypeScript, React, Next.js</p>
        </li>
        <li className="flex gap-2">
          <p className="text-stone-400">Backend:</p>
          <p>Node.js, Express, Go</p>
        </li>
        <li className="flex gap-2">
          <p className="text-stone-400">Database:</p>
          <p>PostgreSQL, MongoDB</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
