import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nProvider } from './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <I18nProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/services"
                element={
                  <div className="py-20 text-center">
                    Services page coming soon...
                  </div>
                }
              />
              <Route
                path="/contact"
                element={
                  <div className="py-20 text-center">
                    Contact page coming soon...
                  </div>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nProvider>
  );
}

export default App;
