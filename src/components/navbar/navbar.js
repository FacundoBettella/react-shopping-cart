import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const Ul = styled.ul`
    display:flex;
    flex-direction: row;
    justify-content: center;
    background-color: FireBrick;
`
const Li = styled.li`
    padding:1em;
`

const StyledLink = styled(Link)`
  color: FloralWhite;
  font-size: 2em;
  font-weight: bold;
  text-decoration: none;
`;

const BaseNavbar = () => {
    return(
        <nav className="navBar">
            <Ul>
                <Li><StyledLink to="/home">Home</StyledLink></Li>
                {/* <Li><StyledLink to="/productdetail">Product Detail</StyledLink></Li> */}
                <Li><StyledLink to="/cart">Cart</StyledLink></Li>
                <Li><StyledLink to="/login">Login</StyledLink></Li>
            </Ul>
        </nav>
    )
}

const Navbar = styled(BaseNavbar)`
   
`
export {Navbar}
