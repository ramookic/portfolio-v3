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
              I am a motivated web developer with a strong foundation in
              frontend and backend technologies. With over two years of
              experience, I specialize in creating user-friendly interfaces and
              building robust web applications using Go, React, Next.js,
              TypeScript, and Node.js.
            </p>
          </div>
          <div className="text-stone-400 text-sm flex flex-col gap-2">
            <p className="underline">okicramo9@gmail.com</p>
            <p className="underline">linkedin.com/in/ramookic</p>
            <p className="underline">github.com/ramookic</p>
          </div>
        </section>
        {/* PROJECTS */}
        {/* SKILLS */}
        {/* EXPERIENCE */}
        {/* EDUCATION */}
        {/* CONTACT */}
        {/* FOOTER */}
      </div>
    </div>
  );
};

export default Page;
