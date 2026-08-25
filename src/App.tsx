import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Workspace from './components/workspace/Workspace';
import { useEffect } from 'react';
import { useAppSelector } from './app/hooks';
import { Dashboard } from './features/dashboard/Dashboard';

const Portfolio = () => <div className="dark:text-white">Portfolio</div>;
const Favorites = () => <div className="dark:text-white">Favorites</div>;

function App() {
  const mode = useAppSelector((state) => state.ui.mode);
  useEffect(() => {
    const root = window.document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [mode]);
  return (
    <>
      <Layout>
        <Sidebar />
        <Header />
        <Workspace>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Workspace>
      </Layout>
    </>
  );
}

export default App;
