import { useEffect, useState } from "react";
import "./App.css";
import Aside from "./componentes/aside";
import Header from "./componentes/Header";
import RecipeCard from "./componentes/RecipeCard";
function App() {
  const [products, setProducts] = useState([]); //ja usei
  const [filteredProducts, setFilteredProducts] = useState([]); //filtrar atraves do input
  const [carrinho, setCarrinho] = useState([]); //adiciona pro carrinho
  const [cartTotal, setCartTotal] = useState(0); //efetuar a soma
  console.log(cartTotal);

  useEffect(() => {
    localStorage.setItem("@LancheFavorito", JSON.stringify(carrinho));
  }, [carrinho]);
  function addItem(recipe) {
    setCarrinho([...carrinho, recipe]);
  }

  function removeItem(recipeId) {
    const newList = carrinho.filter((recipe) => recipe._id === recipeId);
    setCarrinho(newList);
  }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header
        setFilteredProducts={setFilteredProducts}
        productsData={products}
      />
      <div className="One">
        <RecipeCard
          addItem={addItem}
          setCarrinho={setCarrinho}
          products={products}
        />
      </div>
      <Aside
        setCartTotal={setCartTotal}
        carrinho={carrinho}
        products={products}
        removeItem={() => removeItem(carrinho)}
      />
    </div>
  );
}

export default App;
