import styled from "styled-components";

export const OrdersItemsContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5vh 5vh;
  border-radius: 4px;
  background-color: var(--background);
  color: var(--text-primary);
`;

export const Title = styled.h2`
  width: 100%;
  height: 5vh;
  margin-bottom: 2vh;
  text-align: center;
  color: var(--text-primary);
`;

export const CartTotal = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  margin: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  align-items: center;
  gap: 1em;
  padding-left: 1em;
  padding-right: 1em;
  margin: 0px;
  border-radius: 4px;
  border: 3px solid white;
`;

export const TotalText = styled.div`
  font-weight: bold;
  font-size: 2em;
  width: 50%;
  color: var(--text-special);
`;

export const VacioText = styled.div`
  font-weight: bold;
  font-size: 2em;
  color: var(--text-special);
  margin: auto;
`;

export const TotalPrice = styled.div`
  font-weight: bold;
  font-size: 2em;
  display: flex;
  align-items: flex-start;
  color: var(--text-special);
`;


