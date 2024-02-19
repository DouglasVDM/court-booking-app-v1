import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import SideNavbar from "./components/SideNavbar";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <SideNavbar />
      <Main/>
      <Work/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
