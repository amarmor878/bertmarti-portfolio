import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  background: #09a9c5;
`;

export const LinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const LinkItem = styled.a`
  color: white;
  text-decoration: none;
  margin: 20px;
  font-size: 25px;
`;

// Estilos para el botón de menú
export const ToggleButtonContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ToggleButtonIcon = styled.svg`
  font-size: 50px;
`;

export const ToggleButton = styled.button`
  margin-right: 20px;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;

// Estilos para el menú abierto
export const OpenMenuContainer = styled.div`
  height: 100vh;
`;

export const OpenLinksContainer = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 100px;
`;

export const OpenLinkItem = styled.a`
  width: 100%;
  text-align: center;
`;

// Estilos para la barra de navegación en pantallas pequeñas
export const SmallScreenNav = styled.div`
  @media only screen and (max-width: 900px) {
    ${LinkItem} {
      width: 70px;
    }
  }
`;

// Estilos para el menú desplegable en pantallas pequeñas
export const SmallScreenMenu = styled.div`
  @media only screen and (max-width: 600px) {
    ${ToggleButtonContainer} {
      display: flex;
    }

    #close ${LinkItem} {
      display: none;
    }
  }
`;

// Estilos para el menú cerrado en pantallas grandes
export const LargeScreenMenu = styled.div`
  @media only screen and (min-width: 600px) {
    ${ToggleButtonContainer} {
      display: none;
    }

    .hiddenLinks {
      display: none;
    }

    #open {
      height: 100px;
    }

    #open ${LinksContainer} {
      flex-direction: row;
    }
  }
`;
