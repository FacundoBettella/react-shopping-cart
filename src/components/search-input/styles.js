import styled from 'styled-components'
 
export const SearchContainer = styled.div`
    width: 100%;
    margin:0 auto;
    text-align:center;
    margin-top:23px;
`

export const SearchInput = styled.input`
    &{
        border-radius: 33px !important;
        padding-right: 44px;
        padding-left:1%;
        width:60%;
        margin: 0 auto;
        height: 8vh;
        box-shadow:0 1.5px 10px -5px;
        border:gray;
    }
    &:focus{
        outline:none;
    }
`

export const SearchButton = styled.button`
    position: relative;
    left: -41px;
    z-index: 3;
    border:none;
    background-color: transparent;
    cursor:pointer;
    top:8px;
    padding-right:3px;
`

export const IconContainer = styled.span`
    opacity: 0.5;
`