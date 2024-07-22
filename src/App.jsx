import './App.scss';
function App() {
  const loggedInUser = "Graeme";

  return (
    <div className="layout">
      <header>
        <h1>Basic React Demo</h1>
        <p className="welcome">Welcome {loggedInUser}</p>
      </header>

    </div>
)
}

export default App
