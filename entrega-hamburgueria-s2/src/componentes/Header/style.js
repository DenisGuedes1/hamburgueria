import styled from "styled-components";
// @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap");
// :root {
//   --font-inter: "Inter", sans serif;
//   --color-black: #333333;
//   --color-rose: #eb5757;
//   --color-bk: #f5f5f5;
//   --color-white: #ffffff;
//   --color-gren: rgba(39, 174, 96, 1);
//   --color-grey: #828282;
//   --colorText-Carrinho: rgba(51, 51, 51, 1);
// }
export const StyledHeaders = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 60%;
  width: 100vw;
  height: 5rem;
  background-color: #f5f5f5;
`;
export const TitutloHearder = styled.h1`
  color: #333333;
  width: 15%;
`;
export const TituloCorRosa = styled.span`
  color: #eb5757;
  font-size: 15px;
  width: 21%;
`;
export const SpanEbtn = styled.span`
  display: flex;
  justify-content: end;
`;
export const InputPesquisa = styled.input`
  height: 50px;
  width: 270px;
  border-radius: 8px;
  border: none;
`;
export const BtnPesquisa = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  height: 40px;
  width: 100px;
  border-radius: 9px;
  padding: 0px 20px 0px 20px;
  top: 44px;
  cursor: pointer;
  border: none;
  font-family: "Inter", sans serif;
  font-weight: 500;
  color: #ffffff;
  background-color: rgba(39, 174, 96, 1);
`;
