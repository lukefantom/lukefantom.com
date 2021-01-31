import ThemeChanger from "./theme";

export default function Navigation() {
  return (
    <nav className="bg-purple dark:bg-darkgrey dark:text-whitedarktheme h-16 w-full z-50">
      <div className="flex h-full flex-row-reverse container mx-auto justify-between items-center px-4 md:px-8">
        <ThemeChanger />
      </div>
    </nav>
  );
}
