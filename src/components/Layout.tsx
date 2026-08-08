import { useAppSelector, useAppDispatch } from '../app/hooks';
import { useEffect } from 'react';
import { setSidebarOpen } from '../slices/uiSlice';

export default function Layout({ children }: { children: React.ReactNode }) {
  const isSidebarOpen = useAppSelector((state) => state.ui.isSidebarOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      dispatch(setSidebarOpen(!isMobile));
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  return (
    <div
      className={`grid h-screen w-full grid-cols-1 grid-rows-[auto_1fr] gap-0 overflow-hidden bg-gray-200/60 transition-all duration-300 md:p-4 dark:bg-zinc-950 ${isSidebarOpen ? 'md:grid-cols-[256px_1fr]' : 'grid-cols-[0px_1fr]'} md:gap-4`}
    >
      {children}
    </div>
  );
}
