import {Outlet} from "react-router-dom";
import S from "./layoutStyled";

const Layout = () => {
  return (
    <>
      <S.NavBarContainer>
        <S.ListContainer>
          <S.List>
            <S.Text to="/">Home</S.Text>
          </S.List>
          <S.List>
            <S.Text to="/blogs">Blogs</S.Text>
          </S.List>
          <S.List>
            <S.Text to="/contact">Contact</S.Text>
          </S.List>
        </S.ListContainer>
      </S.NavBarContainer>
      <Outlet />
    </>
  );
};

export default Layout;
