import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";

function App() {
  return (
    <div className="page-layout">
      <header>
        <Header />
      </header>

      <main className="container">
        <MainContent />
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
