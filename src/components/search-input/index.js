import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  SearchContainer,
  SearchInput,
  SearchButton,
  IconContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";

export const Searcher = (props) => {
  const [inputValue, setInputValue] = useState(props.param || "");
  const navigate = useNavigate();
  const search = () => {
    if (inputValue.trim() !== "") {
      navigate(`/search/${inputValue}`);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value.trim());
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        onChange={handleChange}
        value={inputValue}
        onKeyDown={handleKeyDown}
        placeholder="Buscar producto"
      />
      <SearchButton
        onClick={() => {
          search();
        }}
      >
        <IconContainer>
          <SearchIcon sx={{ fontSize: 27, color: "var(--text-primary)" }} />
        </IconContainer>
      </SearchButton>
    </SearchContainer>
  );
};
export default Searcher;
