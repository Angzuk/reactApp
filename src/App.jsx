import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Home from './components/views/Home.jsx';
import Modules from './components/views/Modules.jsx';
import Students from './components/views/Students.jsx';
import PageNotFound from './components/views/PageNotFound.jsx';

function App() {
  // Initialisation -------------------------------------------
  // State ----------------------------------------------------
  const [loggedInUser, setLoggedInUser] = useState(null);

  const AuthContext = createContext(null);
  // Handlers -------------------------------------------------
  // View -----------------------------------------------------
  return (
    <AuthContext.Provider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/students" element={<Students />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthContext.Provider>
);
}

export default App
