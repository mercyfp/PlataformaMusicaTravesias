import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import BibliotecaPage from '../pages/BibliotecaPage';
import MusicaPage from '../pages/MusicaPage';
import { AuthProvider } from '../context/AuthContext';
import { MusicProvider } from '../context/MusicContext';
import { ThemeProvider } from '../context/ThemeContext';

export default function AppRouter() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <MusicProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/biblioteca" element={<BibliotecaPage />} />
                <Route path="/musica" element={<MusicaPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Layout>
          </Router>
        </MusicProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
