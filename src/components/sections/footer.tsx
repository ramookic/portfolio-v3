const Footer = () => {
  return (
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
  );
};

export default Footer;
