import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="page-layout">
      <header>
        <Header />
      </header>

      <main className="container">
        <MainContent />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
