import RenderCarrinho from "../recipeCarriho/carrinho";
import SomaValores from "../SomaValores";
import {
  StyleAside,
  H1TituleCarrinho,
  SubTituloCarrinho,
  SubtituloOpaciti,
  ConteinerCarrinho,
} from "./style";

function Carrinho({ carrinho, setCartTotal, removeItem, remove }) {
  return (
    <StyleAside>
      <H1TituleCarrinho>Carrinho de compras</H1TituleCarrinho>
      {carrinho.length === 0 ? (
        <>
          <SubTituloCarrinho>Sua sacola está vazia</SubTituloCarrinho>
          <SubtituloOpaciti> Adicione itens</SubtituloOpaciti>
        </>
      ) : (
        <>
          <ConteinerCarrinho>
            {carrinho.map((index) => (
              <RenderCarrinho remove={remove} key={index} currentSale={index} />
            ))}
            <SomaValores
              removeItem={() => removeItem(carrinho)}
              setCartTotal={setCartTotal}
              SomaCarrinho={carrinho}
            />
          </ConteinerCarrinho>
        </>
      )}
    </StyleAside>
  );
}
export default Carrinho;
