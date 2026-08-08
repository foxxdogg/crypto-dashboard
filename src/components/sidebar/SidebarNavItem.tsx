interface SidebarNavItemProps {
  label: string;
  icon: React.ComponentType<{ size?: number }>;
  isActive: boolean;
}

export default function SidebarNavItem({ label, icon: Icon, isActive }: SidebarNavItemProps) {
  return (
    <li
      className={`flex items-center gap-3 px-4 py-2 text-yellow-400 transition-all duration-200 hover:text-yellow-200 md:rounded-lg dark:bg-zinc-800 dark:hover:bg-zinc-700 ${
        isActive ? 'bg-gray-300 dark:bg-zinc-950' : 'hover:bg-gray-300 dark:hover:bg-zinc-700'
      }`}
    >
      <span>{Icon && <Icon size={20} />}</span>
      <span>{label}</span>
    </li>
  );
}
