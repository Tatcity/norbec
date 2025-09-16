import "./App.css";
import MainRouter from "./MainRouter";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <MainRouter />
    </CartProvider>
  );
}

export default App;
