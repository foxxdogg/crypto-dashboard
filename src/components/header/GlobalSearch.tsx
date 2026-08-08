import { useRef, useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { setQuery, resetQuery } from '../../slices/searchSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

const GlobalSearch = () => {
  const dispatch = useAppDispatch();
  const reduxQuery = useAppSelector((state) => state.search.query);
  const inputRef = useRef<HTMLInputElement>(null);
  const [localQuery, setLocalQuery] = useState(reduxQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setQuery(localQuery));
    }, 300);
    return () => clearTimeout(timer);
  }, [localQuery, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalQuery(e.target.value);
  };

  const handleClear = () => {
    setLocalQuery('');
    dispatch(resetQuery());
    inputRef.current?.focus();
  };

  return (
    <div className="relative mr-4 flex w-full max-w-sm md:mr-24">
      <button className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600">
        <Search size={16} />
      </button>
      <input
        ref={inputRef}
        className="w-full rounded-xl bg-gray-100 py-2 pr-9 pl-9 text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 focus:ring-2 focus:ring-gray-300 focus:outline-hidden dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:ring-white/20"
        type="text"
        placeholder="Search"
        value={localQuery}
        onChange={handleChange}
      />
      {localQuery !== '' && (
        <button
          onClick={handleClear}
          className="absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer text-gray-400 transition-colors hover:text-gray-600"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default GlobalSearch;
