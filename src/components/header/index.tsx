import PageTitle from './PageTitle';
import MobileMenuToggle from './MobileMenuToggle';
import ThemeToggle from './ThemeToggle';
import GlobalSearch from './GlobalSearch';

export default function Header() {
  return (
    <header className="col-start-2 row-start-1 flex h-24 items-center justify-end bg-gray-200 p-2 text-yellow-400 md:rounded-xl md:p-4 dark:bg-zinc-900">
      <PageTitle />
      <GlobalSearch />
      <ThemeToggle />
      <MobileMenuToggle />
    </header>
  );
}
