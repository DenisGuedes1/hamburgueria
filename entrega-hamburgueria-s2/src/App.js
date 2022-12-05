import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import GlobalStyle from "../globalStyle";

import Aside from "./componentes/aside";
import Header from "./componentes/Header";
import RecipeCard from "./componentes/RecipeCard";
import Api from "./services/api";
import { DivPrincipal, StyledDivOne } from "./style";
function App() {
  const localStorageLancheFavorito = localStorage.getItem("@LancheFavorito ");
  const [products, setProducts] = useState([]); //ja usei
  // const [filteredProducts, setFilteredProducts] = useState([]); //filtrar atraves do input

  const [pesquisa, Setpesquisa] = useState([]);

  const [lancheFavorito, setLancheFavorito] = useState(
    localStorageLancheFavorito ? JSON.parse(localStorageLancheFavorito) : []
  );

  const [carrinho, setCarrinho] = useState([]); //adiciona pro carrinho
  const [cartTotal, setCartTotal] = useState(0); //efetuar a soma
  console.log(cartTotal);
  const filteredProducts = products.filter((item) => {
    return (
      item.name.toLowerCase().includes(pesquisa) ||
      item.category.toLowerCase().includes(pesquisa)
    );
  });

  function recipeValue() {
    // if (pesquisa.length) {
    //   setFilteredProducts(
    //     products.filter(
    //       (products) =>
    //         products.name.toLowerCase().includes(pesquisa) ||
    //         products.category.toLowerCase().includes(pesquisa)
    //     )
    //   );
    // }
  }

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
    Api.get("/products")
      .then((response) => {
        setProducts(response.data);
        console.log(response);
      })
      .catch((err) => console.log(err));
    localStorage.setItem("@LancheFavorito", JSON.stringify(carrinho));
  }, [carrinho]);

  return (
    <DivPrincipal>
      <Header
        Setpesquisa={Setpesquisa}
        pesquisa={pesquisa}
        productsData={products}
        recipeValue={recipeValue}
      />

      <StyledDivOne>
        <RecipeCard
          addItem={addItem}
          setCarrinho={setCarrinho}
          products={filteredProducts}
          filteredProducts={filteredProducts}
          pesquisa={pesquisa}
        />
        <Aside
          setCartTotal={setCartTotal}
          carrinho={lancheFavorito}
          products={products}
          remove={remove}
          removeItem={() => removeItem(lancheFavorito)}
        />
      </StyledDivOne>

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
    </DivPrincipal>
  );
}

export default App;
