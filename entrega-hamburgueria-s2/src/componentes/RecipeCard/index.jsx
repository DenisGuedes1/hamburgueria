import RecipeUl from "./RecipeUl";

import { DivConteiner, UlConteinerProdutos } from "./style";
function RecipeCard({
  filteredProducts,
  products,
  setCarrinho,
  addItem,
  pesquisa,
}) {
  return (
    <DivConteiner>
      <UlConteinerProdutos>
        {filteredProducts.map((base) => (
          <RecipeUl
            addItem={addItem}
            Base={base}
            key={base}
            setCarrinho={setCarrinho}
            productsData={base}
          />
        ))}
      </UlConteinerProdutos>
    </DivConteiner>
  );
}
export default RecipeCard;
