import { Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SidebarLogo() {
  return (
    <Link to="/" className="group flex items-center justify-around gap-3 text-yellow-400">
      <Coins className="h-20 w-20 pl-5 transition-colors duration-200 group-hover:text-yellow-300" />
      <h1 className="pr-5 text-2xl font-bold transition-colors duration-200 group-hover:text-yellow-300">
        CryDash
      </h1>
    </Link>
  );
}
