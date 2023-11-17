import logo from "./logo.svg";
import "./App.css";
import Wordbook from "./Wordbook";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <main>
            <Wordbook />
          </main>
          <footer className="App-footer">
            <small> coded by Nneka Umerah </small>
            and is{" "}
            <a href="https://github.com/Cocreatorpattern/wordbook">
              open sourced on Github
            </a>
          </footer>
        </header>
      </div>
    </div>
  );
}
