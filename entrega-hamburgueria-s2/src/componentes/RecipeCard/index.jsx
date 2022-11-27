import RecipeUl from "./RecipeUl";
import "./card.css";
function RecipeCard({ products, setCarrinho, addItem }) {
  return products.map((base) => (
    <div className="conteinerOne">
      <ul className="conteinerProductsOne">
        <RecipeUl
          addItem={addItem}
          Base={base}
          key={base}
          setCarrinho={setCarrinho}
          productsData={base}
        />
      </ul>
    </div>
  ));
}
export default RecipeCard;
