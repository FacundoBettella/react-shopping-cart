import styled from "styled-components";
import { Delete } from "@styled-icons/fluentui-system-filled/Delete";
import { Add } from "@styled-icons/fluentui-system-filled/Add";
import { Minus } from "@styled-icons/boxicons-regular/Minus";

export const CartText = styled.div`
font-size: 1em;
width: 100%;
font-weight: bold;
`;

export const StyledButton = styled.button`
height: 1.5em;
width: 1.5em;
margin: 0px 5px;
background-color: var(--accent);
border-radius: 4px;
cursor: pointer;
`;

export const StyledAdd = styled(Add)`
color: var(--text-secondary);
width: 1em;
`;

export const StyledDelete = styled(Delete)`
color: var(--text-secondary);
width: 1em;
`;

export const StyledMinus = styled(Minus)`
color: var(--text-secondary);
width: 1em;
`;

export const Quantity = styled.div`
font-size: 1.2em;
font-weight: 500;
`;

export const CartPrice = styled.div`
font-size: 1em;
display: flex;
align-items: flex-start;
margin-left: auto;
`;

export const StyledDiv = styled.div`
display: flex;
height: auto;
width: 100%;
align-items: center;
padding: 1.5vh;
margin-bottom: 3vh;
`;