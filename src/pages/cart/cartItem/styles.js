import styled from "styled-components";

import { Delete } from "@styled-icons/fluentui-system-filled/Delete";
import { Add } from "@styled-icons/fluentui-system-filled/Add";
import { Minus } from "@styled-icons/boxicons-regular/Minus";

export const CartText = styled.div`
  font-size: 2em;
  width: 200px;
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
  width: 200px;
`;

export const StyledDiv = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  margin: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  align-items: center;
  gap: 1em;
  padding-left: 1em;
  padding-right: 1em;
  margin: 0px;
  border-radius: 4px;
  border: 1px solid white;
`;

export const StyledDelete = styled(Delete)`
  color: var(--text-secondary);
  width: 2em;
`;
export const StyledAdd = styled(Add)`
  color: var(--text-secondary);
  width: 2em;
`;
export const StyledMinus = styled(Minus)`
  color: var(--text-secondary);
  width: 2em;
`;

export const StyledButton = styled.button`
  height: 2.5em;
  width: 2.5em;
  background-color: var(--accent);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const ProductImg = styled.img`
  width: 9%;
`;