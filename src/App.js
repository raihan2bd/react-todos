import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout/Layout';
import './App.css';

const App = () => (
  <>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  </>
);

export default App;
