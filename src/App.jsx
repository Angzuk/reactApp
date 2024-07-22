import './App.scss';
function App() {
  const loggedInUser = "Graeme";

  return (
    <div className="layout">

      <header>
        <h1>Basic React Demo</h1>
        <p className="welcome">Welcome {loggedInUser}</p>
      </header>

      <nav>
        <div className="navItem">
          <a to="/">Home</a>
        </div>

        <div className="navItem">
          <a to="/modules">Modules</a>
        </div>

        <div className="navItem">
          <a to="/students">Students</a>
        </div>
      </nav>

    </div>
)
}

export default App
