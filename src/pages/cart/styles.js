import styled from "styled-components";

export const CartItemsContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  flex-direction: column;
  margin-top: 5vh;
  margin-bottom: 5vh;
  gap: 1.5vh;
  border-radius: 4px;
  background-color: var(--background);
  color: var(--text-primary);
`;

export const CartTotal = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  margin: 1em;
  align-items: center;
  gap: 1em;
  padding-left: 1em;
  padding-right: 1em;
  margin: 0px;
  border-radius: 4px;
  border: 3px solid white;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  justify-content:center;
`;

export const TotalText = styled.div`
  font-weight: bold;
  font-size: ${(props)=> props.sizeManagment ? "1.4em" : "2em"};
  width: 40%;
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
  font-size: ${(props)=> props.sizeManagment ? "1.4em" : "2em"};
  display: flex;
  align-items: flex-start;
  color: var(--text-special);
`;

export const ResponsiveCartItemsContainer = styled.div`
  min-height: 87vh;
  height: auto;
  margin-top: 5vh;
  padding: 1.5vh;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  width: 100%;
  border: 1px solid var(--white);
  color: ${(props) => (props.disabled ? "var(--grey)" : "var(--accent)")};
  padding: ${(props) => (props.disabled ? "12px 20px" : "15px 32px")};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${(props) => (props.disabled ? "14px" : "16px")};
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
