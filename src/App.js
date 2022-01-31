import "./App.css";
import Button from "./Components/Button/Button";
import Info from "./Components/Info/Info";

function App() {
  return (
    <>
      <div class="container">
        <header class="main-header">
          <section class="controls">
            <h1 class="main-title">The pointing gentlemen</h1>
            <Info className={"info"} />
            <Button
              className={"button button--select"}
              text={"Select all"}
              onClick={""}
            />
          </section>
        </header>

        <section class="controls"></section>

        <main class="main">
          <ul class="gentlemen"></ul>
        </main>
      </div>
    </>
  );
}

//   const countSelectedGentlemen = () => {
//     const selectedGentlemen = gentlemen
//       .filter((gentleman) => gentleman.selected)
//       .map((selectedGentleman) => selectedGentleman).length;

//     return selectedGentlemen;
//   };

export default App;
