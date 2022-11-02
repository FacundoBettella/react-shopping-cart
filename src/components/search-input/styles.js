import styled from "styled-components";
import { deviceSize } from "../../utils/viewportSizes";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 4vh auto;
  border-radius: 33px !important;
  border: 1px solid grey;
  box-shadow: 0 1.5px 10px -5px;
  color: var(--text-primary);
  background-color: var(--background);
`;

export const SearchInput = styled.input`
  & {
    width: 90%;
    margin: 0 10px;
    height: 8vh;
    border: 0;
    outline: none;
    border-radius: 33px !important;
    color: var(--text-primary);
    background-color: var(--background);
    font-size: 18px;

    :focus {
      outline: none;
    }

    @media ${deviceSize.mobileL} {
      width: 95%;
      padding-left: 10px;
    }
    @media ${deviceSize.mobileM} {
      width: 95%;
      padding-left: 10px;
    }
    @media ${deviceSize.mobileS} {
      width: 80%;
      padding-left: 5px;
    }
  }
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  position: relative;
  left: -10px;
  z-index: 3;
  border: none;
  background-color: transparent;
  top: 5px;
  padding-right: 3px;
  cursor: pointer;
`;

export const IconContainer = styled.span`
  opacity: 0.5;
`;
