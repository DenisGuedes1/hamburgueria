import "./style.css";
function Header({ setFilteredProducts, recipeValue, Setpesquisa }) {
  return (
    <header className="Cabecalho">
      <h1 className="title">
        Burguer <span className="color_rosa">Kenzie</span>
      </h1>
      <span className="inputEbtn">
        <input
          // onKeyUp={(event) => recipeValue()}
          onChange={(event) => Setpesquisa(event.target.value)}
          className="pesquisa"
          type="text"
          placeholder="oque procura...."
        />
        <button
          type="submit"
          onClick={() => recipeValue()}
          className="btnpesquisar"
        >
          Pesquisar
        </button>
      </span>
    </header>
  );
}

export default Header;
