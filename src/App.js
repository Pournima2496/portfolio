import "./App.scss"
import { About, Contact, Home, Navbar } from './constants/constant'

function App() {
  return (
    <div className="app">

    <Navbar />

    <Home />
    <About />
    <Contact />
    </div>
  );
}

export default App;
