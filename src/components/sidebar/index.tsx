import SidebarLogo from './SidebarLogo';
import SidebarNavigation from './SidebarNavigation';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { toggleSidebar } from '../../slices/uiSlice';

export default function Sidebar() {
  const isSidebarOpen = useAppSelector((state) => state.ui.isSidebarOpen);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    if (window.innerWidth < 768) {
      dispatch(toggleSidebar());
    }
  };

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm md:hidden"
          onClick={handleClose}
        />
      )}
      <aside
        className={`fixed top-0 left-0 z-50 flex h-full w-[256px] flex-col justify-between overflow-hidden bg-gray-200 transition-transform duration-300 ease-in-out md:rounded-xl md:p-4 dark:bg-zinc-900 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-[calc(100%+16px)]'} col-start-1 row-span-2 row-start-1 md:relative md:top-0 md:left-0 md:z-0 md:h-full md:translate-x-0`}
        onClick={handleClose}
      >
        <div className="flex w-full flex-col gap-6">
          <SidebarLogo />
          <SidebarNavigation />
        </div>
      </aside>
    </>
  );
}
