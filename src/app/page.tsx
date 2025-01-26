import { BiLogoGithub, BiLogoLinkedin, BiSolidEnvelope } from "react-icons/bi";

const Page = () => {
  return (
    <div className="w-full flex items-center justify-center mt-10">
      <div className="max-w-[600px] w-full flex flex-col gap-8">
        <section className="flex flex-col">
          <div className="flex items-center gap-4">
            {/* HERO */}
            {/* eslint-disable-next-line */}
            <img
              className="rounded-full"
              src="/avatar.jpg"
              width={52}
              height={52}
            />
            <div>
              <h1 className="font-medium text-lg">Ramo Okić</h1>
              <p className="text-sm text-stone-400">
                Full Stack Developer, Software Engineer
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-8 mb-4">
            <p className="text-sm text-stone-400">
              I am a web developer with a strong foundation in frontend and
              backend technologies. With over two years of experience, I
              specialize in creating user-friendly interfaces and building
              robust web applications using Go, React, Next.js, TypeScript, and
              Node.js.
            </p>
          </div>
          <div className="text-stone-400 text-sm flex flex-col gap-4 underline">
            <p className="flex items-center gap-2">
              <BiSolidEnvelope className="text-stone-100" size={18} />{" "}
              okicramo9@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <BiLogoLinkedin className="text-stone-100" size={18} />{" "}
              linkedin.com/in/ramookic
            </p>
            <p className="flex items-center gap-2">
              <BiLogoGithub className="text-stone-100" size={18} />{" "}
              github.com/ramookic
            </p>
          </div>
        </section>
        {/* PROJECTS */}
        {/* SKILLS */}
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
        {/* EXPERIENCE */}
        {/* EDUCATION */}
        {/* CONTACT */}
        {/* FOOTER */}
        <footer className="border-t border-stone-800 py-6 flex justify-between">
          <p className="text-stone-400 text-xs">
            © {new Date().getFullYear()} Ramo Okić.
          </p>
          <div className="flex gap-4 text-xs underline text-stone-600 ">
            <a
              rel="norefferer"
              target="_blank"
              className="hover:text-stone-400"
              href="https://www.linkedin.com/in/ramookic/"
            >
              LinkedIn
            </a>
            <a
              rel="norefferer"
              target="_blank"
              className="hover:text-stone-400"
              href="https://www.linkedin.com/in/ramookic/"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Page;
