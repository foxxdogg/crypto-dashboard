export default function Workspace({ children }: { children: React.ReactNode }) {
  return (
    <main className="col-start-2 row-start-2 min-h-0 overflow-y-auto bg-gray-200 p-4 md:rounded-xl dark:bg-zinc-900">
      {children}
    </main>
  );
}
