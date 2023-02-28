import { Box, Button, Container, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledLoginPage = styled("div")`
  background: ${(props) => props.theme.palette.background.default};
  padding-top: 80px;

  .login-container {
    ${(props) => props.theme.breakpoints.up("md")} {
      display: flex;
      gap: 50px;
      img {
        width: 400px;
      }
    }
  }

  .login-wrapper {
    flex-grow: 1;
  }

  .login {
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 500px;
    color: ${(props) => props.theme.palette.text.primary};
  }

  .register {
    padding-top: 30px;
    color: ${(props) => props.theme.palette.text.primary};

    .register-link {
      font-weight: 500;
    }
  }
`;

const LoginPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledLoginPage className="LoginPage">
      <Container className="login-container">
        <Box className="login-wrapper">
          <Box className="login">
            <TextField type="text" label="Username" variant="outlined" autoComplete="off" />
            <TextField type="password" label="Password" variant="outlined" autoComplete="off" />
            <Button variant="contained" size="large">
              Login
            </Button>
          </Box>
          <Box className="register">
            <Typography variant="body1">
              Don't have an account?{" "}
              <Link className="register-link" to={"/register"}>
                Register
              </Link>
            </Typography>
          </Box>
        </Box>
        {!isMobile && <img src="./images/Texting.svg" alt="" />}
      </Container>
    </StyledLoginPage>
  );
};

export default LoginPage;
