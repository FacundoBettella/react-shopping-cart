import React from "react";

import { Logo, LogoContainer } from "../navbar/styles";
// import logo from "../../assets/logo/shopping.png";
import logoAlt from "../../assets/logo/shopping_alt.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Fragment } from "react";
import MenuModal from "../modal/MenuModal";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

export const NavbarResponsive = ({ responsiveBoolean }) => {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const navigate = useNavigate();

  const handleMenuModal = (e) => {
    e.preventDefault();
    setShowMenuModal(!showMenuModal);
  };

  const handleGoHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <Fragment>
      <LogoContainer
        className={responsiveBoolean ? "responsiveLogoContainer" : ""}
      >
        <Logo
          src={logoAlt}
          alt="logo"
          onClick={handleGoHome}
          style={{ cursor: "pointer" }}
        />

        {!showMenuModal ? (
          <MenuIcon
            sx={{
              color: "var(--text-secondary)",
              fontSize: "45px",
              cursor: "pointer",
            }}
            onClick={handleMenuModal}
          />
        ) : (
          <CloseIcon
            sx={{
              color: "var(--text-secondary)",
              fontSize: "45px",
              cursor: "pointer",
            }}
            onClick={handleMenuModal}
          />
        )}
      </LogoContainer>
      {showMenuModal && <MenuModal />}
    </Fragment>
  );
};
