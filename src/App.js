import "./App.scss"
import "./darkTheme.scss"
import { About, Contact, Home, Navbar, ProjectList } from './constants/constant'

function App() {
  return (
    <div className="dark">

    <Navbar />
    <Home />
    <About />
    <ProjectList />
    <Contact />
    </div>
  );
}

export default App;
