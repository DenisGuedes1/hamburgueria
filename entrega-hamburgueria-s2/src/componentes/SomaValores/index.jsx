import {
  SpanRodape,
  VlorTotalP,
  TotalNumero,
  BtnRemoveTudo,
  ConteinerSomaDiv,
} from "./styleSoma";
function SomaTotal({ SomaCarrinho, setCartTotal, removeItem, carrinho }) {
  function totalValue() {
    return SomaCarrinho.reduce(
      (base, currentValue) => base + currentValue.price,

      0
    ).toFixed(2);
  }

  return (
    <ConteinerSomaDiv>
      <SpanRodape>
        <VlorTotalP>Total</VlorTotalP>

        <TotalNumero>R${totalValue()}</TotalNumero>
      </SpanRodape>
      <BtnRemoveTudo
        onClick={() => removeItem(SomaCarrinho)}
        className="removeTudo"
      >
        Remover Tudo
      </BtnRemoveTudo>
    </ConteinerSomaDiv>
  );
}
export default SomaTotal;
