import { useLocation } from 'react-router-dom';

const TITLE_MAP = {
  '/': 'Dashboard',
  '/portfolio': 'Portfolio',
  '/favorites': 'Favorites',
} as const;

export default function Header() {
  const location = useLocation();
  return (
    <h2 className="m-auto pr-4 text-2xl font-bold md:text-3xl">
      {(TITLE_MAP as Record<string, string>)[location.pathname] || 'Page not found'}
    </h2>
  );
}
