import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Dashboard className="flex-grow-1"></Dashboard>
      </div>
      <Footer />
    </div>
  );
}

export default App;
