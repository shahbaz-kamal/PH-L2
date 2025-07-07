import { Outlet } from "react-router";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
}

export default App;
