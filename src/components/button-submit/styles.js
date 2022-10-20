import styled, { keyframes } from "styled-components";

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

export const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: ${(props) => (props.secondary ? "var(--accent)" : "var(--text-secondary)")};
  background: ${(props) => (props.secondary ? "var(--text-secondary)" : "var(--accent)")};
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;

  :hover {
    background: ${(props) => (props.secondary ? "var(--white)" : "var(--accent-hover)")};
    color:  ${(props) => (props.secondary && "var(--accent-hover)")};
    animation: ${jump} 0.2s ease-out forwards;
  }
`;
