import "./App.css";
import Button from "./Components/Button/Button";
import Gentleman from "./Components/Gentleman/Gentleman";
import Info from "./Components/Info/Info";
import gentlemen from "./gentlemen";

function App() {
  return (
    <>
      <div className="container">
        <header className="main-header">
          <section className="controls">
            <h1 className="main-title">The pointing gentlemen</h1>
            <Info className={"info"} number={countSelectedGentlemen()} />
            <Button
              className={"button button--select"}
              text={"Select all"}
              onClick={""}
            />
          </section>
        </header>

        <section className="controls"></section>

        <main className="main">
          <ul className="gentlemen">
            {gentlemen.map((gentleman) => (
              <Gentleman gentleman={gentleman} />
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}

const countSelectedGentlemen = () => {
  const selectedGentlemen = gentlemen.filter(
    (gentleman) => gentleman.selected
  ).length;

  return selectedGentlemen;
};

export default App;
