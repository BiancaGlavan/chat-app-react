import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import UserDropdown from "./UserDropdown";

const StyledNavigation = styled("div")`
  padding: 10px;
  background: ${(props) => props.theme.palette.background.paper};

  .navigation-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .chat-svg {
      width: 20px;
    }
  }

  .menu-links {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .text {
    color: ${(props) => props.theme.palette.text.primary};
    font-weight: 600;
  }

  .btn-link {
    font-weight: 600;
    color: ${(props) => props.theme.palette.text.primary};
  }
`;

const Navigation = () => {
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  }

  return (
    <StyledNavigation className="Navigation">
      <Container className="navigation-container">
        <Box className="logo">
          <img className="chat-svg" src="./chat.svg" alt="chat svg" />
          <Typography className="text" variant="caption">
            ChatApp
          </Typography>
        </Box>
        <Box className="menu-links">
          {!authState.isAuth && (
            <>
              <Link to={"/"}>
                <Button className="btn-link">Join</Button>
              </Link>
              <Link to={"/login"}>
                <Button className="btn-link">Login</Button>
              </Link>
            </>
          )}
          {authState.isAuth && authState.user && (
            <>
               <Link to={"/conversations"}>
                <Button className="btn-link">Chat</Button>
              </Link>
              <UserDropdown user={authState.user} onLogout={handleLogout}/>
            </>
          )}
        </Box>
      </Container>
    </StyledNavigation>
  );
};

export default Navigation;
