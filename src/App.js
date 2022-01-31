import "./App.css";
import Button from "./Button/Button";

function App() {
  return (
    <>
      <div class="container">
        <header class="main-header">
          <h1 class="main-title">The pointing gentlemen</h1>
          <Button
            className={"button button--select"}
            text={"Select all"}
            onClick={""}
          />
        </header>

        <section class="controls"></section>

        <main class="main">
          <ul class="gentlemen"></ul>
        </main>
      </div>
    </>
  );
}

export default App;
