import "./index.css";
import RenderCarrinho from "../recipeCarriho/carrinho";
import SomaValores from "../SomaValores";
function Carrinho({ carrinho, setCartTotal, removeItem, remove }) {
  return (
    <aside className="carrinho">
      <h1 className="titleCarrinho">Carrinho de compras</h1>
      {carrinho.length === 0 ? (
        <>
          <p className="tituloCar">Sua sacola está vazia</p>
          <p className="tituloSecund"> Adicione itens</p>
        </>
      ) : (
        carrinho.map((index) => (
          <>
            <ul className="conteinercarrinho">
              <RenderCarrinho remove={remove} key={index} currentSale={index} />
            </ul>
          </>
        ))
      )}
      <SomaValores
        removeItem={() => removeItem(carrinho)}
        setCartTotal={setCartTotal}
        SomaCarrinho={carrinho}
      />
    </aside>
  );
}
export default Carrinho;
