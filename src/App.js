import Apple from "./Apple";
import Samsung from "./Samsung";
import Alcatel from "./Alcatel";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Hook Inventory</h1>
      <br />
      <Apple number={4} />
      <br />
      <Samsung number={10} />
      <br />
      <Alcatel number={20} />
    </div>
  );
}

export default App;
