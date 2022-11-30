import {
  StyledHeaders,
  TitutloHearder,
  TituloCorRosa,
  SpanEbtn,
  InputPesquisa,
  BtnPesquisa,
} from "./style";
function Header({ setFilteredProducts, recipeValue, Setpesquisa }) {
  return (
    <StyledHeaders>
      <TitutloHearder>
        Burguer <TituloCorRosa>Kenzie</TituloCorRosa>
      </TitutloHearder>
      <SpanEbtn>
        <InputPesquisa
          onChange={(event) => Setpesquisa(event.target.value)}
          type="text"
          placeholder="oque procura...."
        />
        <BtnPesquisa type="submit" onClick={() => recipeValue()}>
          Pesquisar
        </BtnPesquisa>
      </SpanEbtn>
    </StyledHeaders>
  );
}

export default Header;
