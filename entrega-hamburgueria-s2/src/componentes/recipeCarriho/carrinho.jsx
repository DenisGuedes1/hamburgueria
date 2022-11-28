// import Carrinho from "../aside";
import "./car.css";
function RenderCarrinho({ currentSale, removeItem, remove }) {
  return (
    <li className="ListaCarrinho">
      <img className="imgCarrinho" src={currentSale.img} alt="" />
      <span className="spanTextoCarrinho">
        <p className="NomeCarrinho">{currentSale.name} </p>
        <p className="categoria">{currentSale.category} </p>
      </span>
      {/* <p className="Preco -all">R$ {Number(currentSale.price)}</p> */}
      <button onClick={() => remove(currentSale.id)} className="remover ">
        Remover
      </button>
    </li>
  );
}
export default RenderCarrinho;
