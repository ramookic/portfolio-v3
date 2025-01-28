import { BiLogoGithub, BiLogoLinkedin, BiSolidEnvelope } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="flex flex-col">
      <div className="flex items-center gap-4">
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
      <div className="flex flex-col gap-4 mt-6 mb-4">
        <p className="text-sm text-stone-400">
          I am a web developer with a strong foundation in frontend and backend
          technologies. With over two years of experience, I specialize in
          creating user-friendly interfaces and building robust web applications
          using Go, React, Next.js, TypeScript, and Node.js.
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
  );
};

export default Hero;
