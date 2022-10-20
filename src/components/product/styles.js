import styled from "styled-components";
import { Link } from "react-router-dom";
import { fadeIn } from "../../styles/animations";

export const Article = styled.article`
  height: 450px;
  width: 280px;
`;

export const ProductContainer = styled.div`
  height: 430px;
  width: 265px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Quicksand", sans-serif;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px;
  border: 1px solid white;
`;
export const ProductTitle = styled.h1`
  height: 60px;
`;

export const ProductSubtitle = styled.h2``;
export const ImageContainer = styled.div`
  height: 200px;
  width: 225px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = styled.img`
  ${fadeIn({ time: "1s" })}
  border-radius: 4px;
  min-width: 150px;
  min-height: 80px;
  max-width: 100%;
  max-height: 90%;
`;

export const ProductDescription = styled.div`
  margin: 10px;
  width: 200px;
  height: 55px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 25px auto;
`
export const Button = styled.button`
  border: none;
  color: ${(props) => (props.disabled ? "var(--grey)" : "var(--accent)")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  margin: 4px 2px;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: ${(props) => !props.disabled && "pointer"};

  &:hover {
    color: ${(props) => !props.disabled && "var(--accent-hover)"};
  }

  &:active {
    background-color: var(--accent-hover);
    color: var(--white);
  }
`;

export const ButtonsContainer = styled.div`
  margin: 20px 0px;
`;

export const Linkstyled = styled(Link)`
  border: none;
  color: var(--mainColor);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  &:hover {
    color: var(--mainColorAccent);
  }
`;
