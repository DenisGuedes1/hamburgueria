import React, { useEffect, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Aside from "./componentes/aside";
import Header from "./componentes/Header";
import RecipeCard from "./componentes/RecipeCard";
function App() {
  const localStorageLancheFavorito = localStorage.getItem("@LancheFavorito ");
  const [products, setProducts] = useState([]); //ja usei
  const [filteredProducts, setFilteredProducts] = useState([products]); //filtrar atraves do input
  console.log(filteredProducts);
  const [pesquisa, Setpesquisa] = useState([filteredProducts]);

  const [lancheFavorito, setLancheFavorito] = useState(
    localStorageLancheFavorito ? JSON.parse(localStorageLancheFavorito) : []
  );

  const [carrinho, setCarrinho] = useState([]); //adiciona pro carrinho
  const [cartTotal, setCartTotal] = useState(0); //efetuar a soma
  console.log(cartTotal);

  useEffect(() => {
    if (pesquisa.length) {
      setFilteredProducts(
        products.filter(
          (products) =>
            products.name.toLowerCase().includes(pesquisa) ||
            products.category.toLowerCase().includes(pesquisa)
        )
      );
    }
  }, [pesquisa, products]);

  function recipeValue() {
    if (pesquisa.length) {
      setFilteredProducts(
        products.filter(
          (products) =>
            products.name.toLowerCase().includes(pesquisa) ||
            products.category.toLowerCase().includes(pesquisa)
        )
      );
    }
  }

  useEffect(() => {
    localStorage.setItem("@LancheFavorito", JSON.stringify(carrinho));
  }, [carrinho]);
  function addItem(recipe) {
    if (!lancheFavorito.some((lancheFavo) => lancheFavo.id === recipe.id)) {
      setLancheFavorito([...lancheFavorito, recipe]);
      toast.success("Gostosura adicionada ");
    } else {
      toast.error("verifique o carrinho");
    }
  }

  function removeItem(recipeId) {
    const newList = lancheFavorito.filter((recipe) => recipe.id === recipeId);
    setLancheFavorito(newList);
    toast("carrinho esvaziado");
  }
  function remove(recipeId) {
    const novalista = lancheFavorito.filter((item) => item.id !== recipeId);
    setLancheFavorito(novalista);
    toast.info("gostosuras removidas");
  }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setFilteredProducts(response);
        setProducts(response);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header
        Setpesquisa={Setpesquisa}
        pesquisa={pesquisa}
        productsData={products}
        recipeValue={recipeValue}
      />
      <div className="One">
        <RecipeCard
          addItem={addItem}
          setCarrinho={setCarrinho}
          products={filteredProducts}
          filteredProducts={filteredProducts}
        />
        <Aside
          setCartTotal={setCartTotal}
          carrinho={lancheFavorito}
          products={products}
          remove={remove}
          removeItem={() => removeItem(lancheFavorito)}
        />
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
}

export default App;
