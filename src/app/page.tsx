import Experience from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";

const Page = () => {
  return (
    <div className="container mx-auto p-6 w-full flex items-center justify-center mt-10">
      <div className="max-w-[600px] w-full flex flex-col gap-10">
        <Hero />
        {/* PROJECTS */}
        <Skills />
        <Experience />
        {/* EDUCATION */}
        {/* CONTACT */}
        <Footer />
      </div>
    </div>
  );
};

export default Page;
