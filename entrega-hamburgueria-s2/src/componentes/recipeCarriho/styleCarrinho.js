import styled from "styled-components";

export const ListaCarrinho = styled.li`
  display: flex;
  width: 20rem;
  height: 7rem;
  align-items: center;
  margin: 0rem 0rem 0rem 2rem;
`;
export const ImgCarrinho = styled.img`
  width: 6rem;
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
