import styled from "styled-components";

export const StyleAside = styled.aside`
  width: 25%;
  height: 45%;
  margin: 1% 0% 33% 70%;
  background-color: #f5f5f5;
  overflow-x: scroll;
  position: absolute;
  /* display: block; */
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;
export const H1TituleCarrinho = styled.h1`
  background-color: rgba(39, 174, 96, 1);
  color: #f5f5f5;
  font-family: "Inter", sans serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  width: 100%;
  height: 13%;
  margin: 0 auto;
`;
export const SubTituloCarrinho = styled.p`
  font-family: "Inter", sans serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(51, 51, 51, 1);
`;
export const SubtituloOpaciti = styled.p`
  font-family: "Inter", sans serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #828282;
`;
export const ConteinerCarrinho = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem -2rem 0rem -8rem;
  width: 17.5rem;
  height: 5rem;
`;
