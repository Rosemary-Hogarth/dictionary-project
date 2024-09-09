import './App.css';
import Dictionary from "./Dictionary";
import "./Dictionary.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer>
        Coded by Rosemary Hogarth and open-sourced on GitHub
      </footer>
    </div>
  );
}
