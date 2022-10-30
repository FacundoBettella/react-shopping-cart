import styled from "styled-components";
import { Eye } from "@styled-icons/entypo/Eye";

export const OrderText = styled.div`
  font-size: 2em;
`;

const Quantity = styled.div`
  font-size: 2em;
`;

const CartPrice = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  display: flex;
  align-items: flex-start;
  margin-left: auto;
`;

export const StyledDiv = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  margin: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  align-items: center;
  gap: 5em;
  padding-left: 1em;
  padding-right: 1em;
  margin: 0px;
  border-radius: 4px;
  border: 1px solid white;
`;

export const StyledButton = styled.button`
  font-weight: bold;
  height: 4em;
  padding: 1em;
  background-color: var(--accent);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledEye = styled(Eye)`
  color: var(--text-secondary);
  width: 2em;
`;