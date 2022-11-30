// import Carrinho from "../aside";
import {ListaCarrinho,ImgCarrinho,NomeCarrinho,CatergoriaCarrinho,SpanTextoCarrinho,BtnRemove} from './styleCarrinho'


function RenderCarrinho({ currentSale, removeItem, remove }) {
  return (
    < ListaCarrinho>
      <ImgCarrinho src={currentSale.img} alt="" />
      <SpanTextoCarrinho>
        <NomeCarrinho>{currentSale.name} </NomeCarrinho>
        <CatergoriaCarrinho>{currentSale.category} </CatergoriaCarrinho>
      </SpanTextoCarrinho>
      {/* <p className="Preco -all">R$ {Number(currentSale.price)}</p> */}
      <BtnRemove onClick={() => remove(currentSale.id)} className="remover ">
        Remover
      </BtnRemove>
    </ListaCarrinho>
  );
}
export default RenderCarrinho
