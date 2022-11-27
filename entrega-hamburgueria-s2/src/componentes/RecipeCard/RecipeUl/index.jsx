import "./recipeul.css";

function RecipeUl({ productsData, setCarrinho, carrinho, Base, addItem }) {
  // const [cliquei, setCliquei] = useState([]);

  return (
    <li className="contentProducts">
      <img src={productsData.img} alt="" />
      <p className="Nome -all">{productsData.name} </p>
      <p className="categoria">{productsData.category} </p>
      <p className="Preco -all">R$ {Number(productsData.price)}</p>
      <button
        type="submit"
        onClick={() => addItem(productsData)}
        className="Adicionar "
      >
        Adicionar
      </button>
    </li>
  );
}
export default RecipeUl;
