import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-md bg-primary transition duration-300 hover:bg-opacity-90 hover:shadow-signUp hover:opacity-80 text-base dark:bg-dark-bg flex h-10 w-10 cursor-pointer items-center justify-center text-white fixed top-4 right-4 md:top-8 md:right-8 lg:right-12 z-[99]"
    >
      <Image
        src="/images/icon/icon-moon.svg"
        alt="logo"
        width={21}
        height={21}
        className="dark:hidden"
      />

      <Image
        src="/images/icon/icon-sun.svg"
        alt="logo"
        width={22}
        height={22}
        className="hidden dark:block"
      />
    </button>
  );
};

export default ThemeToggler;
