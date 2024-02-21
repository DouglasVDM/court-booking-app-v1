import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import SideNavbar from "./components/SideNavbar";
import Court from "./components/Court";

import useCourts from "./fetchData/useCourts";

const apiEndpointPrefix = import.meta.env.VITE_API_ENDPOINT;

function App() {
  const { courts } = useCourts(apiEndpointPrefix);

  return (
    <div>
      <SideNavbar />
      <Main />
      <Court courts={courts} />
      <Projects />
      <Contact courts={courts} />
    </div>
  );
}

export default App;
