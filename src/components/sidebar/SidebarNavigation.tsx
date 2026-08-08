import SidebarNavItem from './SidebarNavItem';
import { useLocation, Link } from 'react-router-dom';
import { LayoutDashboard, Briefcase, Star } from 'lucide-react';

const menuItems = [
  { id: 1, label: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { id: 2, label: 'Portfolio', icon: Briefcase, path: '/portfolio' },
  { id: 3, label: 'Favorites', icon: Star, path: '/favorites' },
];

export default function SidebarNavigation() {
  const location = useLocation();
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link to={item.path} key={item.id} style={{ textDecoration: 'none' }}>
            <SidebarNavItem
              label={item.label}
              icon={item.icon}
              isActive={location.pathname === item.path}
            />
          </Link>
        ))}
      </ul>
    </nav>
  );
}
