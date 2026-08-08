import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Sun, Moon } from 'lucide-react';
import { toggleTheme } from '../../slices/uiSlice';

const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.ui.mode);
  return (
    <button
      className="mr-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-300 dark:hover:bg-zinc-700"
      onClick={() => dispatch(toggleTheme())}
    >
      {mode === 'light' ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  );
};

export default ThemeToggle;
