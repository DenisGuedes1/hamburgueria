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

export const ImgStyle = styled.img`
  object-fit: cover;
  width: 12rem;
  height: 7rem;
  background: #f5f5f5;
`;
export const ConteinerProducts = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 21rem;
  width: 250px;
  object-fit: cover;
  box-shadow: 0px 4px 32px 0px rgb(0 1 0 / 7%);
`;
export const NomeProduto = styled.p`
  font-family: "Inter", sans serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
`;

export const CategoriaProduto = styled.p`
  font-family: "Inter", sans serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #828282;
`;
export const Precoproduto = styled.p`
  font-family: "Inter", sans serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: rgba(39, 174, 96, 1);
`;
export const BtnAdicionar = styled.button`
  height: 40px;
  width: 128px;
  left: 20px;
  top: 133px;
  border-radius: 8px;
  padding: 0px 20px 0px 20px;
  background-color: rgba(39, 174, 96, 1);

  font-family: "Inter", sans serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  border: none;
`;
