import "./style.css";
function Header() {
  return (
    <header className="Cabecalho">
      <h1 className="title">
        Burguer <span className="color_rosa">Kenzie</span>
      </h1>
      <span className="inputEbtn">
        <input
          className="pesquisa"
          type="text"
          placeholder="oque procura...."
        />
        <button className="btnpesquisar">Pesquisar</button>
      </span>
    </header>
  );
}

export default Header;
