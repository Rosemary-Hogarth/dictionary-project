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
        <Dictionary defaultKeyword="coding"/>
        <main>
        </main>
      </div>
      <footer>
        Coded by Rosemary Hogarth and open-sourced on <a
        href="https://github.com/Rosemary-Hogarth/dictionary-project"
        target="_blank"
        rel="noreferrer"
        class="code"
      >GitHub</a>
      </footer>
    </div>
  );
}
