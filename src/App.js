import "./App.css";
import Scoops from "./components/Scoops";
import Toppings from "./components/Toppings";
import Form from "./components/form";
function App() {
  return (
    <div className="App">
      {/* Çeşitler */}
      <Scoops />
      {/* Soslar */}
      <Toppings />
      {/* Form */}
      <Form />
    </div>
  );
}

export default App;
