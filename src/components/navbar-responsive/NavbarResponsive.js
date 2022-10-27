import React, { Fragment, useContext } from "react";
import { Logo, LogoContainer } from "../navbar/styles";
import logo from "../../assets/logo/shopping.png";
import logoAlt from "../../assets/logo/shopping_alt.png";
import MenuIcon from "@mui/icons-material/Menu";
import MenuModal from "../modal/MenuModal";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

export const NavbarResponsive = ({ responsiveBoolean, handleModal, showModal }) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleMenuModal = () => {
    handleModal(!showModal);
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
          src={theme === "light" ? logoAlt : logo}
          alt="logo"
          onClick={handleGoHome}
          style={{ cursor: "pointer" }}
        />
        {!showModal ? (
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
      {showModal && <MenuModal />}
    </Fragment>
  );
};
