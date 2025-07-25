import "./App.css";
import { Button } from "./components/ui/button";
import Count from "./count/Count";

function App() {
  return (
    <div className="flex flex-col items-center justify-center space-x-2">
      <Count></Count>
      <Count></Count>
    </div>
  );
}

export default App;
