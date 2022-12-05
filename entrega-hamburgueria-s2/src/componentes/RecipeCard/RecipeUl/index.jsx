import {
  ImgStyle,
  ConteinerProducts,
  NomeProduto,
  CategoriaProduto,
  Precoproduto,
  BtnAdicionar,
  SpanPrecoECategoriaEnome,
  FigureImg,
} from "./styleRecipe";

function RecipeUl({ productsData, setCarrinho, carrinho, Base, addItem }) {
  // const [cliquei, setCliquei] = useState([]);

  return (
    <ConteinerProducts>
      <FigureImg>
        <ImgStyle src={productsData.img} alt={productsData.name} />
      </FigureImg>
      <SpanPrecoECategoriaEnome>
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
      </SpanPrecoECategoriaEnome>
    </ConteinerProducts>
  );
}
export default RecipeUl;
