import styled from "styled-components";
import { Eye } from "@styled-icons/entypo/Eye";
import { BagCheckFill } from "@styled-icons/bootstrap/BagCheckFill";
import { fadeIn } from "../../../styles/animations";

export const StyledDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5vh;
  transition: all 1s;
`;

export const StyledDiv = styled.div`
  width: ${(props) => (props.sizeManagment ? "100%" : "90%")};
  height: ${(props) => (props.sizeManagment ? "50vh" : "20vh")};
  display: ${(props) => (props.sizeManagment ? "grid" : "flex")};
  flex-direction: ${(props) => (props.sizeManagment ? "column" : "row")};
  justify-content: ${(props) =>
    props.sizeManagment ? "center" : "space-around"};

  align-items: center;

  gap: ${(props) => (props.sizeManagment ? "0vh" : "8vh")};
  font-size: ${(props) => (props.sizeManagment ? "16px" : "18px")};
  padding: 0.5em 2.5em;

  border-radius: 4px;
  border: 1px solid white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Quantity = styled.div`
  font-size: 2em;
`;

export const CartPrice = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  display: flex;
  align-items: flex-start;
  margin-left: auto;
`;

export const StyledDivDetails = styled.div`
  ${fadeIn({ time: "0.3s", type: "ease-in" })}

  width:  ${(props) => (props.sizeManagment ? "100%" : "90%")};
  height: ${(props) => (props.sizeManagment ? "auto" : "20vh")};
  margin: 0.5em 0px;
  border-radius: 4px;
  border: 1px solid white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const StyledDivCarrito = styled.div`
  width: 100%;
  height: ${(props) => (props.sizeManagment ? "90px" : "20vh")};

  display: flex;
  ${(props) => props.sizeManagment && "flex-direction: row"};
  align-items: center;

  margin: 1em;
  padding: ${(props) => props.sizeManagment ? "2.5vh" : "8vh"};
  margin: 0px;
  border-radius: 4px;
`;

export const ProductImage = styled.img`
  height: ${(props) => (props.sizeManagment ? "100%" : "15vh")};
  object-fit: cover;
  object-position: center center;
  border-radius: 4px;
  margin-right: 2em;
`;

export const OrderText = styled.div`
  font-size: 16px;
`;

export const CarritoText = styled.div`
  text-align: center;
  font-size: ${(props) => (props.sizeManagment ? "12px" : "16px")};
  padding-right:  ${(props) => (props.sizeManagment && "15px")};
  text-overflow: ellipsis; 
  overflow: hidden;
  white-space: nowrap;
`;

export const StyledButton = styled.button`
  font-size: ${(props) => (props.sizeManagment ? "14px" : "16px")};
  font-weight: bold;
  width: ${(props) => (props.sizeManagment ? "100%" : "10%")};
  height: ${(props) => (props.sizeManagment ? "auto" : "10vh")};
  padding: 0.2em;
  color: var(--text-secondary);
  background-color: var(--accent);
  border-radius: 4px;

  cursor: pointer;
`;

export const StyledEye = styled(Eye)`
  color: var(--text-secondary);
  width: 2.2em;
`;

export const StyledBag = styled(BagCheckFill)`
  color: var(--accent);
  width: 2.2em;
  padding: 0.1em;
  margin-right: 0.5em;
`;
