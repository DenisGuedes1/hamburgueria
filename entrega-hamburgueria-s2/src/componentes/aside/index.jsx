import "./index.css";
import RenderCarrinho from "../recipeCarriho/carrinho";
import SomaValores from "../SomaValores";
function Carrinho({ carrinho, setCartTotal, removeItem }) {
  console.log(carrinho);
  return (
    <aside className="carrinho">
      <h1 className="titleCarrinho">Carrinho de compras</h1>

      {carrinho.map((index) => (
        <ul className="conteinercarrinho">
          <RenderCarrinho
            removeItem={() => removeItem(carrinho)}
            key={index}
            currentSale={index}
          />
        </ul>
      ))}
      <SomaValores setCartTotal={setCartTotal} SomaCarrinho={carrinho} />
    </aside>
  );
}
export default Carrinho;
