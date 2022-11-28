import "./soma.css";
function SomaTotal({ SomaCarrinho, setCartTotal, removeItem, carrinho }) {
  function totalValue() {
    return SomaCarrinho.reduce(
      (base, currentValue) => base + currentValue.price,

      0
    ).toFixed(2);
  }

  return (
    <div className="conteinerSoma">
      <span className="spanRodape">
        <p className="valueTotal">Total</p>

        <p className="numberTotal">R${totalValue()}</p>
      </span>
      <button onClick={() => removeItem(SomaCarrinho)} className="removeTudo">
        Remover Tudo
      </button>
    </div>
  );
}
export default SomaTotal;
