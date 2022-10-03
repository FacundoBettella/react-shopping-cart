import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { SearchContainer, SearchInput, SearchButton, IconContainer } from './styles'
import { useNavigate } from "react-router-dom";

export const Searcher = () => {
   const [inputValue, setInputValue] = useState(" ");
   const navigate = useNavigate();

   const handleChange = event => {
     setInputValue(event.target.value.trim());
   };

   const handleKeyDown = event => {    
      if (event.key === 'Enter') {
         navigate(`/search/${inputValue}`);
      }
    }

    return (
         <SearchContainer>
            <SearchInput onChange={handleChange} value={inputValue} onKeyDown ={ handleKeyDown}/>
            <SearchButton onClick={() => {navigate(`/search/${inputValue}`)}}>
               <IconContainer><SearchIcon sx={{ fontSize: 27 }}/></IconContainer>
            </SearchButton>
         </SearchContainer>
  )
};
export default Searcher;
