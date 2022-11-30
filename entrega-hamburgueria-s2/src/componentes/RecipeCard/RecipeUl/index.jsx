import {
  ImgStyle,
  ConteinerProducts,
  NomeProduto,
  CategoriaProduto,
  Precoproduto,BtnAdicionar
} from "./styleRecipe";

function RecipeUl({ productsData, setCarrinho, carrinho, Base, addItem }) {
  // const [cliquei, setCliquei] = useState([]);

  return (
    <ConteinerProducts>
      <ImgStyle src={productsData.img} alt="" />
      <NomeProduto>{productsData.name} </NomeProduto>
      <CategoriaProduto>{productsData.category} </CategoriaProduto>
      <Precoproduto>R$ {Number(productsData.price)}</Precoproduto>
      <BtnAdicionar
        type="submit"
        onClick={() => addItem(productsData)}
        className="Adicionar "
      >
        Adicionar
      </BtnAdicionar>
    </ConteinerProducts>
  );
}
export default RecipeUl;
