import { useState } from 'react';
import AuthContext from './components/auth/useAuth.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Home from './components/views/Home.jsx';
import Modules from './components/views/Modules.jsx';
import Students from './components/views/Students.jsx';
import PageNotFound from './components/views/PageNotFound.jsx';

function App() {
  // Initialisation -------------------------------------------
  const graeme = {
    UserID: 820,
    UserFirstname: "Graeme",
    UserUsertypeID: 1,
  };

  // State ----------------------------------------------------
  const [loggedInUser, setLoggedInUser] = useState(graeme);

  // Handlers -------------------------------------------------
  const login = (user) => setLoggedInUser(user);
  const logout = (user) => setLoggedInUser(null);

  // View -----------------------------------------------------
  return (
    <AuthContext.Provider value={{loggedInUser, login, logout}}>
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
