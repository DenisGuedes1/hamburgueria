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

export const ListaCarrinho = styled.li`
  display: flex;
  width: 17rem;
  height: 7rem;
`;
export const ImgCarrinho = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  background-color: #bdbdbd;
`;
export const NomeCarrinho = styled.p`
  font-family: "Inter", sans serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
`;
export const CatergoriaCarrinho = styled.p`
  font-family: "Inter", sans serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #bdbdbd;
`;
export const SpanTextoCarrinho = styled.span`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: -1rem 0rem 0rem 1rem;
`;

export const BtnRemove = styled.button`
  height: 15px;
  width: 51px;

  font-family: "Inter", sans serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;

  color: #bdbdbd;
  cursor: pointer;
  border: none;
  margin-left: 4rem;
`;
