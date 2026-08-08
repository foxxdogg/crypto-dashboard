import { Menu } from 'lucide-react';
import { useAppDispatch } from '../../app/hooks';
import { toggleSidebar } from '../../slices/uiSlice';

const MobileMenuToggle = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-300 md:hidden dark:hover:bg-zinc-700"
      onClick={() => dispatch(toggleSidebar())}
    >
      <Menu size={24} />
    </button>
  );
};

export default MobileMenuToggle;
