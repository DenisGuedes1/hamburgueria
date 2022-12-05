import styled from "styled-components";

export const FigureImg = styled.figure`
  background: #f5f5f5;
`;
export const ImgStyle = styled.img`
  object-fit: cover;
  width: 12rem;
  height: 7rem;
  background: #f5f5f5;
`;
export const ConteinerProducts = styled.li`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 21rem;
  width: 250px;
  object-fit: cover;

  border: solid 0.5px darkgrey;

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
export const SpanPrecoECategoriaEnome = styled.span`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  justify-items: flex-start;
  gap: 1rem;
  width: 14rem;
  margin-top: 3rem;
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
  height: 29px;
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
