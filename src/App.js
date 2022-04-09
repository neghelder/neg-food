import Header from "./components/header/Header";
import Main from "./components/main/Main";

import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header></Header>
      <Main />
    </CartProvider>
  );
}

export default App;
