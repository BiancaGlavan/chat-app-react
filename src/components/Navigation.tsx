import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

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
    font-weight: 500;
  }

  .btn-login {
    font-weight: 600;
    color: ${(props) => props.theme.palette.text.primary};
  }
`;

const Navigation = () => {
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
          <Link to={"/"}>
            <Typography className="text" variant="subtitle1">
              Chat
            </Typography>
          </Link>
          <Link to={"/login"}>
            <Button className="btn-login">Login</Button>
          </Link>
        </Box>
      </Container>
    </StyledNavigation>
  );
};

export default Navigation;
